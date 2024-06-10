import useCreatePage from "#pages/role/create/ui/usePage"
import { RoleService } from "#services/role"
import { useRouter } from "vue-router"
import { reactive } from "vue"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { RoleRoutesEnum } from "#routes/types"

export default function () {
	const router = useRouter()
	const { formRef, formModel, departmentList, permissionList, isLoading, getPermissionList, getDepartmentList } = useCreatePage()

	const roleId = Number(router.currentRoute.value.params.id)

	const isLoadingEdit = reactive<{
		delete: boolean
		edit: boolean
	}>({ delete: false, edit: false })

	const getRole = async () => {
		try {
			isLoading.fetch = true

			const result = await RoleService.getRole(roleId)

			if (!result) {
				return
			}

			formModel.name.uz = result.name.uz
			formModel.name.ru = result.name.ru
			formModel.permissions = result.permissions.map(permission => permission.id)
		} finally {
			isLoading.fetch = false
		}
	}

	const onEditRole = async () => {
		try {
			isLoadingEdit.edit = true

			await formRef.value?.validate()
			const result = await RoleService.updateRole(roleId, formModel)

			if (!result) {
				return
			}

			messageSuccess(result)

			await router.push({ name: RoleRoutesEnum.list })
		} finally {
			isLoadingEdit.edit = false
		}
	}

	const onDeleteRole = async () => {
		try {
			isLoadingEdit.delete = true

			const result = await RoleService.deleteRole(roleId)
			messageSuccess(result)

			await router.push({ name: RoleRoutesEnum.list })
		} finally {
			isLoadingEdit.delete = false
		}
	}

	return {
		formRef,
		formModel,
		permissionList,
		departmentList,
		isLoading,
		isLoadingEdit,
		getRole,
		getPermissionList,
		getDepartmentList,
		onEditRole,
		onDeleteRole
	}
}
