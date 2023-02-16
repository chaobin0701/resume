<template>
  <div
    class="box-border pr-[40%]"
    v-for="(s, index) in skillsLevels"
    :key="index"
  >
    <span class="text-sm leading-7">{{ s.skillsName }}</span>
    <div class="w-fill h-[6px] relative" v-into="'opacity'">
      <li
        class="absolute w-full h-full rounded-full border border-gray-900 bg-gray-300 list-none"
      ></li>
      <li
        :style="{ width: `${s.level}%` }"
        v-into="'level-change'"
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
