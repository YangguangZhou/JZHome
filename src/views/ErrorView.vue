<template>
    <span>
        <div class="text-4xl sm:text-5xl tracking-wider mb-3 h-14">404 Not Found</div>
        <div class="error">
            <p class="font-bold">抱歉，</p>
            <p>请检查你访问的网址是否正确，</p>
            <p>或者点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<script>
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "ErrorView",
    components: { LinkTo },
};
</script>

<style>
.error p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>