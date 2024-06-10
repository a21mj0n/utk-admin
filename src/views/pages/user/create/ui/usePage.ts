import { reactive, ref } from "vue"
import { FormInst, SelectOption } from "naive-ui"
import { IUserCreateDto, UserService } from "#services/user"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { useRouter } from "vue-router"
import { UserRoutesEnum } from "#routes/types"
import { RoleService } from "#services/role"
import { DepartmentService } from "#services/department"
import { clearPhoneSymbols } from "#shared/utils/functions"

export default function () {
	const router = useRouter()

	const isLoading = reactive<{
		create: boolean
		roleList: boolean
		departmentList: boolean
	}>({
		create: false,
		roleList: false,
		departmentList: false
	})
	const formModel = reactive<IUserCreateDto>({
		surname: "",
		name: "",
		patronymic: "",
		email: "",
		phone: "",
		login: "",
		password: "",
		role_id: null,
		department_id: null
	})
	const formRef = ref<FormInst>()
	const roleList = ref<SelectOption[]>([])
	const departmentList = ref<SelectOption[]>([])

	const onCreateUser = async () => {
		try {
			isLoading.create = true

			await formRef.value?.validate()

			const userCreateDto: IUserCreateDto = {
				...formModel,
				role_id: Number(formModel.role_id),
				department_id: Number(formModel.department_id),
				phone: clearPhoneSymbols(formModel.phone)
			}

			const result = await UserService.createUser(userCreateDto)

			if (!result) {
				return
			}

			messageSuccess(result)

			await router.push({ name: UserRoutesEnum.list })
		} finally {
			isLoading.create = false
		}
	}

	const getRoleList = async () => {
		try {
			isLoading.roleList = true

			const result = await RoleService.getRoleListForSelect()

			if (!result) {
				return
			}

			roleList.value = result
		} finally {
			isLoading.roleList = false
		}
	}

	const getDepartmentList = async () => {
		try {
			isLoading.departmentList = true

			const result = await DepartmentService.getDepartmentListForSelect()

			if (!result) {
				return
			}

			departmentList.value = result
		} finally {
			isLoading.departmentList = false
		}
	}

	return {
		formRef,
		formModel,
		isLoading,
		roleList,
		departmentList,
		getRoleList,
		getDepartmentList,
		onCreateUser
	}
}
