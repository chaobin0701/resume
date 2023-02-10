<template>
  <div class="w-full pr-wrapper-p pl-wrapper-p flex justify-around">
    <!-- 技巧 -->
    <div class="grid grid-cols-2 grid-rows-4 flex-1 h-[300px]">
      <div class="col-span-2"><p class="title relative font-bold">技巧</p></div>
      <app-content-mySkills-level
        :skillsLevels="skillsLevel"
      ></app-content-mySkills-level>
    </div>
    <!-- 能力 -->
    <div class="grid grid-cols-2 grid-rows-4 flex-1">
      <div class="col-span-2"><p class="title relative font-bold">能力</p></div>
      <div class="mr-[30px]" v-for="(ability,index) in abilitys" :key="index">
        <span class="text-weakenColor text-[12px]">{{ability.explain}}</span>
        <p class="">{{ability.des}}</p>
      </div>
    </div>
  </div>
</template>
等级
<script setup lang="ts">
const skillsLevel = [
  { skillsName: "Photoshop", level: 100 },
  { skillsName: "Vue", level: 80 },
  { skillsName: "React", level: 60 },
  { skillsName: "C#", level: 50 },
  { skillsName: "java", level: 40 },
];
const abilitys = [
  { explain: "工作经验", des: "两年半前端开发经验" },
  { explain: "熟悉", des: "前后端分离开发模式" },
  { explain: "熟悉", des: "Vue全家开发" },
  { explain: "熟悉", des: "HTML,CSS标签" },
  { explain: "了解", des: "Node.js、React.js..." },
];
</script>

<style scoped>
.title::before {
  @apply subscript-skills;
}
</style>
