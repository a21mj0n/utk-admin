import { RouteRecordRaw } from "vue-router"
import { ClientRoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const clientRoutes: RouteRecordRaw[] = [
	{
		path: "/clients",
		name: ClientRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "client.list"
		},
		component: () => import("#pages/client/list/ui/ClientListPage.vue")
	},
	{
		path: "/clients/create",
		name: ClientRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/client/create/ui/ClientCreatePage.vue")
	},
	{
		path: "/clients/edit/:id",
		name: ClientRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/client/edit/ui/ClientEditPage.vue")
	}
]
