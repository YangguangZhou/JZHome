<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">时光</div>
        <div class="timeline">
            <p class="font-bold">我的成长足迹。</p>
            <div class="border-y sm:mx-2 -mx-2 sm:px-10 mb-3 pt-7">
                <span v-for="item in list"
                    :key="item.year"
                    class="block sm:mb-14 mb-7 py-2 last:mb-7">
                    <div class="block font-bold text-8xl select-none text-stone-200 opacity-50 -rotate-90 absolute sm:-translate-x-32 -translate-x-24 translate-y-14">{{ item.year }}</div>
                    <div v-for="data in item.meta"
                        :key="data"
                        class="cursor sm:ml-8 ml-10 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors whitespace-nowrap text-ellipsis overflow-hidden text-lg leading-9 mb-2"
                        >
                        <span class="text-base hidden min-w-40 sm:inline-block">{{ data.date }}</span>
                        <span class="sm:text-base text-sm">{{ data.desc }}</span>
                    </div>
                </span>
            </div>
            <p>点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>可以回到主页。</p>
        </div>
    </span>
</template>

<script>
import config from "@/config.yml";
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "TimelineView",
    components: { LinkTo },
    data() {
        return {
            cashDisplay: false,
            list: config.timeline,
        }
    },
};
</script>

<style>
.timeline p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>