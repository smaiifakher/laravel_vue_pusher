/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import router from "./Router/router";

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import Vuetify from "vuetify";
import User from "./Helpers/User";

Vue.use(Vuetify)
//User.loggedOut()
console.log(User.loggedIn(), User.name())

window.EventBus = new Vue();


import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.component('vue-simplemde', VueSimplemde)

import Simplemde from "simplemde";

window.Simplemde =  Simplemde


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('AppHome', require('./components/AppHome.vue').default)


const vuetify = new Vuetify();

const app = new Vue({
    el: '#app',
    vuetify,
    router
}).$mount('#app');
