<template>
    <div>
        <div id="waline"></div>
    </div>
</template>
  
<script>
export default {
    mounted() {
        this.loadWaline();
    },
    methods: {
        loadWaline() {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
            script.async = true;
            script.onload = () => {
                this.initWaline();
            };
            document.body.appendChild(script);
        },
        initWaline() {
            import('https://unpkg.com/@waline/client@v2/dist/waline.mjs').then(({ init }) => {
                init({
                    el: '#waline',
                    serverURL: 'https://waline.jerryz.com.cn',
                });
            });
        },
    },
};
</script>
  