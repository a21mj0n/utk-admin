import { RouteRecordRaw } from "vue-router"
import { SectionRoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const sectionRoutes: RouteRecordRaw[] = [
	{
		path: "/sections",
		name: SectionRoutesEnum.list,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/section/list/ui/SectionListPage.vue")
	},
	{
		path: "/sections/create",
		name: SectionRoutesEnum.create,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/section/create/ui/SectionCreatePage.vue")
	},
	{
		path: "/sections/edit/:id",
		name: SectionRoutesEnum.edit,
		meta: {
			layout: AppLayoutsEnum.main,
			pageTitle: ""
		},
		component: () => import("#pages/section/edit/ui/SectionEditPage.vue")
	}
]
