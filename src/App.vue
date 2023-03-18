<template>
    <div class="view relative contents text-gray-600 dark:text-gray-300">
        <router-view v-slot="{ Component }" class="block absolute left-1/8 w-3/4 py-12 sm:left-1/4 sm:w-1/2 sm:py-40">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import cur from "./assets/js/cursor";

export default {
    name: "App",
    watch: {
        $route: {
            handler() {
                setTimeout(() => {
                    cur.refresh();
                }, 300);
            },
            immediate: true,
        },
    }
};
</script>

<style>
html {
    overflow-y: scroll !important
}

html, body {
    background-image: radial-gradient(circle at 28% 29%, #ededed06 0%, #ededed06 50%, #88888806 50%, #88888806 100%), radial-gradient(circle at 8% 78%, #9c9c9c06 0%, #9c9c9c06 50%, #25252506 50%, #25252506 100%), linear-gradient(90deg, #fff, #fff);
    scrollbar-width: none;
    -ms-overflow-style: none;

    @apply overflow-x-hidden bg-no-repeat bg-fixed outline-none dark:bg-none dark:bg-neutral-800;
}

*::-webkit-scrollbar {
    @apply hidden;
}

#app {
    font-family: "EB Garamond",  "Noto Serif SC" , "simsun", songti sc, microsoft yahei, serif;
}
</style>
