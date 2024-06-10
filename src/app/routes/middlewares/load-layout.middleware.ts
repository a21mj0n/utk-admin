import type { RouteLocationNormalized } from "vue-router"
import { AppLayoutsEnum, AppLayoutToFileMap } from "@/views/layouts/types"

// eslint-disable-next-line func-style
export const loadLayoutMiddleware = async (route: RouteLocationNormalized): Promise<void> => {
	const { layout } = route.meta
	const normalizedLayoutName = layout || AppLayoutsEnum.empty

	const getLayoutComponent = async () => {
		const fileName = AppLayoutToFileMap[normalizedLayoutName]
		const component = await import(`../../../views/layouts/ui/${fileName}.vue`)

		return component.default
	}

	route.meta.layoutComponent = await getLayoutComponent()
}
