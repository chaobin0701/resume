<template>
  <div class="flex w-full h-[250px] rounded-[5px] overflow-hidden">
    <div
      :class="config[order].color"
      class="grid grid-cols-5 grid-rows-3 w-[40%] h-full p-[30px]"
    >
      <div class="col-span-4 text-[15px] tracking-[3px]">
        <p>{{ info.cName }}</p>
      </div>
      <span class="vertical-rl text-weakenColor tracking-[2px]">{{
        config[order].text1
      }}</span>
      <div class="col-span-5 self-center font-bold text-[35px] tracking-[5px]">
        {{ info.pName }}
      </div>
      <!-- 日期开始 -->
      <div class="self-end flex h-[26px]">
        <div>
          <p class="text-right text-sm font-bold leading-1">03</p>
          <p class="text-right text-xs text-weakenColor leading-3">2015</p>
        </div>
        <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
        <span class="text-xs rotate-90 translate-x-[-12px]">MAR</span>
      </div>
      <!-- 日期结束 -->
      <div class="self-end flex h-[26px]">
        <div>
          <p class="text-right text-sm font-bold leading-1">03</p>
          <p class="text-right text-xs text-weakenColor leading-3">2015</p>
        </div>
        <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
        <span class="text-xs rotate-90 translate-x-[-12px]">JAN</span>
      </div>
      <div
        class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
      ></div>
    </div>
    <!-- 右边 -->
    <div class="flex justify-between bg-pGrey w-[60%] h-full p-[30px] relative">
      <div class="flex flex-col justify-between">
        <div
          class="mr-[30px]"
          v-for="(item, index) in info.describe"
          :key="index"
        >
          <span class="text-weakenColor text-xs">{{ item.des }}</span>
          <p class="font-bold">{{ item.explain }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <span class="vertical-rl text-weakenColor tracking-[2px]">{{
          config[order].text2
        }}</span>
        <div
          class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 设定最多三个,颜色文字配置如下
const config = [
  {
    color: "bg-pBlue",
    text1: "FIRST.",
    text2: "ONE.",
  },
  {
    color: "bg-pYellow",
    text1: "SECOND.",
    text2: "TWO.",
  },
  {
    color: "bg-pBrown",
    text1: "THIRD.",
    text2: "THREE.",
  },
];
const props = defineProps({
  info: Object,
  order: Number,
});
</script>

<style scoped></style>
