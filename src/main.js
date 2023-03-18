import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import cur from "./assets/js/cursor";

import "./assets/css/tailwind.css";
import "./assets/css/cursor.styl";
import "./assets/css/style.styl";

let app = createApp(App);
app.use(router);

app.mount("#app");

setTimeout(() => {
    cur.refresh();
}, 300);
