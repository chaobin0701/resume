<template>
  <!-- 区域1 -->
  <div
    class="bg-[rgb(245,245,245)] w-full h-[500px] flex items-center space-x-[50px] justify-around pr-wrapper-p pl-wrapper-p"
  >
    <!-- 头像;标签 -->
    <app-aboutMe-personalTag></app-aboutMe-personalTag>
    <!-- 个人信息-1 -->
    <app-aboutMe-personalInfo></app-aboutMe-personalInfo>
  </div>
  <!-- 区域2 -->
  <div class="w-full bg-white text-">
    <!-- 缓冲 -->
    <public-c-nav>
      <template #left>
        <div></div>
      </template>
      <template #right>
        <div class="text-center leading-4 text-sm">
          <p class="text-weakenColor">2023</p>
          <p>x</p>
          <p>02.10</p>
        </div>
      </template>
    </public-c-nav>
    <!-- 介绍区域 -->
    <div class="w-full bg-[rgb(245,245,245)] relative h-[950px]">
      <!-- 背景 -->
      <public-c-bg :absolute="true"></public-c-bg>
      <!-- 内容部分 -->
      <div
        class="relative w-full flex flex-col items-center justify-center pt-[30px] z-[20]"
      >
        <!-- 标题 -->
        <public-c-title
          text="初识"
          des="About Me"
          id="point-1"
        ></public-c-title>
        <!-- 内容区域 -->
        <app-aboutMe-info></app-aboutMe-info>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
