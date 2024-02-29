<script setup>
import { NSpace, NAlert } from 'naive-ui'
</script>

<script>
export default {
  props: ["title", "text", "type"]
}
</script>

<template>
  <n-space vertical :size="12" class="center">
    <n-alert :title="title" :type="type">
      {{ text }}
    </n-alert>
  </n-space>
</template>

<style scoped>
</style>