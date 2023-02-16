<template>
  <!-- 技能卡 -->
  <public-c-nav id="point-2" class="d-point">
    <template #left>
      <public-c-mtitle text="技能卡"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['My.', 'SKILLS.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <div class="w-full pr-wrapper-p pl-wrapper-p flex justify-around">
    <!-- 技巧 -->
    <div class="grid grid-cols-2 grid-rows-4 flex-1 h-[300px]">
      <div class="col-span-2"><p class="title relative font-bold" v-into="'fade-in-right'">{{ skillsLevel.cTitle }}</p></div>
      <app-mySkills-level
        :skillsLevels="skillsLevel.info"
      ></app-mySkills-level>
    </div>
    <!-- 能力 -->
    <div class="grid grid-cols-2 grid-rows-4 flex-1">
      <div class="col-span-2"><p class="title relative font-bold" v-into="'fade-in-right'">{{ abilitys.cTitle }}</p></div>
      <div class="mr-[30px] animation-300" v-for="(ability, index) in abilitys.info" :key="index" v-into="'fade-in-right'">
        <span class="text-weakenColor text-xs">{{ ability.explain }}</span>
        <p class="">{{ ability.des }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  skillsLevel:Object,
  abilitys:Object
})
</script>

<style scoped>
.title::before {
  @apply subscript-skills;
}
</style>
