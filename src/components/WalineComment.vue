<template>
    <div></div>
</template>

<script type="module">
import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

init({
    el: '#waline',
    serverURL: 'https://waline.jerryz.com.cn',
});
export default {
    name: "WalineComment",
};
</script>