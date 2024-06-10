import { RouteRecordRaw } from "vue-router"
import { UserRoutesEnum } from "./types"
import { AppLayoutsEnum } from "@/views/layouts/types"

export const userRoutes: RouteRecordRaw[] = [
	{
		path: "/users",
		name: UserRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "user.listUser"
		},
		component: () => import("#pages/user/list/ui/UserListPage.vue")
	},
	{
		path: "/users/create",
		name: UserRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "user.createUser"
		},
		component: () => import("#pages/user/create/ui/UserCreatePage.vue")
	},
	{
		path: "/users/edit/:id",
		name: UserRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "User Edit"
		},
		component: () => import("#pages/user/edit/ui/UserEditPage.vue")
	}
]
