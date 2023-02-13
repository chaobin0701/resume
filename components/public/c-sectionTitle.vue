<template>
  <div :class="direction === 'right' ?'vertical-rl' : 'horizontal-tb'" class="text-sm">
    <p v-for="(text,index) in texts" :key="index" class="duration-500">{{ text }}</p>
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
