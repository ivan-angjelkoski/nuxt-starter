import { createI18n } from "vue-i18n";
import en from "@/locale/en";
import mkd from "@/locale/mkd";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "mkd",
    messages: {
      mkd,
      en,
    },
  });

  vueApp.use(i18n);
});
