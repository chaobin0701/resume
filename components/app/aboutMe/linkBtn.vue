<template>
  <div
    class="border border-weakenColor pl-[25px] pr-[25px] text-[15px] rounded-full h-[30px] leading-[30px]"
  >
    <a :href="link"><slot></slot> -></a>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link?: string;
  }>(),
  {
    link: "#",
  }
);
</script>

<style scoped></style>
