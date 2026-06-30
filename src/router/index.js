import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import SponsorView from "@/views/SponsorView.vue";
import SponsorshipView from "@/views/SponsorshipView.vue";
import MessageboardView from "@/views/MessageboardView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
        meta: {
            title: "Jerry Zhou｜独立项目与技术文章",
            description: "Jerry Zhou 的个人主页，整理独立开发项目、开源工具与技术文章，收录 Poems、Caffeine Tracker 等作品。",
            robots: "index, follow, max-image-preview:large"
        }
    },
    {
        path: "/sponsor",
        name: "SponsorView",
        component: SponsorView,
        meta: {
            title: "赞助 | Jerry Zhou",
            description: "支持独立项目的后续维护与更新。",
            robots: "index, follow, max-image-preview:large"
        }
    },
    {
        path: "/sponsorship",
        name: "SponsorshipView",
        component: SponsorshipView,
        meta: {
            title: "赞助明细 | Jerry Zhou",
            description: "查看独立项目收到的支持记录。",
            robots: "index, follow, max-image-preview:large"
        }
    },
    {
        path: "/messageboard",
        name: "MessageboardView",
        component: MessageboardView,
        meta: {
            title: "留言板 | Jerry Zhou",
            description: "留下项目建议、使用反馈或关于文章的想法。",
            robots: "index, follow, max-image-preview:large"
        }
    },
    {
        path: "/project",
        name: "ProjectView",
        component: ProjectView,
        meta: {
            title: "项目 | Jerry Zhou",
            description: "浏览 Poems、Caffeine Tracker、TOEFL Speaking Mock System 等独立开发项目与开源工具。",
            robots: "index, follow, max-image-preview:large"
        }
    },
    {
        path: "/:pathMatch(.*)",
        name: "ErrorView",
        component: ErrorView,
        meta: {
            title: "页面未找到 | Jerry Zhou",
            description: "抱歉，您访问的页面不存在。请返回主页或浏览其他内容。",
            robots: "noindex, follow"
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
    title: "Jerry Zhou｜独立项目与技术文章",
    description: "Jerry Zhou 的个人主页，整理独立开发项目、开源工具与技术文章。",
    robots: "index, follow, max-image-preview:large"
};

router.afterEach((to) => {
    if (typeof window === "undefined") {
        return;
    }

    const title = to.meta?.title || DEFAULT_META.title;
    const description = to.meta?.description || DEFAULT_META.description;
    const robots = to.meta?.robots || DEFAULT_META.robots;
    document.title = title;

    const updateTag = (selector, attribute, value) => {
        const element = document.querySelector(selector);
        if (element && value) {
            element.setAttribute(attribute, value);
        }
    };

    updateTag('meta[name="description"]', "content", description);
    updateTag('meta[name="robots"]', "content", robots);
    updateTag('meta[name="googlebot"]', "content", robots);
    updateTag('meta[property="og:title"]', "content", title);
    updateTag('meta[property="og:description"]', "content", description);
    updateTag('meta[name="twitter:title"]', "content", title);
    updateTag('meta[name="twitter:description"]', "content", description);

    const canonicalHref = `${window.location.origin}${to.fullPath}`;
    updateTag('link[rel="canonical"]', "href", canonicalHref);
    updateTag('meta[property="og:url"]', "content", canonicalHref);
});

export default router;
