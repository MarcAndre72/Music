import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidadePlugin from "./includes/validation";
import { auth } from "./includes/firebase"; // This is the file that contains the Firebase configuration
import Icon from "./directives/icon";
import i18n from "./includes/i18n";
import { registerSW } from "virtual:pwa-register";
import GlobalComponents from "./includes/_globals";
import progressBar from "./includes/progress-bar";

import "./assets/base.css";
import "./assets/main.css";
import "nprogress/nprogress.css";

import modalStore from "@/stores/modal";

registerSW({ immediate: true });

progressBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidadePlugin);
    app.use(i18n);
    app.use(GlobalComponents);
    app.directive("icon", Icon);

    app.config.globalProperties.modalStore = modalStore;

    app.mount("#app");
  }
});
