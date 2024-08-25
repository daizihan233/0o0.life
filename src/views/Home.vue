<script setup>
import Tips from "../components/Tips.vue";
import {ref} from 'vue'
import {
  NButton,
  NDatePicker,
  NDivider,
  NDynamicTags,
  NForm,
  NFormItem,
  NInput,
  NSlider,
  NSwitch,
  NTransfer,
  useDialog,
  useMessage
} from 'naive-ui';

document.title = "主页 - 你温暖而熟悉的家，最可信的地方"
const dialog = useDialog()
const message = useMessage()
const formRef = ref(null);
const cerr = [
  // 10 种认知扭曲（翻译有改动）
  "非黑即白", "过度推广", "选择性提取", "优势打折", "任意揣测", "扩大/缩小化", "情绪化推论", "义务性陈述", "乱贴标签", "灾难化",
  // 23 种常见自我攻击信念
  "行为完美主义", "认知完美主义", "成就上瘾", "赞赏上瘾", "被爱上瘾", "害怕被拒绝", "讨好他人", "害怕争斗", "罪责归己", "罪责归他",
  "理所应当", "我对你错", "失去希望", "觉得自己毫无价值或低人一等", "情感完美主义", "害怕愤怒", "情感恐惧", "认知自恋", "林火谬误",
  "聚光灯谬误", "魔法思维", "无法容忍沮丧", "超人思维"
].map(
    (v) => ({
      label: v,
      value: v
    })
)


let hasFun = ref(false), hasBad = ref(false), evaluate = ref("真棒的一天！")
// noinspection JSUnusedGlobalSymbols
let rules = {
  datetimeValue: {
    type: "number",
    required: true,
    message: '时光机需要燃料——日期，快给它加满！',
    trigger: ['blur', 'change']
  },
  emotionalTags: {
    type: "array",
    required: true,
    message: '心情标签是心灵的彩虹，添加一个点亮今天吧！',
    trigger: ['blur', 'change']
  },
  todayFunStories: {
    required: hasFun.value,
    message: '有什么趣事？分享出来，让世界多一份笑声！',
    trigger: ['blur', 'input']
  },
  todayBadStories: {
    required: hasBad.value,
    message: '坏心情？说出来，让它们随风而去！',
    trigger: ['blur', 'input']
  },
  transpositionalConsideration: {
    required: hasBad.value,
    message: '换个角度看世界，或许会有意想不到的风景哦！',
    trigger: ['blur', 'input']
  },
  todayRate: {
    validator(rule, value) {
      return 0 <= value <= 100;
    },
    required: true,
    message: '给自己的一天打个分，记录下此刻的心情吧！',
    trigger: ['blur', 'change']
  },
  cognitiveErrors: {
    type: "array",
    required: hasBad.value,
    message: '认知迷雾？用智慧的明灯照亮前方！',
    trigger: ['blur', 'change']
  },
  praisingOneself: {
    required: true,
    message: '每天都要夸夸自己，毕竟你是这个世界的独一无二！',
    trigger: ['blur', 'input']
  },
  wantToKnow: {
    required: false,
    message: '好奇心是知识的种子，有什么想知道的吗？',
    trigger: ['blur', 'input']
  }
}



function updateEvaluate() {
  if (hasFun.value && !hasBad.value) {  // 全是趣事
    evaluate.value = "真棒的一天！"
  } else if (hasFun.value && hasBad.value) {  // 有好有坏
    evaluate.value = "生活就像过山车，有高有低，继续前行！"
  } else if (!hasFun.value && hasBad.value) {  // 全是坏事
    evaluate.value = "这听起来真是糟糕呢……"
  } else {  // 无事发生
    evaluate.value = "今天是个平静的一天，给自己一个放松的时刻！"
  }
  // 刷新 rules
  rules.todayFunStories.required = hasFun.value
  rules.todayBadStories.required = hasBad.value
  rules.transpositionalConsideration.required = hasBad.value
  rules.cognitiveErrors.required = hasBad.value
}

let model = ref({
  datetimeValue: null,
  emotionalTags: [],
  todayFunStories: null,
  todayBadStories: null,
  transpositionalConsideration: null,
  todayRate: 50,
  cognitiveErrors: null,
  praisingOneself: null,
  wantToKnow: null
})

