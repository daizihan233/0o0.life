<script setup>
import Header from "./components/Header.vue";
import Aegis from 'aegis-web-sdk';
import {darkTheme, NDialogProvider, NMessageProvider, useOsTheme} from "naive-ui";
import {computed} from "vue";

const osThemeRef = useOsTheme();
let theme = computed(() => osThemeRef.value === "dark" ? darkTheme : null);
if (document.location.host === "0o0.life") {
  // noinspection JSUnusedLocalSymbols
  const aegis = new Aegis({  // 腾讯云前端性能监控
    id: '6o2kdcldP8gvyxX5Lw', // 上报 id
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true, // spa 应用页面跳转的时候开启 pv 计算
    hostUrl: 'https://rumt-sg.com',
  });
}
</script>

<template>
  <n-config-provider :theme="theme" date-locale="dateZhCN" locale="zhCN">
    <n-message-provider>
      <n-dialog-provider>
        <Header/>
        <router-view></router-view>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
