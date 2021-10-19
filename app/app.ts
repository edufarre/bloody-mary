import { firebase } from "@nativescript/firebase";
import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
  () => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
)

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
