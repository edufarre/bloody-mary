# Bloody Mary

![bloody_mary](bloody_mary.ico)

> Mobile app - Client's Zone Holaluz

## Requirements

Bloody Mary requires `node >= 16` to run.

We suggest using [nvm](https://github.com/nvm-sh/nvm) as a node version manager.

This project uses [Nativescript-Vue framework](https://nativescript-vue.org/en/docs/introduction/)

## Installation

### Setting the environment up

Before installing the project's dependencies, we should set our environment up according to our computer's operative system and the mobile operative system we want to target.
* [Windows & Android](https://docs.nativescript.org/environment-setup.html#windows-android)
* Windows & iOS --> NOT SUPPORTED
* [macOS & Android](https://docs.nativescript.org/environment-setup.html#macos-android)
* [macOS & iOS](https://docs.nativescript.org/environment-setup.html#macos-ios)
* [Linux & Android](https://docs.nativescript.org/environment-setup.html#linux-android)
* Linux & iOS --> NOT SUPPORTED


You will need `nativescript` installed globally in your computer in order to trigger the different commands.

```bash
$ npm install -g nativescript
```


Verify the installation was successful by running `ns -v` in your terminal. You should see a list of the available commands.

### Install dependencies

After downloading the repo:

```bash
# navigate to project's folder
$ cd bloody-mary
# install dependencies
$ npm install
```

## Usage
Check that everything is properly set:
```bash
$ ns doctor
# OR
$ ns doctor ios # for iOS
$ ns doctor android # for android
```

Use the command that suits your environment better according to the previous installation steps:
```bash
# Build, watch for changes and run the application
$ ns run <platform> --bundle
```

### Run on iOS simulator device:
```bash
$ ns run ios
```
If you are already using your XCode simulator the app will automatically start on your simulated device. In case you don't have nay devices available to run the application, the default simulator device will be used, and you **will have run the previous command again**.

* **Using a physical device:** Connect the device using a USB cable, and follow the instructions from [running on a physical device](https://docs.nativescript.org/development-workflow.html#ios-devices)

* **Using a virtual device:** Use the simulator before starting the app. 
  1. Launch Xcode and do one of the following:
      * Choose Xcode > Open Developer Tool > Simulator.
      * Control-click the Xcode icon in the Dock, and from the shortcut menu, choose Open Developer Tool > Simulator.
  2. Press `cmd + spacebar`, search for `Simulator` and then choose one of the following:
      * File > New simulator...
      * File > Open simulator


### Run on android simulator device:
```bash
$ ns run android
```

* **Using a physical device:** Connect the device using a USB cable, and follow the instructions from [running on a physical device](https://docs.nativescript.org/development-workflow.html#android-devices)

* **Using a virtual device:** Open Android Studio, and open "AVD Manager" — If you are on the welcome screen, it's under the Configure › AVD Manager dropdown, otherwise under the Tools › AVD Manager menu.

_Check more about [how to prepare an Android device for development here](https://docs.nativescript.org/environment-setup.html#preparing-an-android-device-1)_

## Push notifications
We use [nativescript-plugin-firebase](https://github.com/EddyVerbruggen/nativescript-plugin-firebase) for push notifications

### Change plugin's config
If trying to config again the plugin, follow the incoming steps:
1. Access to the library folder
```bash
$ cs ./node_modules/@nativescript/firebase
```
2. Edit the current config file
```bash
# This will edit the firebase.nativescript.json you can find in the project's root
$ npm run config
```

### How to test push notifications
✅ **Android** --> Currently working with the explained set up.

⛔️ **iOS** --> Still needs to be configured and create the proper service on Firebase.

In order to test this, a Google Play account is mandatory. We recommend using a physical mobile device is required or having a Google Play account on the Android device simulator.

Testing that they work is quite straight forward, the easiest way is using a service like [Postman](https://www.postman.com/).

Just follow the steps you can find down below and you will be ready to go:

1. It has to be a **POST** method targeting the https://fcm.googleapis.com/fcm/send endpoint.
2. Set the request headers:
```
   - Authorization: key={{SERVER_KEY}}
   - Content-Type: application/json
```
3. Body: raw
```js
   {
     "notification": {
       "title": "My title",
       "text": "My text",
     },
     "priority": "High",
     "to": "{{DEVICE_TOKEN}}"
   }
```
4. SEND

### How I can get these two required variables?

**SERVER_KEY** --> Can be found in the [Firebase console](https://console.firebase.google.com/) when creating the [Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) service.

**DEVICE_TOKEN** --> Will be displayed on the console triggering the project's run, because we are currently logging it into the console, and it will look like:
```bash
[Firebase] onPushTokenReceivedCallback: {
   "token": {{DEVICE_TOKEN}}
 }
```
