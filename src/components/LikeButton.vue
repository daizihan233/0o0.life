<script setup>
import { NSpace, NButtonGroup, NButton, NFlex, NIcon } from "naive-ui"
import { HeartOutline as LikeIcon, HeartDislikeOutline as DislikeIcon } from "@vicons/ionicons5";
</script>

<script>
export default {
  props: ["like", "dislike"]
}
</script>

<template>
  <n-flex justify="center" style="padding: 8px">
    <n-space>
      <n-button-group size="small">
        <n-button type="default" round @click="like++">
          <template #icon>
            <n-icon><like-icon /></n-icon>
          </template>
          {{ like }}
        </n-button>
        <n-button type="default" round @click="dislike++">
          <template #icon>
            <n-icon><dislike-icon /></n-icon>
          </template>
          {{ dislike }}
        </n-button>
      </n-button-group>
    </n-space>
  </n-flex>
</template>