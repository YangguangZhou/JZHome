<template>
  <span>
    <div class="text-4xl sm:text-5xl tracking-wider mb-3 h-14">留言板</div>
    <div class="messageboard">
      <p class="content">你可以在这里留言</p>
      <p class="content">
        你可以点击<LinkTo url="/"
          ><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo
        >返回主页。
      </p>
    </div>
    <Waline
      :serverURL="serverURL"
      :path="path"
      :dark="dark"
      :lang="lang"
      :emoji="emoji"
    />
  </span>
</template>

<script>
import LinkTo from "@/components/LinkTo.vue";

export default {
  name: "MessageboardView",
  components: { LinkTo },
};
</script>

<script setup>
import { Waline } from "@waline/client/component";
import { computed } from "vue";
import { useRoute } from "vue-router";

const serverURL = "https://waline.jerryz.com.cn";
const path = computed(() => useRoute().path);
const dark = "auto";
const lang = "zh";
const emoji = [
  "//unpkg.com/@waline/emojis@1.2.0/bmoji",
  "//unpkg.com/@waline/emojis@1.2.0/tw-emoji",
  "//unpkg.com/@waline/emojis@1.2.0/qq",
  "//unpkg.com/@waline/emojis@1.2.0/weibo",
  "//unpkg.com/@waline/emojis@1.2.0/tieba",
  "//unpkg.com/@waline/emojis@1.2.0/bilibili",
  "//unpkg.com/@waline/emojis@1.2.0/alus",
  "//unpkg.com/@waline/emojis@1.2.0/soul-emoji",
];
</script>

<style>
.content {
  @apply ind text-base sm:text-lg leading-9 mb-2;
}
</style>
