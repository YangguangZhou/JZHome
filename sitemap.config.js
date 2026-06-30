module.exports = {
    origin: "https://jerryz.com.cn",
    pages: [
        {
            path: "/",
            sources: ["public/index.html", "src/views/HomeView.vue"],
        },
        {
            path: "/project",
            sources: ["src/views/ProjectView.vue", "src/config.yml"],
        },
        {
            path: "/sponsor",
            sources: ["src/views/SponsorView.vue", "public/payment-qr.png"],
        },
        {
            path: "/sponsorship",
            sources: ["src/views/SponsorshipView.vue", "src/config.yml"],
        },
        {
            path: "/messageboard",
            sources: ["src/views/MessageboardView.vue"],
        },
        {
            path: "/game",
            sources: ["public/game/index.html"],
        },
    ],
};
