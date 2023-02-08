<template>
  <div class="text-[26px] font-bold name">
    <span class="relative">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
// ts写法
const props = withDefaults(
  defineProps<{
    text?: string; // 是否必传
  }>(),
  {
    text: "默认值",
  }
);
</script>

<style scoped>
/* name装饰 */
.name span::before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: 2px;
  bottom: 0px;
  right: -5px;
  border-radius: 50%;
  background-color: black;
}
</style>
