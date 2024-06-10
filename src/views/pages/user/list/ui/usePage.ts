import { onMounted, reactive, ref } from "vue"
import { PaginationProps } from "naive-ui"
import { useRouter } from "vue-router"
import { IUser, UserService } from "#services/user"

export default function () {
	const router = useRouter()

	const userList = ref<IUser[]>([])
	const paginationReactive = reactive<PaginationProps>({
		page: 1,
		pageCount: 1,
		pageSize: 10,
		prefix({ itemCount }) {
			return `Всего: ${itemCount}.`
		},
		onUpdatePage(page: number) {
			router.replace({
				query: { page }
			})

			getUserList()
		}
	})
	const tab = ref<string>("all")
	const isLoading = ref<boolean>(false)

	const getUserList = async () => {
		try {
			isLoading.value = true
			const page = router.currentRoute.value.query.page
			console.log(page)
			const result = await UserService.fetchUserList()

			if (!result) {
				return
			}

			userList.value = result
		} finally {
			isLoading.value = false
		}
	}

	const onUpdateTab = (tabName: string) => {
		router.replace({
			query: { type: tabName }
		})

		tab.value = tabName
	}

	onMounted(() => {
		getUserList()
	})

	return {
		userList,
		paginationReactive,
		tab,
		isLoading,
		onUpdateTab
	}
}
