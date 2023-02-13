<template>
  <div
    class="w-[600px] h-[300px] relative grid grid-cols-4 grid-rows-4 grid-flow-col items-center justify-items-center text-weakenColor select-none"
  >
    <!-- 左边标签 -->
    <div
      v-for="(tag, index) in oddTags"
      :key="index"
      :class="{ '-translate-x-[40px] ': index === 1 || index === 2 }"
      class="group"
    >
      <span
        class="cursor-pointer block border border-blue-200 pr-[25px] pl-[25px] leading-7 rounded-full group-hover:border-blue-400 group-hover:bg-blue-100 group-hover:text-black duration-300"
        >{{ tag }}</span
      >
    </div>
    <img
      class="overflow-hidden w-[220px] h-[220px] rounded-full border-[5px] border-white shadow-xl col-span-2 row-span-4"
      src="https://img0.baidu.com/it/u=1250551608,2180019998&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      alt=""
    />
    <!-- 右边标签 -->
    <div
      v-for="(tag, index) in evenTages"
      :key="index"
      :class="{ 'translate-x-[40px] ': index === 1 || index === 2 }"
      class="group"
    >
      <span
        class="cursor-pointer block border border-pink-200 pr-[25px] pl-[25px] leading-7 rounded-full group-hover:border-pink-400 group-hover:bg-pink-100 group-hover:text-black duration-300"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const tags = [
  "沉稳型",
  "强迫症",
  "爱读书",
  "爱旅游",
  "爱开发",
  "技术控",
  "数码迷",
  "完美主义者",
];
const oddTags = ref([]);
const evenTages = ref([]);
tags.forEach((tag, index) => {
  if (index % 2 === 0) {
    oddTags.value.push(tag);
  } else {
    evenTages.value.push(tag);
  }
});
</script>

<style scoped></style>
