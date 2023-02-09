<template>
  <div class="w-full h-[350px] pr-wrapper-p pl-wrapper-p flex justify-between">
    <!-- 在校成绩 -->
    <div
      class="w-[45%] bg-pBlue rounded-[10px] p-[30px] grid grid-rows-4 grid-cols-2"
    >
      <div class="col-span-2">
        <p class="relative text-[18px] font-bold title">在校成绩</p>
      </div>
      <div class="mr-[30px]" v-for="item in 5" :key="item">
        <span class="text-weakenColor text-[12px]">工作经验</span>
        <p class="font-bold">两年前端工程师经验</p>
      </div>
    </div>
    <!-- 获得荣誉 -->
    <div
      class="w-[45%] bg-pYellow rounded-[10px] p-[30px] grid grid-rows-4 grid-cols-2"
    >
      <div class="col-span-2">
        <p class="relative text-[18px] font-bold title">获得荣誉</p>
      </div>
      <div class="mr-[30px] row-span-3" v-for="item in 2" :key="item">
        <span class="text-weakenColor text-[12px]">工作经验</span>
        <ul class=" space-y-[30px] mt-[10px]">
          <li class="font-bold">两年前端工程师经验</li>
          <li class="font-bold">两年前端工程师经验</li>
          <li class="font-bold">两年前端工程师经验</li>
        </ul>
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
