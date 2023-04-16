<template>
    <span>
        <div class="text-4xl sm:text-5xl tracking-wider mb-3 h-14">留言板</div>
        <div class="messageboard">
            <p>你可以在这里留言</p>
            <Waline :serverURL="serverURL" :path="path" :dark="dark"/>
            <p>你可以点击<LinkTo url="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<script>
import LinkTo from '@/components/LinkTo.vue';

export default {
    name: "MessageboardView",
    components: { LinkTo },
};
</script>

<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const serverURL = 'https://waline.vercel.app';
const path = computed(() => useRoute().path);
const dark = true;
</script>

<style>
.messageboard p {
    @apply ind text-base sm:text-lg leading-9 mb-2
}
</style>