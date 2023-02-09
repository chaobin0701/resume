<template>
  <div :class="direction === 'right' ?'vertical-rl' : 'rotate-90'" class="text-[14px]">
    <p v-for="(text,index) in texts" :key="index">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">

interface Props {
  texts?: string[],
  direction?:string
}
const props = withDefaults(defineProps<Props>(), {
  texts: () => {
    return ["My.","Ruseme."];
  },
  direction:"right"
});
</script>

<style scoped></style>
