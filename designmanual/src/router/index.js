import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tableofcontent",
      name: "tableofcontent",
      component: () => import("../views/TableOfContentView.vue"),
    },
    {
      path: "/introduction",
      name: "introduction",
      component: () => import("../views/IntroductionView.vue"),
    },
    {
      path: "/setup-installation",
      name: "setup-installation",
      component: () => import("../views/SetupInstallationView.vue"),
    },
    {
      path: "/setup-structure",
      name: "setup-structure",
      component: () => import("../views/SetupStructureView.vue"),
    },
    {
      path: "/setup-firebase",
      name: "setup-firebase",
      component: () => import("../views/SetupFirebaseView.vue"),
    },
    {
      path: "/setup-framework",
      name: "setup-framework",
      component: () => import("../views/SetupFrameworkView.vue"),
    },
    {
      path: "/manage-component",
      name: "manage-component",
      component: () => import("../views//ManageComponentView.vue"),
    },
    {
      path: "/manage-import",
      name: "manage-import",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/manage-styling",
      name: "manage-styling",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/manage-routing",
      name: "manage-routing",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/manage-JSON",
      name: "manage-JSON",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/manage-JSON-template",
      name: "manage-JSON-template",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/maintenance-expand",
      name: "maintenance-expand",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/troubleshooting",
      name: "troubleshooting",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
