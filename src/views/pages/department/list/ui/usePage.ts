import { onMounted, ref } from "vue"
import { DepartmentService, IDepartment } from "#services/department"

export default function () {
	const departmentList = ref<IDepartment[]>([])
	const isLoading = ref<boolean>(false)

	const getDepartmentList = async () => {
		try {
			isLoading.value = true

			const result = await DepartmentService.getDepartmentList()

			if (!result) {
				return
			}

			departmentList.value = result
		} finally {
			isLoading.value = false
		}
	}

	onMounted(() => {
		getDepartmentList()
	})

	return {
		departmentList,
		isLoading
	}
}
