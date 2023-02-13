<template>
  <div class="w-[60%] h-[600px] mt-[40px] flex">
    <!-- 左边内容区 -->
    <div
      class="h-full w-[30%] bg-pBlue grid grid-rows-6 grid-cols-2 justify-center items-center p-[50px] text-center"
    >
      <public-c-mtitle
        :text="jobOrientation.cTitle"
        class="row-span-3 col-span-2"
        v-into="'focus-in-expand'"
      ></public-c-mtitle>
      <div class="animation-300" v-into="'fade-in-down'"
      v-for="(item,index) in jobOrientation.info" :key="index"
      >
        <p class="text-xl font-bold">{{ item.jobName }}</p>
        <span class="text-xs text-weakenColor">{{item.jobDes}}</span>
      </div>
    </div>
    <!-- 右边内容区 -->
    <div class="flex-1 bg-white flex justify-around box-border p-[50px]">
      <!-- 基本信息 -->
      <div class="grid grid-rows-6 grid-cols-2 justify-center items-center">
        <public-c-mtitle
          :text="basicInfo.cTitle"
          class="col-span-2 row-span-3 title relative"
          v-into="'focus-in-expand'"
        ></public-c-mtitle>

        <div
          v-for="(info, index) in basicInfo.info"
          :key="index"
          class="mr-[30px] animation-500"
          v-into="'fade-in-down'"
        >
          <span class="text-weakenColor text-xs">{{ info.key }}</span>
          <p class="">{{ info.value }}</p>
        </div>
      </div>

      <!-- 联系我 -->
      <div class="grid grid-rows-6 justify-center items-center">
        <public-c-mtitle
          :text="contactInformation.cTitle"
          class="row-span-3 title relative"
          v-into="'focus-in-expand'"
        ></public-c-mtitle>
        <div
          v-for="(info, index) in contactInformation.info"
          :key="index"
          class="mr-[30px] animation-500"
          v-into="'fade-in-down'"
        >
          <span class="text-weakenColor text-xs">{{ info.key }}</span>
          <p class="">{{ info.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  //基础信息
  basicInfo:Object,
   // 求职方向
   jobOrientation:Object,
   // 个人联系信息
   contactInformation: Object
})
</script>

<style scoped>
.title::before {
  @apply subscript-pInfo1;
}
.focus-in-expand {
  -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.fade-in-down {
  -webkit-animation: fade-in-right 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  animation: fade-in-right 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
