<template>
  <div class="">
    <public-c-bg>
      <public-c-title text="相知" des="About Me"></public-c-title>
    </public-c-bg>
    <!-- 作品-大幅 -->
    <public-c-nav>
      <template #left>
        <public-c-mtitle text="XXX作品"></public-c-mtitle>
      </template>
      作品展示
      <template #right>
        <public-c-sectionTitle
          :texts="['WORKS.', 'DISPLAY.']"
        ></public-c-sectionTitle>
      </template>
    </public-c-nav>
    <div
      class="pr-wrapper-p pl-wrapper-p w-full flex flex-col items-center justify-center space-y-[100px]"
    >
      <!-- 项目1 -->
      <div class="w-full h-[300px] flex items-center justify-between">
        <!-- 图片区域 -->
        <div class="h-full w-[70%] bg-pBlue"></div>
        <!-- 装饰 -->
        <div
          class="w-[120px] text-center h-full flex justify-center items-center"
        >
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
          <p class="text-[14px] text-weakenColor">
            这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明
          </p>
          <p>使用技术:XXXXXX、XXXXXX</p>
        </div>
      </div>
      <!-- 项目2 -->
      <div class="w-full h-[300px] flex items-center justify-between">
        <!-- 文字描述 -->
        <div class="flex-1 flex flex-col justify-around h-full tracking-[3px]">
          <h3 class="text-[22px] font-bold text-center">XXXXXXXXX项目</h3>
          <p class="text-[14px] text-weakenColor">
            这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明
          </p>
          <p>使用技术:XXXXXX、XXXXXX</p>
        </div>
        <!-- 装饰 -->
        <div
          class="w-[120px] text-center h-full flex justify-center items-center"
        >
          <div class="relative w-[20px] h-[20px] relative group">
            <span
              class="absolute bottom-[50%] translate-y-[50%] rotate-45 w-[20px] h-[3px] bg-black block group-hover:-rotate-0 transition-all duration-500"
            ></span>
            <span
              class="absolute bottom-[50%] translate-y-[50%] -rotate-45 w-[20px] h-[3px] bg-black block group-hover:-rotate-90 transition-all duration-500"
            ></span>
          </div>
        </div>
        <!-- 图片区域 -->
        <div class="h-full w-[70%] bg-pBlue"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
