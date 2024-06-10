import { onMounted, reactive, ref } from "vue"
import { FormInst, SelectOption } from "naive-ui"
import { useRoute, useRouter } from "vue-router"
import { DepartmentService, IDepartment, IDepartmentUpdateDto } from "#services/department"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { DepartmentRoutesEnum } from "#routes/types"
import { CenterService } from "#services/center"

export default function () {
	const route = useRoute()
	const router = useRouter()

	const departmentId = Number(route.params.id)
	const isLoading = reactive<{
		delete: boolean
		edit: boolean
		fetch: boolean
		fetchCenter: boolean
	}>({
		delete: false,
		edit: false,
		fetch: false,
		fetchCenter: false
	})
	const department = ref<IDepartment>()
	const formRef = ref<FormInst | null>(null)
	const formModel = reactive<IDepartmentUpdateDto>({})
	const logisticCenterList = ref<SelectOption[]>([])

	const getDepartment = async () => {
		try {
			isLoading.fetch = true

			const departmentData = await DepartmentService.getDepartment(departmentId)

			if (!departmentData) {
				return
			}

			department.value = departmentData

			formModel.name = departmentData.name
			formModel.center_id = String(departmentData.center.id)
			formModel.is_office = departmentData.is_office
		} finally {
			isLoading.fetch = false
		}
	}

	const getLogisticCenterList = async () => {
		try {
			isLoading.fetchCenter = true

			const result = await CenterService.getCenterListForSelect()

			if (!result) {
				return
			}

			logisticCenterList.value = result
		} finally {
			isLoading.fetchCenter = false
		}
	}

	const onEditDepartment = async () => {
		try {
			isLoading.edit = true

			await formRef.value?.validate()
			const result = await DepartmentService.updateDepartment(departmentId, formModel)

			messageSuccess(result)

			await router.push({ name: DepartmentRoutesEnum.list })
		} finally {
			isLoading.edit = false
		}
	}

	const onDeleteDepartment = async () => {
		try {
			isLoading.delete = true

			const result = await DepartmentService.deleteDepartment(departmentId)

			messageSuccess(result)

			await router.push({ name: DepartmentRoutesEnum.list })
		} finally {
			isLoading.delete = false
		}
	}

	onMounted(async () => {
		await getDepartment()
		await getLogisticCenterList()
	})

	return {
		formRef,
		formModel,
		isLoading,
		logisticCenterList,
		onDeleteDepartment,
		onEditDepartment
	}
}
