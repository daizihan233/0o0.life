<script setup>
import { NResult, NButton, NDivider, NTabs, NTabPane } from 'naive-ui'
import {ref} from "vue";
import Talk from "../components/Talk.vue";
import Tips from "../components/Tips.vue";
document.title = "彩蛋 - 这哪里都不是，你只是来到了一个错误的时空"
let t = ref("403 禁止访问");
let d = ref("总有些门是对你关闭的");
let c = ref("noDisplay")

function relax() {
  t.value = "403 允许访问"
  d.value = "总有些门是对你开着的"
  c.value = "center"
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
    <n-divider></n-divider>
    <Tips title="路牌 - 彩蛋" text="这里是开发者埋下的一个小彩蛋…… 嘘！不要告诉别人！" type="success"></Tips>
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
        <div style="text-align: left">
          好…… 嗯…… 如果没问题的话那么你现在应该可以看到这句话<br>
          嗯？你能看见？哦，太好了！<br>
          现在，请允许我介绍一下我是谁：<br>
          <b>括弧</b>，一名初一学生，<router-link to="/about">About</router-link>页面中的“开发者”，<i>INFP 5w4 549 sp/sx IEI RLUAI</i>，具体的自我介绍见<a href="https://khbit.cn/about">此处</a><br>
          哦，那么，如果愿意的话，继续听我讲吧：<br>
          讲讲这个站我希望把他设计成什么样：<br>
          我是一个比较健忘的人，生活上的事很少会去记得；<br>
          有的时候有一些非常抽象但有趣的想法，但过段时间就会忘记；<br>
          我呢，也希望记录下每天的心情变化，我也想知道我最近到底过的怎么样。<br>
          按照一般操作，1、2需要记录在备忘录，而每天加一篇备忘录不仅查找麻烦还乱<br>
          1、3也可以使用日记软件完成，但一般日记软件无法分门别类地记录，通常需要手动排版<br>
          此外，对于 1 有时我还想把这个想法公布出来大家一起讨论，此时就比较麻烦了<br>
          对于 3，在使用日记软件时可能得花一部分时间描述今天自己的大致情绪，这很麻烦<br>
          所以我希望把他们整合在一块，<b>做一个 All in One 的 Web 程序，减少“切换”所带来的麻烦</b><br>
          并且可以<b>通过拖动滑块</b>，从<b>多个维度</b>来描述自己的情绪，而不是通过人类的自然语言中抽象的形容词<br>
          并且，想法会<b>匿名地</b>显示在网页中，不至于因为问题太尬或者过于抽象想半天最终放弃<br>
          同样的，得益于 Gitalk 与 Github 强大的 Issue，可以快速记录、整理参考资料以便查阅<br>
          这就是我想建这个网站的原因。<br>
          此外，这个页面<b>后续仍有很大可能更新、追加内容</b><br>
          所以，常来看！^_^
        </div>
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
</style>