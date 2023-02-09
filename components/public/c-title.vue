<template>
  <div
    class="border border-white rounded-full w-[150px] h-[150px] flex flex-col items-center justify-around box-border p-[20px] text-white m-[10px]"
  >
    <h2 class="font-bold">{{ text }}</h2>
    <span class="w-[20px] h-[2px] bg-white rounded-sm"></span>
    <p class="text-[14px]">{{ des }}</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text?: string;
    des?: string;
  }>(),
  {
    text: "主标题",
    des: "描述",
  }
);
</script>

<style scoped></style>
