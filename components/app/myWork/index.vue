<template>
  <!-- 工作经历 -->
  <public-c-nav id="point-4" class="d-point">
    <template #left>
      <public-c-mtitle :text="workExperience.title"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['INTERN.', 'SHIP.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <div
    class="w-full pr-wrapper-p pl-wrapper-p flex items-center justify-center flex-col mb-[200px] space-y-[60px]"
  >
    <app-myWork-item
      v-for="(item, index) in workExperience.info"
      :key="index"
      :info="item"
      :order="index"
      v-into="'fade-in-top'"
    >
    </app-myWork-item>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  workExperience: Object,
});
</script>

<style scoped></style>
