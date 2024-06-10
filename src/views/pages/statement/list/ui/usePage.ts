import { reactive, ref } from "vue"
import { PaginationProps } from "naive-ui"
import { useRouter } from "vue-router"
import { IStatement, StatementService } from "#services/statement"

export default function () {
	const router = useRouter()

	const statementList = ref<IStatement[]>()
	const isLoading = ref<boolean>(false)
	const paginationReactive = reactive<PaginationProps>({
		page: 1,
		pageCount: 1,
		pageSize: 10,
		prefix({ itemCount }) {
			return `Всего: ${itemCount}.`
		},
		onUpdatePage: async (page: number) => {
			await router.replace({
				query: { page }
			})

			await getStatementList()
		}
	})

	const getStatementList = async () => {
		try {
			isLoading.value = true

			const result = await StatementService.getStatementList()

			if (!result) {
				return
			}

			statementList.value = result
		} finally {
			isLoading.value = false
		}
	}

	return {
		statementList,
		isLoading,
		paginationReactive,
		getStatementList
	}
}
