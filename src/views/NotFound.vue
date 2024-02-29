<script setup>
import { NResult } from 'naive-ui'
import Talk from "../components/Talk.vue";
import Tips from "../components/Tips.vue";
document.title = "404 - 一片荒无人烟的地方，像是异世界"
</script>

<template>
  <Tips title="路牌 - 404 Not Found" text="……（这里的路牌一个字也没有，只有一片荒芜，这可不是个好兆头）" type="success"></Tips>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      ↓↓↓ 告诉“开发者” ↓↓↓<br>
      mq5kjioc@duck.com
    </template>
  </n-result>
</template>

<style scoped>

</style>