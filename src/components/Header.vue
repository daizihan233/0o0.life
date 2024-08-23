<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
  <n-divider title-placement="right">
    0o0.life
  </n-divider>
</template>

<script setup>
import {h} from "vue";
import {NDivider, NIcon, NMenu} from "naive-ui";
import {RouterLink} from "vue-router";
import {HomeOutline as HomeIcon, LogOutOutline as GoIcon} from "@vicons/ionicons5";
import {DualScreenMirror24Regular as MirrorIcon} from "@vicons/fluent"

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "Home"
          }
        },
        { default: () => "回家" }
    ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "About"
          }
        },
        { default: () => "去找作者" }
    ),
    key: "go-to-about",
    icon: renderIcon(GoIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "self"
          }
        },
        {default: () => "镜子"}
    ),
    key: "go-to-mirror",
    icon: renderIcon(MirrorIcon)
  }
];
</script>