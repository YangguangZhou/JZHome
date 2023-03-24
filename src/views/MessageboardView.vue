<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">留言板</div>
        <div class="messageboard">
            <p class="font-bold">你好，陌生人。</p>
            
            <p>你可以点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

    init({
      el: '#waline',
      serverURL: 'https://your-domain.vercel.app',
    });
  </script>
<script>
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "MessageboardView",
    components: { LinkTo },
};
</script>

<style>
.messageboard p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>
