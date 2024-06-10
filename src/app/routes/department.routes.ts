import { RouteRecordRaw } from "vue-router"
import { DepartmentRoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const departmentRoutes: RouteRecordRaw[] = [
	{
		path: "/departments",
		name: DepartmentRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "department.list"
		},
		component: () => import("#pages/department/list/ui/DepartmentListPage.vue")
	},
	{
		path: "/departments/create",
		name: DepartmentRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "department.create"
		},
		component: () => import("#pages/department/create/ui/DepartmentCreatePage.vue")
	},
	{
		path: "/departments/edit/:id",
		name: DepartmentRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "department.edit"
		},
		component: () => import("#pages/department/edit/ui/DepartmentEditPage.vue")
	}
]
