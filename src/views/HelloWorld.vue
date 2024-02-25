<script setup>
import { NResult, NButton, NDivider, NTabs, NTabPane } from 'naive-ui'
import {ref} from "vue";

let t = ref("403 禁止访问");
let d = ref("总有些门是对你关闭的");
let c = ref("noDisplay")

function relax() {
  t.value = "403 允许访问"
  d.value = "总有些门是对你开着的"
  c.value = "display"
}
</script>

<template>
  <n-result
      status="403"
      :title=t
      :description=d
  >
    <template #footer>
      <n-button @click="relax">放轻松</n-button>
    </template>
  </n-result>
  <div :class="c">
    <n-divider />
    停！你是怎么找到这里的？让我猜猜，你是……<br>
    <n-tabs type="segment" animated>
      <n-tab-pane name="chap1" tab="谁？">
        嗯？
      </n-tab-pane>
      <n-tab-pane name="chap2" tab="黑客？">
        哦…… 那可真是个坏消息……<br>
        走吧，我这个小站没啥好攻击的，也没有攻击价值。
      </n-tab-pane>
      <n-tab-pane name="chap3" tab="来学习的？">
        但我觉得你需要一个更好的选择，比如直接去阅读文档<br>
        我这个站是我现学现卖的，代码可能也挺乱的<br>
        我主要还是学的Python，加上学业压力，见谅。<br>
        另外，这个网站是使用 <a href="https://www.naiveui.com/zh-CN/dark/components/tabs">Naive UI</a> 制作的，但本站的的开发者可能比这个 UI 还要天真……<br>
        （Tips：请区分本站的作者和 UI 的作者，这个 UI 算是我见过做好的 Vue 3 的 UI 框架了，严格说，我最喜欢的，也是个人觉得最容易上手的）
      </n-tab-pane>
      <n-tab-pane name="chap4" tab="“他”让你来的？">
        哦…… 原来是<router-link to="/about">他</router-link>啊，他我再熟悉他不过了，他可能只是第一次自己码完一个站点，太高兴了罢了<br>
        他让你过来，其实你也不必阅读，不必浪费这个时间，如果你还是想看，那就继续往下看吧：<br>
        （这里空空荡荡，等待着某个名为“开发者”的人来书写……）
      </n-tab-pane>
    </n-tabs>
  </div>

</template>

<style scoped>
.noDisplay {
  display: none;
}
.display {
  padding-left: 80px;
  padding-right: 80px;
  text-align: center;
}
</style>