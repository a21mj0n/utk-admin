import { RouteRecordRaw } from "vue-router"
import { RoleRoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const roleRoutes: RouteRecordRaw[] = [
	{
		path: "/roles",
		name: RoleRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "role.roles"
		},
		component: () => import("#pages/role/list/ui/RoleListPage.vue")
	},
	{
		path: "/roles/create",
		name: RoleRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/role/create/ui/RoleCreatePage.vue")
	},
	{
		path: "/roles/edit/:id",
		name: RoleRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/role/edit/ui/RoleEditPage.vue")
	}
]
