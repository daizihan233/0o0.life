<script setup>
import { NResult } from 'naive-ui'
import Tips from "../components/Tips.vue";
import Talk from "../components/Talk.vue";
document.title = "404 - 一片荒无人烟的地方，像是异世界"
</script>

<template>
  <Tips title="路牌 - 404 Not Found" text="……（这里的路牌一个字也没有，只有一片虚无，这可不是个好兆头）" type="error"></Tips>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      ↓↓↓ 告诉“开发者” ↓↓↓<br>
      mq5kjioc@duck.com
    </template>
  </n-result>
  <div class="center">
    ↓↓↓ 或者寻求帮助（告诉“开发者”你是如何来到这的） ↓↓↓
  </div>
  <Talk></Talk>
</template>
