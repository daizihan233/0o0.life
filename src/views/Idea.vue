<script setup>
import { NPagination } from "naive-ui";
import {ref} from "vue";
import Tips from "../components/Tips.vue";

document.title = "想法 - 这里欢迎每一个想法，不管是什么"

const page = ref(1);
const result = {  // 假装这是一段 API 返回的数据
  "page": 1,  // 假装这是 API 返回的总页数
  "data": [  // 假装这是 API 返回的当前页数据列表
    {
      "title": "result1",
      "id": 1,
      "like": 114,
      "dislike": 514
    },
    {
      "title": "result2",
      "id": 2,
      "like": 114,
      "dislike": 514
    },
    {
      "title": "result3",
      "id": 3,
      "like": 114,
      "dislike": 514
    },
    {
      "title": "result4",
      "id": 4,
      "like": 114,
      "dislike": 514
    },
    {
      "title": "result5",
      "id": 5,
      "like": 114,
      "dislike": 514
    },
  ]
}
</script>

<template>
  <Tips title="路牌 - 想法" text="这里欢迎每一个想法，不管是什么。哪怕是无聊的、荒诞的、抽象的、虚无的…… 每一个想法，同样也包括问题。" type="success"></Tips>
  <div class="center">
    <div v-for="(resp, i) in result['data']" class="content">
      <h3 class="text">{{ resp.title }}</h3>

    </div>
    <n-pagination v-model:page="page" :page-count="result['page']" show-quick-jumper>
      <template #prev>
        往回走
      </template>
      <template #next>
        继续走
      </template>
      <template #goto>
        带我去
      </template>
    </n-pagination>
  </div>
</template>

<style scoped>
.content {
  border-style: solid;
  border-width: thin;
  margin: 8px;
}
.text {
  margin: 16px;
}
</style>