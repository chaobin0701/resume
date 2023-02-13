<template>
  <div class="app">
    <!-- 顶部Header -->
    <app-myHaeder
      class="z-[100] fixed top-0 bg-white"
      :tabs="headerTabs"
    ></app-myHaeder>
    <!-- 自我介绍部分 -->
    <app-aboutMe class="mt-[100px]" :myBasicInfo="myInfo.basicInformation"></app-aboutMe>
    <!-- 我的技能 -->
    <app-mySkills></app-mySkills>
    <!-- 校园经历 -->
    <app-myCampusLife></app-myCampusLife>
    <!-- 工作经历 -->
    <app-myWork></app-myWork>
    <!-- 作品展示 -->
    <app-works></app-works>
    <!-- 联系我 -->
    <app-contactMe></app-contactMe>
    <!-- 网页备份信息 -->
    <app-footer></app-footer>
  </div>
</template>
<script setup>
import { getInfo } from "@/api/index.ts";
// // 获取到的信息
const myInfo = await getInfo();

// 信息处理 并传递给子组件
const headerTabs = reactive([]);
for (const item in myInfo) {
  headerTabs.push(myInfo[item].title);
}
</script>

<style></style>
