<script setup>
import { NResult } from 'naive-ui'
import Talk from "../components/Talk.vue";
document.title = "一片荒无人烟的地方 - 404"
</script>

<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      ↓↓↓ 寻问这是哪 ↓↓↓
    </template>
  </n-result>
  <Talk></Talk>
</template>

<style scoped>

</style>