// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
// something to do
// }
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios
