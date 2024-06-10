import { ref } from "vue"
import { FormInst } from "naive-ui"
import { IStatementCreateDto, StatementTypeEnum } from "#services/statement"

export default function () {
	const formRef = ref<FormInst>()
	const formModel = ref<IStatementCreateDto>({
		type: StatementTypeEnum.export,
		number: ""
	})

	const onCreateStatement = async () => {
		try {
		} finally {
		}
	}
	return {
		formRef,
		formModel,
		onCreateStatement
	}
}
