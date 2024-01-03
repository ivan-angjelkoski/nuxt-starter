import { defineNuxtPlugin } from "#app";
import * as vt from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default, {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
  });
  return {
    provide: {
      toast: vt.useToast(),
    },
  };
});
