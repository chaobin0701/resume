<template>
  <!-- 技能卡 -->
  <public-c-nav>
    <template #left>
      <public-c-mtitle text="技能卡"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['My.', 'SKILLS.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <!-- 技能卡内容区域 -->
  <app-content-mySkills></app-content-mySkills>

  <!-- 校园经历 -->
  <public-c-nav>
    <template #left>
      <public-c-mtitle text="校园经历"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['CAMPUS.', 'LIFE.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <!-- 校园经历内容区域 -->
  <app-content-campusLife></app-content-campusLife>

  <!-- 工作经历 -->
  <public-c-nav>
    <template #left>
      <public-c-mtitle text="工作经验"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['INTERN.', 'SHIP.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <app-content-internShip></app-content-internShip>
</template>

<script setup lang="ts"></script>

<style scoped></style>
