<template>
    <div class="w-full pr-wrapper-p pl-wrapper-p flex justify-around">
      <!-- 技巧 -->
      <div class="grid grid-cols-2 grid-rows-4 flex-1 h-[300px]">
        <div class="col-span-2"><p class="title relative font-bold">技巧</p></div>
        <div class="box-border pr-[40%]" v-for="item in 5">
          <span class="text-[14px] leading-[30px]">Photoshop</span>
          <div class="w-fill h-[6px] relative">
            <li
              class="absolute w-full h-full rounded-full border border-gray-900 bg-gray-300 list-none"
            ></li>
            <li
              class="absolute w-[40%] h-full rounded-full border border-gray-900 bg-gray-500 list-none"
            ></li>
          </div>
        </div>
      </div>
      <!-- 能力 -->
      <div class="grid grid-cols-2 grid-rows-4 flex-1">
        <div class="col-span-2"><p class="title relative font-bold">技巧</p></div>
        <div class="mr-[30px]" v-for="item in 5" :key="item">
          <span class="text-weakenColor text-[12px]">工作经验</span>
          <p class="">两年前端工程师经验</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .title::before {
    @apply subscript-skills;
  }
  </style>
  