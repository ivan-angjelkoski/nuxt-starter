<script setup lang="ts">
import type { AppDropdown } from "#build/components";

//
</script>

<template>
  <div>
    <AppDropdown>
      <template>
        <button class="bg-red-500">{{ $t("hello") }}</button>
      </template>

      <template #content>
        <div>Content</div>
      </template>
    </AppDropdown>
  </div>
</template>
