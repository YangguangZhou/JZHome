<template>
    <template v-if="mode=='stay'">
        <template v-if="insite(url)">
            <router-link :to="encodeURI(url)" class="cursor"><slot /></router-link>
        </template>
        <template v-else>
            <a :href="url" class="cursor" rel="noopener noreferrer"><slot /></a>
        </template>    
    </template>

    <template v-else-if="mode=='jump'">
        <a :href="url" class="cursor" target="_blank" rel="noopener noreferrer"><slot /></a>
    </template>

    <template v-else>
        <template v-if="insite(url)">
            <router-link :to="encodeURI(url)" class="cursor"><slot /></router-link>
        </template>
        <template v-else>
            <a :href="url" class="cursor" target="_blank" rel="noopener noreferrer"><slot /></a>
        </template>
    </template>
</template>

<script>
export default {
    name: "LinkTo",
    props: ["url", "mode"],
    methods: {
        insite(url) {
            return url.startsWith("/");
        },
    },
};
</script>

<style scoped>
a {
    color: rgb(0, 93, 146);

    @apply transition-opacity duration-200 opacity-70 dark:text-sky-300;
}

a:hover {
    @apply opacity-100;
}

a:active {
    @apply opacity-90;
}
</style>