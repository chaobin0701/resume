<template>
  <!-- 校园经历 -->
  <public-c-nav id="point-3" class="d-point">
    <template #left>
      <public-c-mtitle :text="title"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['CAMPUS.', 'LIFE.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <div class="w-full h-[350px] pr-wrapper-p pl-wrapper-p flex justify-between">
    <!-- 在校成绩 -->
    <div
      class="w-[45%] bg-pBlue rounded-[10px] p-[30px] grid grid-rows-4 grid-cols-3"
    >
      <div class="col-span-3">
        <p class="relative text-lg font-bold title" v-into="'fade-in-right'">{{ scores.cTitle }}</p>
      </div>
      <div
        class="mr-[30px] animation-500"
        v-for="(score, index) in scores.info"
        :key="index"
        v-into="'fade-in-down'"
      >
        <span class="text-weakenColor text-xs">{{ score.des }}</span>
        <p class="font-bold">{{ score.explain }}</p>
      </div>
    </div>
    <!-- 获得荣誉 -->
    <div
      class="w-[45%] bg-pYellow rounded-[10px] p-[30px] grid grid-rows-4 grid-cols-2"
    >
      <div class="col-span-2">
        <p class="relative text-lg font-bold title" v-into="'fade-in-right'">{{ honor.cTitle }}</p>
      </div>
      <div class="mr-[30px] row-span-3">
        <span class="text-weakenColor text-xs">{{
          honor.campusAwards.des
        }}</span>
        <ul class="space-y-[30px] mt-[10px]">
          <li
          v-into="'fade-in-down'"
            class="font-bold animation-500"
            v-for="(item, index) in honor.campusAwards.explain"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mr-[30px] row-span-3">
        <span class="text-weakenColor text-xs">{{
          honor.competitionAwards.des
        }}</span>
        <ul class="space-y-[30px] mt-[10px]">
          <li
            v-into="'fade-in-down'"
            class="font-bold"
            v-for="(item, index) in honor.competitionAwards.explain"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  scores: Object,
  honor: Object,
});
</script>

<style scoped>
.title::before {
  @apply subscript-skills;
}
</style>
