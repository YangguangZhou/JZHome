<template>
    <div>
        <div id="waline"></div>
    </div>
</template>
  
<script>
export default {
    name: "WalineComment",
    mounted() {
        this.WalineComment();
    },
    methods: {
        WalineComment() {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
            script.async = true;
            script.onload = () => {
                this.WalineComment();
            };
            document.body.appendChild(script);
        },
        WalineComment() {
            import('/@waline/client@v2/dist/waline.mjs').then(({ init }) => {
                init({
                    el: '#waline',
                    serverURL: 'https://waline.jerryz.com.cn',
                });
            });
        },
    },
};
</script>