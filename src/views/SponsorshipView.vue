<template>
    <main>
        <h1 class="text-4xl sm:text-5xl tracking-wider mb-3 h-14">赞助明细</h1>
        <div class="sponsorship">
            <p class="font-bold">谢谢每一位支持过这些作品的朋友。</p>
            <p>你们的支持让这些项目能够继续维护、改进，也让我更有动力把新的想法慢慢做出来。无论金额多少，每一份心意我都认真记得。</p>
            <div class="supporters-stream" aria-label="自动滚动的赞助记录">
                <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="marquee-row">
                    <div class="marquee-track" :class="`marquee-track--${rowIndex + 1}`">
                        <div class="marquee-group">
                            <template v-for="(item, index) in row" :key="`${item.nick}-${rowIndex}-${index}`">
                                <span class="supporter-entry">
                                    <strong>{{ item.nick }}</strong>
                                    <span v-if="item.desc">{{ item.desc }}</span>
                                    <em v-if="cashDisplay">¥ {{ Number(item.money).toFixed(2) }}</em>
                                </span>
                                <span class="entry-divider" aria-hidden="true">·</span>
                            </template>
                        </div>
                        <div class="marquee-group" aria-hidden="true">
                            <template v-for="(item, index) in row" :key="`copy-${item.nick}-${rowIndex}-${index}`">
                                <span class="supporter-entry">
                                    <strong>{{ item.nick }}</strong>
                                    <span v-if="item.desc">{{ item.desc }}</span>
                                    <em v-if="cashDisplay">¥ {{ Number(item.money).toFixed(2) }}</em>
                                </span>
                                <span class="entry-divider">·</span>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sponsorship-controls">
                <button type="button" :aria-pressed="cashDisplay" @click="cashDisplay=!cashDisplay">
                    {{ cashDisplay ? "隐藏金额" : "显示金额" }}
                </button>
                <span>记录更新可能会有少许延迟。</span>
            </div>
            <p>你可以返回<LinkTo url="/"><ruby><rb>主页</rb><rt>/index</rt></ruby></LinkTo>或<LinkTo url="/sponsor"><ruby><rb>赞助页面</rb><rt>/sponsor</rt></ruby></LinkTo>。</p>
        </div>
    </main>
</template>

<script>
import config from "@/config.yml";
import LinkTo from '@/components/LinkTo.vue';

const shuffled = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
        const target = Math.floor(Math.random() * (index + 1));
        [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
};

export default {
    name: "SponsorshipView",
    components: { LinkTo },
    data() {
        return {
            cashDisplay: false,
            list: shuffled(config.sponsorship),
        }
    },
    computed: {
        rows() {
            return Array.from({ length: 4 }, (_, rowIndex) =>
                this.list.filter((_, itemIndex) => itemIndex % 4 === rowIndex)
            );
        },
    },
};
</script>

<style>
.sponsorship p {
    @apply text-base sm:text-lg leading-9 mb-2
}

.sponsorship > p::before {
    content: "\3000\3000";
}

.supporters-stream {
    @apply -mx-6 my-8 space-y-1 overflow-hidden border-y border-gray-200 py-4 dark:border-neutral-600 sm:-mx-10;
    mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
}

.marquee-row {
    @apply overflow-hidden py-2;
}

.marquee-track {
    @apply flex w-max whitespace-nowrap;
    animation: marquee-left 90s linear infinite;
    will-change: transform;
}

.marquee-track--2 {
    animation-duration: 108s;
}

.marquee-track--3 {
    animation-duration: 82s;
}

.marquee-track--4 {
    animation-duration: 98s;
}

.marquee-row:hover .marquee-track {
    animation-play-state: paused;
}

.marquee-group {
    @apply flex shrink-0 items-baseline;
}

.supporter-entry {
    @apply inline-flex items-baseline gap-3 px-4 text-base text-gray-500 dark:text-gray-300 sm:text-lg;
}

.supporter-entry strong {
    @apply font-bold tracking-wide text-gray-700 dark:text-gray-100;
}

.supporter-entry span {
    @apply text-sm text-gray-500 dark:text-gray-400 sm:text-base;
}

.supporter-entry em {
    @apply text-sm not-italic tabular-nums text-gray-400 dark:text-gray-400;
}

.entry-divider {
    @apply text-gray-300 dark:text-neutral-600;
}

@keyframes marquee-left {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

.sponsorship-controls {
    @apply mb-4 flex flex-col items-start justify-between gap-3 border-y border-gray-200 py-4 text-sm text-gray-500 dark:border-neutral-600 dark:text-gray-400 sm:flex-row sm:items-center;
}

.sponsorship-controls button {
    @apply border border-gray-300 bg-transparent px-4 py-2 text-sm tracking-wide text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500/30 dark:border-neutral-500 dark:text-gray-200 dark:hover:bg-neutral-700;
}

@media (prefers-reduced-motion: reduce) {
    .marquee-row {
        @apply overflow-x-auto;
        scrollbar-width: none;
    }

    .marquee-row::-webkit-scrollbar {
        display: none;
    }

    .marquee-track {
        animation: none;
    }

    .marquee-group[aria-hidden="true"] {
        display: none;
    }
}
</style>
