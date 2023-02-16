<template>
  <div id="point-5" class="d-point">
    <public-c-bg>
      <public-c-title text="相知" des="About Me"></public-c-title>
    </public-c-bg>
    <!-- 作品 -->
    <public-c-nav>
      <template #left>
        <public-c-mtitle :text="projectExperience.title"></public-c-mtitle>
      </template>

      <template #right>
        <public-c-sectionTitle
          :texts="['WORKS.', 'DISPLAY.']"
        ></public-c-sectionTitle>
      </template>
    </public-c-nav>
    <div
      class="pr-wrapper-p pl-wrapper-p w-full flex flex-col items-center justify-around space-y-[100px]"
    >
      <app-myProject-item
        v-for="(info, index) in projectExperience.info"
        :key="index"
        :info="info"
        :i="index"
              v-into="'fade-in-top'"
      ></app-myProject-item>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projectExperience: Object,
});
</script>

<style scoped></style>
