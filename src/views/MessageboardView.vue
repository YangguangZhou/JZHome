<template>
  <span>
    <div class="text-4xl sm:text-5xl tracking-wider mb-3 h-14">留言板</div>
    <div class="messageboard">
      <p class="content font-bold">欢迎留下你的想法。</p>
      <p class="content">如果你用过某个项目，有建议、遇到的问题，或者只是想聊聊文章中的某个话题，都可以写在这里。我会在有空时阅读并回复。</p>
      <p class="content">留言内容会公开显示。为了保护隐私，请不要留下手机号、私人账号或其他敏感信息。</p>
      <p class="content">
        点击<LinkTo url="/"
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
  @apply text-base sm:text-lg leading-9 mb-2;
}

.content::before {
  content: "\3000\3000";
}
</style>
