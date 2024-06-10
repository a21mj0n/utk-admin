import { reactive, ref } from "vue"
import { FormInst } from "naive-ui"
import { useRouter } from "vue-router"
import { RoleRoutesEnum } from "#routes/types"
import { IPermission, PermissionService } from "#services/permission"
import { DepartmentService, IDepartment } from "#services/department"
import { IRoleCreateDto, RoleService } from "#services/role"
import { messageSuccess } from "#shared/utils/functions/message-provider"

export default function () {
	const router = useRouter()

	const formRef = ref<FormInst>()
	const isLoading = reactive<{
		create: boolean
		fetch: boolean
		permissionList: boolean
		departmentList: boolean
	}>({
		create: false,
		fetch: false,
		permissionList: false,
		departmentList: false
	})
	const permissionList = ref<IPermission[]>([])
	const departmentList = ref<IDepartment[]>([])
	const formModel = reactive<IRoleCreateDto>({
		name: {
			uz: "",
			ru: ""
		},
		description: {
			ru: "",
			uz: ""
		},
		permissions: [],
		departments: []
	})

	const getPermissionList = async () => {
		try {
			isLoading.permissionList = true

			const result = await PermissionService.fetchPermissionList()

			if (!result) {
				return
			}

			permissionList.value = result
		} finally {
			isLoading.permissionList = false
		}
	}

	const getDepartmentList = async () => {
		try {
			isLoading.departmentList = true

			const result = await DepartmentService.getDepartmentList()

			if (!result) {
				return
			}

			departmentList.value = result
		} finally {
			isLoading.departmentList = false
		}
	}

	const onCreateRole = async () => {
		try {
			isLoading.create = true

			await formRef.value?.validate()
			const result = await RoleService.createRole(formModel)

			messageSuccess(result)

			await router.push({ name: RoleRoutesEnum.list })
		} finally {
			isLoading.create = false
		}
	}

	return {
		formRef,
		formModel,
		permissionList,
		departmentList,
		isLoading,
		onCreateRole,
		getDepartmentList,
		getPermissionList
	}
}
