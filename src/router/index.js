import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import SponsorView from "@/views/SponsorView.vue";
import SponsorshipView from "@/views/SponsorshipView.vue";
import MessageboardView from "@/views/MessageboardView.vue";
import ProjectView from "@/views/ProjectView.vue";
import AccountView from "@/views/AccountView.vue";
import TimelineView from "@/views/TimelineView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
        meta: {
            title: "Jerry Zhou 的个人主页",
            description: "Jerry Zhou 的个人主页，记录学习、编程项目与成长故事，欢迎探索更多关于我的内容。"
        }
    },
    {
        path: "/sponsor",
        name: "SponsorView",
        component: SponsorView,
        meta: {
            title: "赞助 | Jerry Zhou",
            description: "支持 Jerry Zhou 的创作与项目，感谢每一位愿意伸出援手的朋友。"
        }
    },
    {
        path: "/sponsorship",
        name: "SponsorshipView",
        component: SponsorshipView,
        meta: {
            title: "赞助明细 | Jerry Zhou",
            description: "查看支持 Jerry Zhou 的赞助明细和留言，见证每一次善意的陪伴。"
        }
    },
    {
        path: "/messageboard",
        name: "MessageboardView",
        component: MessageboardView,
        meta: {
            title: "留言板 | Jerry Zhou",
            description: "在留言板留下你的想法，与 Jerry Zhou 交流互动。"
        }
    },
    {
        path: "/project",
        name: "ProjectView",
        component: ProjectView,
        meta: {
            title: "项目 | Jerry Zhou",
            description: "浏览 Jerry Zhou 打造的网站与工具项目，获取灵感与实用资源。"
        }
    },
    {
        path: "/account",
        name: "AccountView",
        component: AccountView,
        meta: {
            title: "社交账号 | Jerry Zhou",
            description: "找到 Jerry Zhou 的社交账号，与他在不同平台保持联系。"
        }
    },
    {
        path: "/timeline",
        name: "TimelineView",
        component: TimelineView,
        meta: {
            title: "成长历程 | Jerry Zhou",
            description: "了解 Jerry Zhou 的时间线，记录成长与重要节点。"
        }
    },
    {
        path: "/:pathMatch(.*)",
        name: "ErrorView",
        component: ErrorView,
        meta: {
            title: "页面未找到 | Jerry Zhou",
            description: "抱歉，您访问的页面不存在。请返回主页或浏览其他内容。"
        }
    },
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

const DEFAULT_META = {
    title: "Jerry Zhou 的个人主页",
    description: "Jerry Zhou 的个人主页，记录学习、编程项目与成长故事，欢迎探索更多关于我的内容。"
};

router.afterEach((to) => {
    if (typeof window === "undefined") {
        return;
    }

    const title = to.meta?.title || DEFAULT_META.title;
    const description = to.meta?.description || DEFAULT_META.description;
    document.title = title;

    const updateTag = (selector, attribute, value) => {
        const element = document.querySelector(selector);
        if (element && value) {
            element.setAttribute(attribute, value);
        }
    };

    updateTag('meta[name="description"]', "content", description);
    updateTag('meta[property="og:title"]', "content", title);
    updateTag('meta[property="og:description"]', "content", description);
    updateTag('meta[name="twitter:title"]', "content", title);
    updateTag('meta[name="twitter:description"]', "content", description);

    const canonicalHref = `${window.location.origin}${to.fullPath}`;
    updateTag('link[rel="canonical"]', "href", canonicalHref);
    updateTag('meta[property="og:url"]', "content", canonicalHref);
});

export default router;
