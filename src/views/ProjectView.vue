<template>
    <main>
        <h1 class="text-5xl tracking-wider mb-3 h-14">项目</h1>
        <div class="project">
            <p class="font-bold">这里整理了我目前仍在维护或愿意继续介绍的作品。</p>
            <p>它们大多来自真实的使用需要。下面简要说明每个项目解决的问题、使用的平台和当前状态，方便你快速找到感兴趣的内容。</p>
            <div class="project-list border-y sm:mx-2 -mx-2 sm:px-6 my-6">
                <article v-for="item in list" :key="item.name" class="project-item py-7 px-3 sm:px-4">
                    <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                        <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">{{ item.name }}</h2>
                        <span class="project-status">{{ item.status }}</span>
                    </div>
                    <dl class="project-meta">
                        <div>
                            <dt>解决的问题</dt>
                            <dd>{{ item.problem }}</dd>
                        </div>
                        <div>
                            <dt>技术与平台</dt>
                            <dd>{{ item.tech }}</dd>
                        </div>
                    </dl>
                    <div class="project-links mt-5">
                        <LinkTo :url="item.url" :mode="item.url.startsWith('/') ? 'stay' : 'jump'">访问项目 <span aria-hidden="true">↗</span></LinkTo>
                        <LinkTo v-if="item.source" :url="item.source" mode="jump">查看源码 <span aria-hidden="true">↗</span></LinkTo>
                        <span v-else class="source-unavailable">源码暂未公开</span>
                    </div>
                </article>
            </div>
            <p>你可以点<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>回到主页。</p>
        </div>
    </main>
</template>

<script>
import config from "@/config.yml";
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "ProjectView",
    components: { LinkTo },
    data() {
        return {
            list: config.project,
        }
    },
};
</script>

<style>
.project p {
    @apply text-base sm:text-lg leading-9 mb-2
}

.project > p::before {
    content: "\3000\3000";
}

.project-list {
    @apply divide-y divide-gray-200 dark:divide-neutral-700;
}

.project-item {
    @apply transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700/40;
}

.project-status {
    @apply self-start text-sm tracking-wider text-gray-500 dark:text-gray-400;
}

.project-meta {
    @apply grid gap-4 text-sm sm:text-base;
}

.project-meta div {
    @apply grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4;
}

.project-meta dt {
    @apply font-bold text-gray-500 dark:text-gray-400;
}

.project-meta dd {
    @apply leading-7;
}

.project-links {
    @apply flex flex-wrap items-center gap-x-6 gap-y-2 text-base;
}

.source-unavailable {
    @apply text-gray-400 dark:text-gray-500;
}
</style>
