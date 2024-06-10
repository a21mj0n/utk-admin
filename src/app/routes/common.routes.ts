import type { RouteRecordRaw } from "vue-router"
import { AppLayoutsEnum } from "@/views/layouts/types"
import { CommonRoutesEnum } from "./types"

export const commonRoutes: RouteRecordRaw[] = [
	{
		path: "/",
		name: CommonRoutesEnum.home,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "Home Page"
		},
		component: () => import("#pages/home/HomePage.vue")
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		meta: {
			layout: AppLayoutsEnum.auth
		},
		component: () => import("#pages/common/404Page.vue")
	}
	// {
	// 	path: "/forbidden",
	// 	name: "forbidden",
	// 	meta: {
	// 		layout: "MainLayout"
	// 	},
	// 	component: () => import("@/views/pages/common/Error403Page.vue")
	// },
]
