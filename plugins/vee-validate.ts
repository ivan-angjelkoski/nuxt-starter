import { defineRule, configure } from "vee-validate";
import {
  required,
  between,
  email,
  numeric,
  min,
  max,
} from "@vee-validate/rules";

const errorMessageMap: Record<string, any> = {
  required: () => `"Required"`,
  min: (val: string) => `Minimum characters allowed: ${val}`,
};

export default defineNuxtPlugin(() => {
  defineRule("required", required);
  defineRule("min", min);

  configure({
    generateMessage: (context) => {
      return context.rule
        ? errorMessageMap[context.rule.name](context.rule.params)
        : "Error";
    },
  });
});
