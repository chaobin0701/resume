<template>
  <div
    class="border border-weakenColor pl-[25px] pr-[15px] text-[15px] rounded-full h-[30px] leading-7 group"
  >
    <a :href="link"
      ><slot></slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-5 inline pl-[5px]  group-hover:animate-arrow"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link?: string;
  }>(),
  {
    link: "#",
  }
);
</script>

<style scoped></style>
