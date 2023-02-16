<template>
  <!-- 项目1 -->
  <div
    class="w-full h-[300px] flex items-center justify-between markdown-body-box"
  >
    <!-- 图片区域 -->
    <div class="h-full w-[70%] bg-pBlue" v-if="i % 2 === 0">
      <div
        class="w-[50%] h-full p-[2.4%] inline-block"
        v-for="(src, index) in info.imgs"
        :key="index"
      >
        <img class="h-full w-full inline-block shadow-sm" :src="src" alt="" />
      </div>
    </div>
    <div
      class="flex-1 flex flex-col justify-around h-full tracking-[3px]"
      v-else
    >
      <h3 class="text-[22px] font-bold text-center">{{ info.pName }}</h3>
      <p class="text-sm text-weakenColor">
        {{ info.pdescribe }}
      </p>
      <p>{{ info.pSkills }}</p>
    </div>
    <!-- 装饰 -->
    <div class="w-[120px] text-center h-full flex justify-center items-center">
      <div class="relative w-[20px] h-[20px] relative group">
        <span
          class="absolute bottom-[50%] translate-y-[50%] rotate-45 w-[20px] h-[3px] bg-black block group-hover:-rotate-0 transition-all duration-500"
        ></span>
        <span
          class="absolute bottom-[50%] translate-y-[50%] -rotate-45 w-[20px] h-[3px] bg-black block group-hover:-rotate-90 transition-all duration-500"
        ></span>
      </div>
    </div>
    <!-- 文字描述 -->
    <div
      class="flex-1 flex flex-col justify-around h-full tracking-[3px]"
      v-if="i % 2 === 0"
    >
      <h3 class="text-[22px] font-bold text-center">{{ info.pName }}</h3>
      <p class="text-sm text-weakenColor">
        {{ info.pdescribe }}
      </p>
      <p>{{ info.pSkills }}</p>
    </div>
    <div class="h-full w-[70%] bg-pBlue" v-else>
      <div
        class="w-[50%] h-full p-[2.4%] inline-block"
        v-for="(src, index) in info.imgs"
        :key="index"
      >
        <img class="h-full w-full inline-block shadow-sm" :src="src" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  info: Object,
  i: Number,
});
const images = ["https://i.postimg.cc/tTspdfZk/QQ-20230210144214.png"];
</script>

<style scoped></style>
