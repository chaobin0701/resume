<template>
  <div
    class="w-full h-[200px] bg-white flex justify-between place-items-center pr-[200px] pl-[200px]"
  >
    <slot name="left">
      <div class="w-[20px] h-20px">default</div>
    </slot>
    <slot name="right">
      <div class="w-[20px] h-20px">default</div>
    </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
