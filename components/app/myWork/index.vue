<template>
  <!-- 工作经历 -->
  <public-c-nav id="point-4" class="d-point">
    <template #left>
      <public-c-mtitle text="工作经验"></public-c-mtitle>
    </template>
    <template #right>
      <public-c-sectionTitle
        :texts="['INTERN.', 'SHIP.']"
      ></public-c-sectionTitle>
    </template>
  </public-c-nav>
  <div
    class="w-full pr-wrapper-p pl-wrapper-p flex items-center justify-center flex-col mb-[200px] space-y-[60px]"
  >
    <app-content-item
      v-for="(item, index) in infos"
      :key="index"
      :info="item"
      :order="index"
    >
    </app-content-item>
  </div>
</template>

<script setup lang="ts">
// 模拟的数据
const infos = [
  {
    cName: "某某有限公司",
    pName: "平-面-设-计-师",
    startTime: "",
    endTime: "",
    describe: [
      { des: "服务客户共计", explain: "30余" },
      { des: "服务项目共计", explain: "300余" },
      { des: "代表项目", explain: "某某公司VI设计" },
    ],
  },
  {
    cName: "某某有限公司",
    pName: "平面设计师",
    startTime: "",
    endTime: "",
    describe: [
      { des: "服务客户共计", explain: "30余" },
      { des: "服务项目共计", explain: "300余" },
      { des: "代表项目", explain: "某某公司VI设计" },
    ],
  },
  {
    cName: "某某有限公司",
    pName: "平面设计师",
    startTime: "",
    endTime: "",
    describe: [
      { des: "服务客户共计", explain: "30余" },
      { des: "服务项目共计", explain: "300余" },
      { des: "代表项目", explain: "某某公司VI设计" },
    ],
  },
];
</script>

<style scoped></style>
