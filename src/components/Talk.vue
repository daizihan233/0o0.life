<script setup>
import { NDivider } from 'naive-ui'
</script>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
export default {
  data() {
    return {
      gitalk: new Gitalk({
        clientID: '3f320dca09f2cdce7087',  // 不要吐槽为什么我直接把密钥放在这，因为懒
        clientSecret: '07a50118b62b4cdb3312063d6fbf8ad51e95c149',
        repo: '0o0.life',
        owner: 'daizihan233',
        admin: ['daizihan233'],
        id: location.pathname,      // Ensure uniqueness and len
        language: 'zh-CN', // 语言
        distractionFreeMode: false,  // Facebook-like distraction
        createIssueManually: true
      })
    }
  },
  mounted() {
    this.gitalk.render("gitalk-container")
  }
}
</script>
<template>
  <n-divider></n-divider>
  <div id="gitalk-container"></div>
</template>

<style scoped>

</style>