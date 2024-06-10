import { createRouter, createWebHistory } from "vue-router"
import {
	authRoutes,
	centerRoutes,
	clientRoutes,
	commonRoutes,
	departmentRoutes,
	roleRoutes,
	sectionRoutes,
	statementRoutes,
	userRoutes
} from "@/app/routes"
import { authMiddleware, loadLayoutMiddleware } from "@/app/routes/middlewares"

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...commonRoutes,
		...authRoutes,
		...userRoutes,
		...roleRoutes,
		...sectionRoutes,
		...statementRoutes,
		...departmentRoutes,
		...centerRoutes,
		...clientRoutes
	],
	scrollBehavior(to, from, savedPosition) {
		return { top: 0, left: 0 } || savedPosition?.behavior
	}
})

router.beforeEach(authMiddleware)

router.beforeEach(loadLayoutMiddleware)

export default router
