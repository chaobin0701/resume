<template>
  <div
    class="userInfo-1 w-[500px] h-[300px] bg-white border border-weakenColor rounded-md relative box-border p-[20px] flex flex-col justify-around"
  >
    <public-c-mtitle text="大张伟"></public-c-mtitle>
    <div class="mt-[16px] relative space-x-[10%] flex">
      <div class="item" v-for="(item, index) in 4" :key="index">
        <p class="leading-[30px]">UI界面</p>
        <p class="text-weakenColor text-[12px]">设计师</p>
      </div>
    </div>
    <div class="mt-[50px] flex space-x-[20px]">
      <div
        class="border border-weakenColor pl-[25px] pr-[25px] text-[15px] rounded-full h-[30px] leading-[30px]"
        v-for="(item, index) in 2"
        :key="index"
      >
        首页 ->
      </div>
    </div>
    <!-- 小圆点 -->
    <span
      class="absolute w-[10px] h-[10px] rounded-full border border-black bottom-[10px] right-[10px]"
    ></span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* name装饰 */

</style>
