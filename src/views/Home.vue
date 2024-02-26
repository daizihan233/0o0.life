<script setup>
import {NResult} from "naive-ui";
document.title = "你温暖而熟悉的家，最可信的地方 - 主页"
</script>

<template>
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