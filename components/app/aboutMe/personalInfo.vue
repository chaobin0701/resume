<template>
  <div
    class="userInfo-1 w-[500px] h-[300px] bg-white border border-weakenColor rounded-md relative box-border p-[20px] flex flex-col justify-around"
  >
    <public-c-mtitle text="大张伟"></public-c-mtitle>
    <div class="mt-[16px] relative space-x-[10%] flex">
      <div class="item relative" v-for="(item, index) in personalDes" :key="index">
        <p class="leading-[30px]">{{ item.text }}</p>
        <p class="text-weakenColor text-[12px]">{{ item.des }}</p>
      </div>
    </div>
    <div class="mt-[50px] flex space-x-[20px]">
      <app-aboutMe-linkBtn v-for="(item,index) in links" :key="index" :link="item.link">{{ item.linkName }}</app-aboutMe-linkBtn>
    </div>
    <!-- 小圆点 -->
    <span
      class="absolute w-[10px] h-[10px] rounded-full border border-black bottom-[10px] right-[10px]"
    ></span>
  </div>
</template>

<script setup lang="ts">
const personalDes = ref([
  {
    text: "UI界面",
    des: "设计师",
  },
  {
    text: "2年",
    des: "平面设计经验",
  },
  {
    text: "2年",
    des: "实习经验",
  },
  {
    text: "美术",
    des: "专业出身",
  },
]);
const links = [
  {
    linkName: "Github",
    link: "#",
  },
  {
    linkName: "掘金主页",
    link: "#",
  },
];
</script>

<style scoped>
/* 个人标签伪元素 */
.item::before {
  @apply subscript-pInfo;
}
</style>
