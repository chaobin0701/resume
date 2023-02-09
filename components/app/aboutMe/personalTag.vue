<template>
  <div
    class="w-[600px] h-[300px] relative grid grid-cols-4 grid-rows-4 grid-flow-col items-center justify-items-center pl-[50px] pr-[50px] text-weakenColor"
  >
    <!-- 左边标签 -->
    <div
      v-for="(tag, index) in oddTags"
      :key="index"
      :class="{ '-translate-x-[20px] ': index === 1 || index === 2 }"
    >
      <span
        class="block border border-blue-200 pr-[25px] pl-[25px] leading-[30px] rounded-full"
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
      :class="{ 'translate-x-[20px] ': index === 1 || index === 2 }"
    >
      <span
        class="block border  border-pink-200 pr-[25px] pl-[25px] leading-[30px] rounded-full"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const tags = ["爱旅游", "爱旅游", "爱旅游", "爱旅游", "爱旅游", "爱旅游"];
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
