<template>
    <main>
        <h1 class="text-5xl tracking-wider mb-3 h-14">赞助</h1>
        <div class="sponsor">
            <p class="font-bold">感谢你愿意支持这些作品。</p>
            <p>如果某个项目对你有所帮助，并且你愿意支持后续维护，可以扫描下方二维码。赞助完全自愿，不会影响任何项目的正常使用。</p>
            <figure class="payment-card">
                <div class="payment-body">
                    <div class="payment-heading">
                        <strong>扫码支持</strong>
                        <small>微信 · 支付宝 · QQ</small>
                    </div>
                    <div class="qr-frame">
                        <img src="/payment-qr.png" alt="付款二维码，扫描后打开付款页面">
                    </div>
                </div>
                <figcaption>
                    <span>请使用手机扫码，或直接<LinkTo url="https://pay.jerryz.com.cn/">打开付款页面</LinkTo>。</span>
                    <small>链接将在新窗口打开</small>
                </figcaption>
            </figure>
            <p>如果愿意，你也可以在下方留下昵称和寄语。留言会公开显示，请不要填写联系方式或其他个人信息。</p>
            <p>过往的支持记录可以在<LinkTo url="/sponsorship"><ruby><rb>赞助明细</rb><rt>/sponsorship</rt></ruby></LinkTo>中查看。再次感谢每一份支持。</p>
            <p>点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>返回主页。</p>
            <Waline :serverURL="serverURL" :path="path" :dark="dark" :lang="lang"/>
        </div>
    </main>
</template>

<script>
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "SponsorView",
    components: { LinkTo },
};
</script>

<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const serverURL = 'https://waline.jerryz.com.cn';
const path = computed(() => useRoute().path);
const dark = 'auto';
const lang = 'zh';
</script>

<style>
.sponsor p {
    @apply text-base sm:text-lg leading-9 mb-2
}

.sponsor > p::before {
    content: "\3000\3000";
}

.payment-card {
    @apply my-8 mx-auto w-full max-w-xs overflow-hidden rounded border border-gray-200 bg-white shadow-sm dark:border-neutral-600 dark:bg-neutral-700;
}

.payment-body {
    @apply block px-8 pt-7 pb-6;
}

.payment-heading {
    @apply mb-5 flex items-baseline justify-between border-b border-gray-200 pb-3 dark:border-neutral-600;
}

.payment-heading strong {
    @apply text-lg tracking-wider text-gray-700 dark:text-gray-200;
}

.payment-heading small {
    @apply text-xs tracking-wide text-gray-400 dark:text-gray-400;
}

.qr-frame {
    @apply block border border-gray-100 bg-white p-3 dark:border-neutral-600;
}

.payment-card img {
    @apply block w-full bg-white select-none;
    -webkit-user-drag: none;
}

.payment-card figcaption {
    @apply flex flex-col gap-1 border-t border-gray-100 px-6 py-4 text-center dark:border-neutral-600;
}

.payment-card figcaption span {
    @apply text-sm leading-6 text-gray-600 dark:text-gray-300;
}

.payment-card figcaption small {
    @apply text-xs tracking-wide text-gray-400 dark:text-gray-400;
}
</style>
