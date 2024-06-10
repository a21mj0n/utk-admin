import { RouteRecordRaw } from "vue-router"
import { CenterRoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const centerRoutes: RouteRecordRaw[] = [
	{
		path: "/centers",
		name: CenterRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/center/list/ui/CenterListPage.vue")
	},
	{
		path: "/centers/create",
		name: CenterRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/center/create/ui/CenterCreatePage.vue")
	},
	{
		path: "/centers/edit/:id",
		name: CenterRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/center/edit/ui/CenterEditPage.vue")
	}
]
