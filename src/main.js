// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueScrollTo from "vue-scrollto";
Vue.config.productionTip = false;

//Plug-in to scroll
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    components: { App },
    template: "<App/>",
});
