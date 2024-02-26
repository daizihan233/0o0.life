<script setup>
import { NResult, NButton, NDivider, NTabs, NTabPane } from 'naive-ui'
import {ref} from "vue";
import Talk from "../components/Talk.vue";
document.title = "这哪里都不是，你只是来到了一个错误的时空 - 彩蛋"
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
        我这里确实有一段他让我转达的内容，他让你过来，可能只是想向你分享一下成果，虽然更多也只是他的碎碎念罢了<br>
        其实你也不必阅读，不必浪费这个时间，如果你还是想看，那就继续往下看吧：<br>
        <br>
        你可能已经在<router-link to="/about">这里</router-link>看过关于我的自我介绍和我搭建本站的目的了<br>
        这里的话，我想写一些开发时的小插曲，不过到目前位置还没有啦…… 实在抱歉……<br>
        但以后我保证会有的！<del>（似乎好像没有会更好）</del><br>
        所以，常来看，好吗？<br>
        这里的内容随时可能更新，没准下次会有不一样的惊喜呢……？<br>
        <n-divider></n-divider>
        <i>（这里空空荡荡，等待着某个名为“开发者”的人来继续书写……）</i>
      </n-tab-pane>
    </n-tabs>
    <Talk></Talk>
  </div>
</template>

<style scoped>
.noDisplay {
  display: none;
}
.display {
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
}
</style>