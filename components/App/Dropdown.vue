<script setup lang="ts">
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  type Placement,
} from "@floating-ui/vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  placement: {
    type: String as PropType<Placement>,
    default: "bottom-start" as Placement,
  },
});

const open = ref(false);

const reference = ref(null);
const floating = ref(null);
const container = ref(null);

onClickOutside(container, () => {
  open.value = false;
});

const { floatingStyles } = useFloating(reference, floating, {
  whileElementsMounted: autoUpdate,
  open,
  middleware: [offset(10), shift(), flip()],
  placement: computed(() => props.placement),
});

let timeout: NodeJS.Timeout;

function openOnHover() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    open.value = true;
  }, 300);
}

function closeOnHover() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    open.value = false;
  }, 300);
}

useEventBus("close").on(() => {
  open.value = false;
});

function closeAll() {
  useEventBus("close").emit();
}
</script>

<template>
  <div
    ref="container"
    class="inline-block"
    @keydown.escape="open = false"
  >
    <div
      ref="reference"
      class="inline-block"
      @click="open = !open"
    >
      <slot>
        <button class="text-white bg-blue-500 p-2 rounded">Trigger</button>
      </slot>
    </div>

    <div
      ref="floating"
      :style="floatingStyles"
      @click="closeAll"
    >
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-300"
        leave-active-class="transition-all duration-150"
        enter-from-class="scale-90 opacity-0 origin-top"
        leave-to-class="scale-90 opacity-0 origin-top"
      >
        <slot
          v-if="open"
          name="content"
        >
        </slot>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.content {
  transform-origin: top;
}
</style>
