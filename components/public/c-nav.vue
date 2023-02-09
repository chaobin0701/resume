<template>
  <div
    class="w-full h-[200px] bg-white flex justify-between place-items-center pr-wrapper-p pl-wrapper-p"
  >
    <slot name="left"><div>default</div></slot>
    <slot name="right"><div>default</div></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
