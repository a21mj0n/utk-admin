import prompts from "prompts"
import { makePages, makeRoutes, makeServices } from "./commands/index.js"
import { PROMPT_QUESTIONS } from "./utils/constants/index.js"

async function bootstrap() {
	const response = await prompts(PROMPT_QUESTIONS)

	if (!response) {
		return
	}

	const { crudName, hasPages, hasRoutes, hasServices } = response

	if (hasPages) {
		makePages(crudName)
	}
	if (hasServices) {
		makeServices(crudName)
	}
	if (hasRoutes) {
		makeRoutes(crudName)
	}
}

bootstrap()
