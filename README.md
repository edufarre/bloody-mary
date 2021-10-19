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

In order to check that everything is set as expected, run the following command:
```bash
# for iOS
$ tns doctor ios
# for android
$ tns doctor android
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


