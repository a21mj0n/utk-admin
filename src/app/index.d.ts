import "vue"
import "vue-router"
import { AppLayoutsEnum } from "../views/layouts/types"
import { VueElement } from "vue"
import { RouteRecordName } from "vue-router"

declare module "vue" {
	interface InputHTMLAttributes {
		["data-maska"]?: string
	}
}

declare module "vue-router" {
	interface RouteMeta {
		layout?: AppLayoutsEnum
		layoutComponent?: VueElement
		pageTitle?: string
	}

	interface LocationQuery {
		page?: number
		type?: string | number
		redirectTo?: RouteRecordName | string
	}

	interface LocationQueryRaw extends LocationQuery {}

	interface LocationQueryValueRaw extends LocationQuery {}
}
