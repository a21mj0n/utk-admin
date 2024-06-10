import { onMounted, ref } from "vue"
import { IRole, RoleService } from "#services/role"

export default function () {
	const roleList = ref<IRole[]>([])
	const isLoading = ref<boolean>(false)

	const getRoleList = async () => {
		try {
			isLoading.value = true
			const result = await RoleService.getRoleList()

			if (!result) {
				return
			}

			roleList.value = result
		} finally {
			isLoading.value = false
		}
	}

	onMounted(() => {
		getRoleList()
	})

	return {
		roleList,
		isLoading
	}
}
