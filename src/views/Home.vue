<script setup>
import {NResult} from "naive-ui";
import Tips from "../components/Tips.vue";
document.title = "主页 - 你温暖而熟悉的家，最可信的地方"
</script>

<template>
  <Tips title="路牌 - 主页" text="一天结束了吗？来这里，好好休息一下。" type="success"></Tips>
  <n-result
      status="403"
      title="走吧"
      description="此处施工，请绕行"
  >
    <template #footer>
      这个网站我还在做，还没做好，你可以到处看看，或者直接走
    </template>
  </n-result>
</template>

<style scoped>

</style>