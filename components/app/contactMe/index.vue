<template>
  <div
    class="w-full flex flex-col items-center justify-center mb-[100px] d-point"
    id="point-6"
  >
    <!-- 标题 -->
    <public-c-nav>
      <template #left>
        <public-c-mtitle text="联系我"></public-c-mtitle>
      </template>
      <template #right>
        <public-c-sectionTitle
          :texts="['CONTACT.', 'ME.']"
        ></public-c-sectionTitle>
      </template>
    </public-c-nav>
    <!-- 表单 -->
    <div class="w-full h-[100px] pr-wrapper-p pl-wrapper-p">
      <p class="text-sm text-weakenColor">如果你喜欢我的作品,请联系我</p>
      <div class="space-x-[20px] pt-[20px]">
        <input
          class="border border-weakenColor pr-[10px] pl-[10px] pt-[5px] pb-[5px] w-[20%] h-[40px]"
          placeholder="姓名"
          type="text"
          v-model="formData.name"
        />
        <input
          class="border border-weakenColor pr-[10px] pl-[10px] pt-[5px] pb-[5px] w-[20%] h-[40px]"
          placeholder="公司"
          type="text"
          v-model="formData.company"
        />
        <input
          class="border border-weakenColor pr-[10px] pl-[10px] pt-[5px] pb-[5px] w-[20%] h-[40px]"
          placeholder="电话"
          type="text"
          v-model="formData.phoneNumber"
        />
        <input
          class="border border-weakenColor pr-[10px] pl-[10px] pt-[5px] pb-[5px] w-[20%] h-[40px]"
          placeholder="邮箱"
          type="text"
          v-model="formData.email"
        />
        <button
          class="text-white pr-[20px] pl-[20px] pt-[5px] pb-[5px] bg-pDarkBrown h-[40px]"
          @click="subInfo"
        >
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = reactive({
  name: "",
  phoneNumber: "",
  company: "",
  email: "",
});
const subInfo = async () => {
  
  const result = await useFetch(`/api/contact`, {
    method: "post",
    body: {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      company: formData.company,
      email: formData.email,
    },
  });

  console.log("结果", result);
};
</script>

<style scoped></style>
