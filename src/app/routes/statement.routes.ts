import { RouteRecordRaw } from "vue-router"
import { StatementRoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const statementRoutes: RouteRecordRaw[] = [
	{
		path: "/statements",
		name: StatementRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "statement.list"
		},
		component: () => import("#pages/statement/list/ui/StatementListPage.vue")
	},
	{
		path: "/statements/create",
		name: StatementRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: "statement.create"
		},
		component: () => import("#pages/statement/create/ui/StatementCreatePage.vue")
	},
	{
		path: "/statements/edit/:id",
		name: StatementRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/statement/edit/ui/StatementEditPage.vue")
	}
]
