<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">赞助者</div>
        <div class="sponsorship">
            <p class="font-bold">谢谢你，</p>
            <p>你的每一分善意都将被他记在心中。</p>
            <div class="border-y sm:mx-2 -mx-2 sm:px-10 mb-3 select-none">
                <div v-for="item in list"
                    :key="item"
                    class="cursor text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors">
                    <a href='javascript:void(0)'
                        class="inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1">
                        {{ item.nick }}
                        <transition name="sponsor">
                            <span v-if="cashDisplay" style="display: inline-block">
                                （{{ item.money }}元）
                            </span>
                        </transition>
                    </a>
                    <span class="sm:text-base text-sm sm:ml-0 ml-5">{{ item.desc }}</span>
                </div>
            </div>
            <p>注：手动更新，排名不分先后。</p>
            <p>你可以点击<a href='javascript:void(0)' class="cursor" @click="cashDisplay=!cashDisplay"><ruby><rb>这里</rb><rt>{{ cashDisplay ? "ON" : "OFF" }}</rt></ruby></a>切换赞助金额显示，或者点击回到<LinkTo url="/"><ruby><rb>主页</rb><rt>/index</rt></ruby></LinkTo>或<LinkTo url="/sponsor"><ruby><rb>赞助</rb><rt>/sponsor</rt></ruby></LinkTo>页面。</p>
        </div>
    </span>
</template>

<script>
import config from "@/config.yml";
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "SponsorshipView",
    components: { LinkTo },
    data() {
        return {
            cashDisplay: false,
            list: config.sponsorship.reverse(),
        }
    },
};
</script>

<style>
.sponsorship p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>