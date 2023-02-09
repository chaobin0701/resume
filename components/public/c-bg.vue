<template>
  <div
    :class="{ absolute: absolute }"
    class="bg-bg1 w-full h-[300px] bg-no-repeat bg-cover bg-center z-10"
  >
    <div
      class="w-full h-full bg-[rgba(0,0,0,.5)] flex justify-center items-center"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    absolute?: boolean;
  }>(),
  {
    absolute: false,
  }
);
</script>

<style scoped></style>
