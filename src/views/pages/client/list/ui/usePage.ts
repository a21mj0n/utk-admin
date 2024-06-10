import { ref } from "vue"
import { ClientService, IClient } from "#services/client"

export default function () {
	const isLoading = ref<boolean>(false)
	const clientList = ref<IClient[]>()

	const getClientList = async () => {
		try {
			isLoading.value = true

			const result = await ClientService.fetchClientList()

			if (!result) {
				return
			}

			clientList.value = result
		} finally {
			isLoading.value = false
		}
	}

	return {
		clientList,
		isLoading,
		getClientList
	}
}
