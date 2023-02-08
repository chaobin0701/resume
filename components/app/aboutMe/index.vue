<template>
  <!-- 区域1 -->
  <div
    class="bg-[rgb(245,245,245)] w-full h-[500px] flex items-center space-x-[50px] justify-center"
  >
    <!-- 头像;标签 -->
    <app-aboutMe-personalTag></app-aboutMe-personalTag>
    <!-- 个人信息-1 -->
    <app-aboutMe-personalInfo></app-aboutMe-personalInfo>
  </div>
  <!-- 区域2 -->
  <div class="w-full bg-white border border-weakenColor">
    <!-- 缓冲 -->
    <public-c-nav></public-c-nav>
    <!-- 介绍区域 -->
    <div class="w-full h-[800px] bg-[rgb(245,245,245)] relative">
      <!-- 背景 -->
      <public-c-bg></public-c-bg>
      <!-- 内容部分 -->
      <div
        class="w-full absolute flex flex-col items-center justify-center pt-[30px]"
      >
        <!-- 标题 -->
        <public-c-title></public-c-title>
        <!-- 内容区域 -->
        <app-aboutMe-info></app-aboutMe-info>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* 底部小圆圈装饰 */
.userInfo-1 {
  transform-style: preserve-3d;
}
.userInfo-1::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  top: -3px;
  right: -3px;
  transform: translateZ(-1px);
  border-radius: 0.375rem;
}

/* 个人标签伪元素 */
.item::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -8px;
  width: 5px;
  height: 1.5px;
  background: #000;
}
</style>
