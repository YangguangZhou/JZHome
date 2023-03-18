<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">账号</div>
        <div class="account">
            <p class="font-bold">欢迎你来找我。</p>
            <div class="border-y sm:mx-2 -mx-2 sm:px-10 mb-3">
                <div v-for="item in list"
                    :key="item"
                    class="text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors">
                    <span class="inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1">{{ item.name }}</span>
                    <span class="sm:text-base text-sm sm:ml-0 ml-5">{{ item.id }}</span>
                </div>
            </div>
            <p>对了，你可以点<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>回到主页。</p>
        </div>
    </span>
</template>

<script>
import config from "@/config.yml";
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "AccountView",
    components: { LinkTo },
    data() {
        return {
            cashDisplay: false,
            list: config.account,
        }
    },
};
</script>

<style>
.account p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>