async function commit(e) {
  e.preventDefault();
  console.log(model.value)
  let isValid = false;
  // noinspection JSUnresolvedReference
  await formRef.value?.validate((errors) => {
    if (!errors) {
      isValid = true;
    } else {
      console.log(errors);
      message.error("表单验证遇到了一些小插曲，请检查并修正所有标记的错误，让我们继续前行吧！");
    }
  });

  if (!isValid) {
    return; // 结束 commit 函数
  }
  // TODO: 提交信息至后端
  if (hasFun.value && !hasBad.value) {  // 全是趣事
    dialog.success({
      title: "成功",
      content: "今天真是个美好的一天！",
      positiveText: "太棒了！",
      onPositiveClick: () => {
        message.success("继续保持这种好心情！");
      }
    });
  } else if (hasFun.value && hasBad.value) {  // 有好有坏
    dialog.success({
      title: "成功",
      content: "今天有点糟糕呢……",
      positiveText: "加油！",
      onPositiveClick: () => {
        message.success("明天会更好！");
      }
    });
  } else if (!hasFun.value && hasBad.value) {  // 全是坏事
    dialog.success({
      title: "成功",
      content: "今天有点起伏，但你依然坚持了下来！",
      positiveText: "继续努力！",
      onPositiveClick: () => {
        message.success("每一天都是新的挑战！");
      }
    });
  } else {  // 无事发生
    dialog.success({
      title: "成功",
      content: "今天是个平静的一天，享受这份宁静吧！",
      positiveText: "放松一下！",
      onPositiveClick: () => {
        message.success("有时候平淡也是一种幸福！");
      }
    });
  }
}
</script>

<template>
  <Tips title="路牌 - 主页" text="一天结束了吗？来这里，好好休息一下。" type="success"></Tips>
  <div class="centerDiv">
    <n-form
        ref="formRef"
        :model="model"
        :rules="rules"
        label-placement="top"
        label-width="auto"
        require-mark-placement="right-hanging"
        size="medium"
    >
      <n-form-item label="今天几号？" path="datetimeValue">
        <n-date-picker v-model:value="model.datetimeValue" type="date"/>
      </n-form-item>
      <n-form-item label="给情绪贴个标签吧！" path="emotionalTags">
        <n-dynamic-tags v-model:value="model.emotionalTags"/>
      </n-form-item>
      <n-form-item label="今天过得怎么样？有什么想记录的趣事吗？" path="todayFunStories">
        <n-flex style="width: 100%" vertical>
          <n-switch v-model:value="hasFun" style="padding-bottom: 8px" @change="updateEvaluate">
            <template #checked>
              有哦！
            </template>
            <template #unchecked>
              没有……
            </template>
          </n-switch>
          <n-input
              v-model:value="model.todayFunStories"
              :autosize="{
              minRows: 3
            }"
              :disabled="!hasFun"
              placeholder="Textarea"
              type="textarea"
          />
        </n-flex>
      </n-form-item>
      <n-form-item label="那有想吐槽的事吗？" path="todayBadStories">
        <n-flex style="width: 100%" vertical>
          <n-switch v-model:value="hasBad" style="padding-bottom: 8px" @change="updateEvaluate">
            <template #checked>
              有啊……
            </template>
            <template #unchecked>
              没哦~
            </template>
          </n-switch>
          <n-input
              v-model:value="model.todayBadStories"
              :autosize="{
              minRows: 3
            }"
              :disabled="!hasBad"
              placeholder="Textarea"
              type="textarea"
          />
        </n-flex>
      </n-form-item>
      <n-form-item label="总的来说今天怎么样呢？打个分吧！" path="todayRate">
        <n-slider v-model:value="model.todayRate" :step="1"/>
      </n-form-item>
      <Tips :text="evaluate" title="🤔今天可真是……" type="info"></Tips>
      <n-form-item label="为你的消极想法找一种不同的角度吧" path="transpositionalConsideration">
        <n-input
            v-model:value="model.transpositionalConsideration"
            :autosize="{
            minRows: 3
          }"
            :disabled="!hasBad"
            placeholder="Textarea"
            type="textarea"
        />
      </n-form-item>
      <n-form-item label="我的认知可能是……" path="cognitiveErrors">
        <n-transfer v-model:value="model.cognitiveErrors" :disabled="!hasBad" :options="cerr"/>
      </n-form-item>
      <NDivider/>
      <n-form-item label="又过了一天，不论如何，夸夸自己吧~" path="praisingOneself">
        <n-input
            v-model:value="model.praisingOneself"
            :autosize="{
              minRows: 3
            }"
            placeholder="Textarea"
            type="textarea"
        />
      </n-form-item>
      <n-form-item label="有什么想知道的吗？或者感悟？" path="wantToKnow">
        <n-input
            v-model:value="model.wantToKnow"
            :autosize="{
              minRows: 3
            }"
            placeholder="Textarea"
            type="textarea"
        />
      </n-form-item>
      <NDivider/>
      <div style="display: flex; justify-content: flex-end">
        <n-button round type="primary" @click="commit">
          提交
        </n-button>
      </div>
    </n-form>
  </div>
</template>
