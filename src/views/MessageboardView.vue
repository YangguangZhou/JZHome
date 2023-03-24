
import WalineComment from '@/components/WalineComment.vue';

<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">留言板</div>
        <div class="messageboard">
            <p class="font-bold">你好，陌生人。</p>
            <loadWaline></loadWaline>
            <p>你可以点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<script>
import LinkTo from '@/components/LinkTo.vue';
import loadWaline from '@/components/WalineComment.vue';
// import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

// init({
//     el: '#waline',
//     serverURL: 'https://waline.jerryz.com.cn',
// });
export default {
    name: "MessageboardView",
    components: { LinkTo, loadWaline },
};
</script>

<style>
.messageboard p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>
