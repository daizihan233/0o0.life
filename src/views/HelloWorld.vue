<script setup>
import {NButton, NDivider, NResult, NTabPane, NTabs} from 'naive-ui'
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
    <p>停！你是怎么找到这里的？让我猜猜，你是……</p>
    <n-tabs type="segment" animated>
      <n-tab-pane name="chap1" tab="谁？">
        嗯？
      </n-tab-pane>
      <n-tab-pane name="chap2" tab="黑客？">
        <p>哦…… 那可真是个坏消息……</p>
        <p>走吧，我这个小站没啥好攻击的，也没有攻击价值。 </p>
      </n-tab-pane>
      <n-tab-pane name="chap3" tab="来学习的？">
        <p>但我觉得你需要一个更好的选择，比如直接去阅读文档</p>
        <p>我这个站是我现学现卖的，代码可能也挺乱的</p>
        <p>我主要还是学的Python，加上学业压力，见谅。</p>
        <p>另外，这个网站是使用 <a href="https://www.naiveui.com/zh-CN/dark/components/tabs">Naive UI</a>
          制作的，但本站的的开发者可能比这个 UI 还要天真……</p>
        <p>（Tips：请区分本站的作者和 UI 的作者，这个 UI 算是我见过最好的 Vue 3 的 UI
          框架了，严格说，我最喜欢的，也是个人觉得最容易上手的）</p>
      </n-tab-pane>
      <n-tab-pane name="chap4" tab="“他”让你来的？">
        <p>哦…… 原来是
          <router-link to="/about">他</router-link>
          啊，他我再熟悉他不过了，他可能只是第一次自己码完一个站点，太高兴了罢了
        </p>
        <p>我这里确实有一段他让我转达的内容，他让你过来，可能只是想向你分享一下成果，虽然更多也只是他的碎碎念罢了</p>
        <p>其实你也不必阅读，不必浪费这个时间，如果你还是想看，那就继续往下看吧：</p>
        <br/>
        <div style="text-align: left">
          <p>好…… 嗯…… 如果没问题的话那么你现在应该可以看到这句话</p>
          <p>嗯？你能看见？哦，太好了！</p>
          <p>现在，请允许我介绍一下我是谁：</p>
          <p><b>括弧</b>，一名初二学生，
            <router-link to="/about">About</router-link>
            页面中的“开发者”，<i>INFP 5w4 549 sp/sx IEI RLUAI</i>，具体的自我介绍见<a
                href="https://khbit.cn/about">此处</a></p>
          <p>哦，那么，如果愿意的话，继续听我讲吧：</p>
          <p>我常常会胡思乱想，我希望我可以知晓我为什么会这样，然后解决掉，但是现成的日记软件都不是很符合我的需求</p>
          <p>我也曾写过纸质的日记，但是全被我的父母翻了个遍，我也意识到纸张是不安全的，所以我希望创造了这么一个平台</p>
          <p>这就是我想建这个网站的原因。</p>
          <p>此外，这个页面<b>后续仍有很大可能更新、追加内容</b></p>
          <p>所以，常来看！^_^</p>
        </div>
        <n-divider></n-divider>
        <i>（这里空空荡荡，等待着某个名为“开发者”的人来继续书写……）</i>
      </n-tab-pane>
    </n-tabs>
    <Talk></Talk>
  </div>
</template>

<style scoped>
/*noinspection CssUnusedSymbol*/
.noDisplay {
  display: none;
}
</style>