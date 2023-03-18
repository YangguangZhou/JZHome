<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">赞助</div>
        <div class="sponsor">
            <p class="font-bold">谢谢你，陌生人。</p>
            <!--p class="qrcode"><img src="/qrcode.png"/></p-->
            <p class="qrcode"> <iframe src="https://pay.jerryz.com.cn" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="654" width="100%"></iframe></p>
            <p>注：建议在支付备注栏填写你的昵称和寄语。</p>
            <p>十分感谢为我提供了赞助的伙伴们！你可以<LinkTo url="/sponsorship"><ruby><rb>点击这里</rb><rt>/sponsorship</rt></ruby></LinkTo>查看明细。</p>
            <p>你可以点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<script>
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "SponsorView",
    components: { LinkTo },
};
</script>

<style>
.sponsor p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}

.qrcode img {
    @apply w-full sm:w-64 bg-white border border-gray-200 dark:border-gray-700 rounded mr-0 sm:mr-8 mb-5 sm:mb-0 inline-block no-drag select-none;
}
</style>
