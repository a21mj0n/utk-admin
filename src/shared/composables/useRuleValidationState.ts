import { FormItemRule } from "naive-ui"
import { ref } from "vue"

export default function useRuleValidationState({ validator }: { validator: (rule: FormItemRule, value: string) => boolean | Error }) {
	const isInvalid = ref(false)
	const rule: FormItemRule = {
		trigger: ["input", "blur"],
		validator: (rule: FormItemRule, value: string) => {
			const state = validator(rule, value)
			if (typeof state === "boolean") isInvalid.value = !state
			else isInvalid.value = true
			return state
		}
	}

	return {
		rule,
		isInvalid
	}
}
