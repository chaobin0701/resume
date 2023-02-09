<template>
  <div class="font-bold name text-[26px]">
    <span class="relative">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text?: string; // 是否必传
    fontSize?:number
  }>(),
  {
    text: "默认值",
    fontSize:26
  }
);
// 26px | 
</script>

<style scoped>
/* name装饰 */
.name span::before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: 2px;
  bottom: 1px;
  right: -5px;
  border-radius: 50%;
  background-color: black;
}
</style>
