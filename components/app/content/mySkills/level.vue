<template>
  <div
    class="box-border pr-[40%]"
    v-for="(s, index) in skillsLevels"
    :key="index"
  >
    <span class="text-[14px] leading-[30px]">{{ s.skillsName }}</span>
    <div class="w-fill h-[6px] relative">
      <li
        class="absolute w-full h-full rounded-full border border-gray-900 bg-gray-300 list-none"
      ></li>
      <li
        :style="{ width: `${s.level}%` }"
        class="absolute h-full rounded-full border border-gray-900 bg-gray-500 list-none"
      ></li>
    </div>
  </div>
</template>

<script setup lang="ts">
interface skillsLevel {
  skillsName: string;
  level: number;
}
interface Props {
  skillsLevels: skillsLevel[];
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
