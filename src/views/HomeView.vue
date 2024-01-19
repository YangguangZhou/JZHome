<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">欢迎！</div>
        <div class="home">
            <p class="font-bold">我是 Jerry Zhou，</p>
            <p>自2020年起，<ruby><rb>"Jerry Zhou"</rb><rt>Used Since 2020</rt></ruby>便是我在网络世界的身份标识。想了解更多关于我？请点击<LinkTo url="https://blog.jerryz.com.cn/article/about/"><ruby><rb>这里</rb><rt>/about</rt></ruby></LinkTo>。</p>
            <p>我现在是一名高一学生，就读于<LinkTo url="https://ynsdfz.net/"><ruby><rb>云南师大附中</rb><rt>YNSDFZ</rt></ruby></LinkTo>努力学习。除此之外，我还是一名<ruby><rb>信息学竞赛选手</rb><rt>OIer</rt></ruby>，同时对生物学抱有浓厚的兴趣。欢迎访问<LinkTo url="/account"><ruby><rb>我的社交账号</rb><rt>/account</rt></ruby></LinkTo>，与我交流互动。</p>
            <p>我经常在<LinkTo url="https://blog.jerryz.com.cn/"><ruby><rb>博客</rb><rt>/blog</rt></ruby></LinkTo>分享我感兴趣的话题。同时，我也乐于开发<LinkTo url="https://tools.jerryz.com.cn/"><ruby><rb>网站和各种有趣的项目</rb><rt>Tools & Projects</rt></ruby></LinkTo>，这些都可以在我的<LinkTo url="https://github.com/YangguangZhou"><ruby><rb>GitHub</rb><rt>YangguangZhou</rt></ruby></LinkTo>上找到。每一行代码都记录着我成长的足迹，欢迎探索我的<LinkTo url="/timeline"><ruby><rb>成长历程</rb><rt>/timeline</rt></ruby></LinkTo>。</p>
            <p>维护网站需要花费不少心血和资源，如果你喜欢我的作品，不妨考虑<LinkTo url="/sponsor"><ruby><rb>支持</rb><rt>/sponsor</rt></ruby></LinkTo>我。有什么想对我说的？请在<LinkTo url="/messageboard"><ruby><rb>留言板</rb><rt>/messageboard</rt></ruby></LinkTo>分享你的想法。</p>
            <img src="https://card.jerryz.com.cn/white">
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
