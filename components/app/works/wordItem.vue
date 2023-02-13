<template>
  <!-- 项目1 -->
  <div class="w-full h-[300px] flex items-center justify-between">
    <!-- 图片区域 -->
    <div class="h-full w-[70%] bg-pBlue"></div>
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
    <div class="flex-1 flex flex-col justify-around h-full tracking-[3px]">
      <h3 class="text-[22px] font-bold text-center">XXXXXXXXX项目</h3>
      <p class="text-sm text-weakenColor">
        这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明
      </p>
      <p>使用技术:XXXXXX、XXXXXX</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
