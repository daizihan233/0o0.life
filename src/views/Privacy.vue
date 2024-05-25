<script setup>
import Tips from "../components/Tips.vue";
import Talk from "../components/Talk.vue";
document.title = "隐私政策 - 了解你的信息会被如何处理"
</script>

<template>
  <Tips title="路牌 - 隐私政策" text="了解你的信息会被如何处理" type="success"></Tips>
  <div class="centerDiv">
    <img src="../assets/Privacy.png" alt="隐私政策概述图"/>
    <p>
      以上是本站点将会收集的个人信息，除此之外，本站还会在登陆后使用 <b>Cookie</b> 来 <b>保持</b> 登陆状态
    </p>
    <Talk></Talk>
  </div>
</template>
