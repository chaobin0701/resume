<template>
  <div>
    <!-- 个人信息1 -->
    <div
      class="bg-[rgb(245,245,245)] w-full h-[500px] flex items-center space-x-[50px] justify-around pr-wrapper-p pl-wrapper-p"
    >
      <!-- 头像 个人标签 -->
      <app-aboutMe-personalTag
        :tags="myBasicInfo.tags"
      ></app-aboutMe-personalTag>
      <!-- 个人信息-1 -->
      <app-aboutMe-personalInfo
        :name="myBasicInfo.name"
        :links="myBasicInfo.links"
        :explains="myBasicInfo.explains"
      ></app-aboutMe-personalInfo>
    </div>
    <!-- 个人信息2 -->
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
          <app-aboutMe-info
          :basicInfo="myBasicInfo.basicInfo" 
          :jobOrientation="myBasicInfo.jobOrientation" 
          :contactInformation="myBasicInfo.contactInformation"
          ></app-aboutMe-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  myBasicInfo: Object,
});
</script>

<style scoped></style>
