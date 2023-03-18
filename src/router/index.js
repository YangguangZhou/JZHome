import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import SponsorView from "@/views/SponsorView.vue";
import SponsorshipView from "@/views/SponsorshipView.vue";
import ProjectView from "@/views/ProjectView.vue";
import AccountView from "@/views/AccountView.vue";
import TimelineView from "@/views/TimelineView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
    { path: "/", name: "HomeView", component: HomeView },
    { path: "/sponsor", name: "SponsorView", component: SponsorView },
    { path: "/sponsorship", name: "SponsorshipView", component: SponsorshipView },
    { path: "/project", name: "ProjectView", component: ProjectView },
    { path: "/account", name: "AccountView", component: AccountView },
    { path: "/timeline", name: "TimelineView", component: TimelineView },
    { path: "/:pathMatch(.*)", name: "ErrorView", component: ErrorView },
];

const router = createRouter({
    mode: "history",
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition)
            return savedPosition;
        else
            return { left: 0, top: 0, behavior: "smooth" };
    },
});

export default router;
