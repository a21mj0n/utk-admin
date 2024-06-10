import useCreatePage from "#pages/user/create/ui/usePage"
import { reactive } from "vue"
import { UserService } from "#services/user"
import { useRouter } from "vue-router"
import { phoneFormatter } from "#shared/utils/functions"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { UserRoutesEnum } from "#routes/types"

export default function () {
	const router = useRouter()
	const { formRef, formModel, departmentList, roleList, getDepartmentList, getRoleList } = useCreatePage()

	const userId = Number(router.currentRoute.value.params.id)
	const isLoadingEdit = reactive<{
		fetch: boolean
		edit: boolean
		delete: boolean
	}>({
		fetch: false,
		delete: false,
		edit: false
	})

	const getUser = async () => {
		try {
			isLoadingEdit.fetch = true

			const result = await UserService.fetchUser(userId)

			if (!result) {
				return
			}

			Object.keys(formModel).forEach(key => {
				formModel[key] = result[key]

				if (key === "role_id") {
					formModel.role_id = String(result.role.id)
				}

				if (key === "phone") {
					formModel.phone = phoneFormatter(formModel.phone) as string
				}
			})
		} finally {
			isLoadingEdit.fetch = false
		}
	}

	const updateUser = async () => {
		try {
			isLoadingEdit.edit = true

			await formRef.value?.validate()
			const result = await UserService.updateUser(userId, formModel)

			if (!result) {
				return
			}

			messageSuccess(result)

			await router.push({ name: UserRoutesEnum.list })
		} finally {
			isLoadingEdit.edit = false
		}
	}

	return {
		formRef,
		formModel,
		roleList,
		departmentList,
		getUser,
		getRoleList,
		getDepartmentList,
		updateUser
	}
}
