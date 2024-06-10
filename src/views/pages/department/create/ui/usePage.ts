import { onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { FormInst, SelectOption } from "naive-ui"
import { DepartmentRoutesEnum } from "#routes/types"
import { DepartmentService, IDepartmentCreateDto } from "#services/department"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { CenterService } from "#services/center"

export default function () {
	const router = useRouter()

	const formRef = ref<FormInst | null>(null)
	const formModel = reactive<IDepartmentCreateDto>({
		name: "",
		is_office: false,
		center_id: null
	})
	const isLoading = reactive<{
		create: boolean
		fetch: boolean
	}>({
		create: false,
		fetch: false
	})
	const logisticCenterList = ref<SelectOption[]>([])

	const onCreateDepartment = async () => {
		try {
			isLoading.create = true

			await formRef.value?.validate()

			const createdText = await DepartmentService.createDepartment(formModel)

			messageSuccess(createdText)

			await router.push({ name: DepartmentRoutesEnum.list })
		} finally {
			isLoading.create = false
		}
	}

	const getLogisticCenterList = async () => {
		try {
			isLoading.fetch = true

			const result = await CenterService.getCenterListForSelect()

			if (!result) {
				return
			}

			logisticCenterList.value = result
		} finally {
			isLoading.fetch = false
		}
	}

	onMounted(() => {
		getLogisticCenterList()
	})

	return {
		formRef,
		formModel,
		logisticCenterList,
		isLoading,
		onCreateDepartment
	}
}
