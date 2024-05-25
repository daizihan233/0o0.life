<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
  <n-divider title-placement="right">
    0o0.life
  </n-divider>
</template>

<script setup>
import { h } from "vue";
import { NIcon, NMenu, NDivider } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  HomeOutline as HomeIcon,
  LogOutOutline as GoIcon,
  ApertureOutline as IdeaIcon,
  FingerPrintOutline as PrivacyIcon
} from "@vicons/ionicons5";

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
            name: "Idea"
          }
        },
        { default: () => "找找灵感" }
    ),
    key: "go-to-idea",
    icon: renderIcon(IdeaIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "Privacy"
          }
        },
        { default: () => "隐私政策" }
    ),
    key: "go-to-privacy",
    icon: renderIcon(PrivacyIcon)
  }
];
</script>