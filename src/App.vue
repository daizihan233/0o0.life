<script setup>
import Header from "./components/Header.vue";
import Aegis from 'aegis-web-sdk';

if (document.location.host === "0o0.life") {
  const aegis = new Aegis({
    id: '9GDpnILXZXGdP3z8e9', // 上报 id
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true, // spa 应用页面跳转的时候开启 pv 计算
    hostUrl: 'https://rumt-sg.com',
  });
}
</script>

<template>
  <Header />
  <router-view></router-view>
</template>
