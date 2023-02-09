<template>
  <div class="w-[60%] h-[600px] mt-[40px] flex">
    <!-- 左边内容区 -->
    <div
      class="h-full w-[30%] bg-pBlue grid grid-rows-6 justify-center items-center p-[50px]"
    >
      <public-c-mtitle text="求职方向" class="row-span-3"></public-c-mtitle>
      <div class="text-left text-[20px] space-y-[10px] occupation">
        <p>UI界面</p>
        <p>平面视觉</p>
      </div>
    </div>
    <!-- 右边内容区 -->
    <div class="flex-1 bg-white flex justify-around box-border p-[50px]">
      <!-- 基本信息 -->
      <div class="grid grid-rows-6 grid-cols-2 justify-center items-center">
        <public-c-mtitle
          text="基本信息"
          class="col-span-2 row-span-3 title relative"
        ></public-c-mtitle>

        <div v-for="(info,index) in infos" :key="index" class="mr-[30px]">
          <span class="text-weakenColor text-[12px]">{{info.key}}</span>
          <p class="">{{info.value}}</p>
        </div>
      </div>

      <!-- 联系我 -->
      <div class="grid grid-rows-6 justify-center items-center">
        <public-c-mtitle
          text="联系我"
          class="row-span-3 title relative"
        ></public-c-mtitle>
        <div v-for="(info,index) in contactInfo" :key="index" class="mr-[30px]">
          <span class="text-weakenColor text-[12px]">{{ info.key }}</span>
          <p class="">{{info.value}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const infos = [
  { key: "毕业学校", value: "XX理工学校" },
  { key: "专业", value: "产品设计" },
  { key: "学历", value: "普通本科" },
  { key: "出生年月", value: "1999.01.01" },
  { key: "籍贯", value: "福建省泉州市" },
  { key: "现居地", value: "福建省泉州市" },
  // {
  //   university: "XX理工学校",
  //   major: "产品设计,",
  //   education: "普通本科",
  //   dateOfBirth: "1999.01.01",
  //   nativePlace: "福建省泉州市",
  //   currentResidence: "福建省厦门市",
  // },
];
const contactInfo = [
  { key: "联系电话", value: "13626090XXX" },
  { key: "QQ", value: "837076176" },
  { key: "邮箱", value: "837076176@qq.com" },
  // {
  //   phoneNumber: "13626090XXX",
  //   QQ: "837076176",
  //   email: "837076176@qq.com",
  // },
];
</script>

<style scoped>
.title::before {
  @apply subscript-pInfo1;
}
</style>
