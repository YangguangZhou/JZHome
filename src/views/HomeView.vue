<template>
    <main class="home-view">
        <h1 class="text-4xl sm:text-5xl tracking-wider mb-5 sm:h-14">欢迎</h1>
        <section class="home">
            <p class="font-bold">你好，这里是 <ruby><rb>Jerry Zhou</rb><rt>Used Since 2020</rt></ruby> 的个人主页。</p>
            <p>我会在这里整理做过的项目、写下的文章，以及一些仍在尝试的想法。它不记录现实生活的履历，更像是一份持续更新的网络档案。</p>
            <p>很多作品都从一个很小的问题开始：有没有更方便的做法，能不能少一点重复，或者怎样让一次学习更有效。它们后来在反复使用和修改中慢慢有了现在的样子。你可以从<LinkTo url="/project"><ruby><rb>项目</rb><rt>/project</rt></ruby></LinkTo>页开始了解。</p>
            <p>在<LinkTo url="https://blog.jerryz.com.cn/"><ruby><rb>博客</rb><rt>/blog</rt></ruby></LinkTo>里，我会记录技术实践，也会写一些日常观察。文章不一定提供标准答案，但我希望它们至少把问题讲清楚，也保留当时真实的思考。</p>
            <p>如果你用过这些作品，欢迎到<LinkTo url="/messageboard"><ruby><rb>留言板</rb><rt>/messageboard</rt></ruby></LinkTo>分享建议；如果它们确实帮到了你，也可以选择<LinkTo url="/sponsor"><ruby><rb>支持后续维护</rb><rt>/sponsor</rt></ruby></LinkTo>。</p>
            <picture class="identity-card">
                <source media="(prefers-color-scheme: dark)" srcset="https://card.jerryz.com.cn/dark_transparent">
                <img src="https://card.jerryz.com.cn/" alt="Jerry Zhou 的网络身份卡片">
            </picture>
        </section>
    </main>
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
    @apply text-base sm:text-lg leading-9 mb-2
}

.home p::before {
    content: "\3000\3000";
}

.identity-card {
    @apply mt-7 block w-full;
}

.identity-card img {
    @apply block h-auto w-full select-none;
    -webkit-user-drag: none;
}
</style>
