<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">你好。</div>
        <div class="home">
            <p class="font-bold">我叫 Jerry Zhou，</p>
            <p><ruby><rb>“Jerry Zhou”</rb><rt>Used Since 2020</rt></ruby> 是我广泛使用的网名，你可以在<LinkTo url="https://blog.jerryz.com.cn/article/about/"><ruby><rb>这里</rb><rt>/about</rt></ruby></LinkTo>了解到我的一些信息。</p>
            <p>我现在是一名初三学生，就读于<LinkTo url="http://www.yuss.cn/"><ruby><rb>云大附中</rb><rt>YUSS</rt></ruby></LinkTo>。同时我也是一名<ruby><rb>信竞选手</rb><rt>OIer</rt></ruby>，在学习信息学竞赛。我的所有账号都在<LinkTo url="/account" class=""><ruby><rb>这里</rb><rt>/account</rt></ruby></LinkTo>，欢迎你来这些地方找我。</p>
            <p>我会在<LinkTo url="https://blog.jerryz.com.cn/" mode="stay"><ruby><rb>博客</rb><rt>/blog</rt></ruby></LinkTo>上记录我感兴趣的内容。有时，我会开发一些好玩的<LinkTo url="/project"><ruby><rb>项目</rb><rt>/project</rt></ruby></LinkTo>，它们会在我的<LinkTo url="https://github.com/YangguangZhou"><ruby><rb>GitHub</rb><rt>YangguangZhou</rt></ruby></LinkTo>上。一行行的代码，见证了我的<LinkTo url="/timeline"><ruby><rb>成长</rb><rt>/timeline</rt></ruby></LinkTo>。</p>
            <p>网站的维护需要一定的成本，希望你可以<LinkTo url="/sponsor"><ruby><rb>支持</rb><rt>/sponsor</rt></ruby></LinkTo>我的开发。</p>
            <img src="https://card.jerryz.com.cn/">
        </div>
    </span>
</template>

<script>
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "HomeView",
    components: { LinkTo },
};
</script>

<style>
.home p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>
