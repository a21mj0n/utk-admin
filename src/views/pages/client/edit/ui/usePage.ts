import useCreatePage from "../../create/ui/usePage"
import { reactive } from "vue"
import { ClientService, IClientUpdateDto } from "#services/client"
import { useRouter } from "vue-router"
import { clearPhoneSymbols } from "#shared/utils/functions"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { ClientRoutesEnum } from "#routes/types"
import { HttpStatus } from "#shared/types"

export default function () {
	const router = useRouter()
	const { formRef, formModel, isLoading } = useCreatePage()

	const userId = Number(router.currentRoute.value.params.id)
	const isLoadingEdit = reactive<{
		delete: boolean
		fetch: boolean
		edit: boolean
	}>({ delete: false, edit: false, fetch: false })

	const getClient = async () => {
		try {
			isLoadingEdit.fetch = true

			const result = await ClientService.fetchClientFormatted(userId)

			if (!result) {
				return
			}

			formModel.value = result
		} catch (e: any) {
			if (e.status === HttpStatus.NOT_FOUND) {
				router.push({ name: ClientRoutesEnum.list })
			}
		} finally {
			isLoadingEdit.fetch = false
		}
	}

	const onEditClient = async () => {
		try {
			isLoadingEdit.edit = true

			const normalizedFormModel: IClientUpdateDto = {
				...formModel.value,
				phone: clearPhoneSymbols(formModel.value.phone)
			}

			const result = await ClientService.updateClient(userId, normalizedFormModel)

			if (!result) {
				return
			}

			messageSuccess(result)

			await router.push({ name: ClientRoutesEnum.list })
		} finally {
			isLoadingEdit.edit = false
		}
	}

	const onDelete = async () => {
		try {
			isLoadingEdit.delete = true

			const result = await ClientService.deleteClient(userId)

			if (!result) {
				return
			}

			messageSuccess(result)

			await router.push({ name: ClientRoutesEnum.list })
		} finally {
			isLoadingEdit.delete = false
		}
	}

	return {
		formRef,
		formModel,
		isLoading,
		isLoadingEdit,
		getClient,
		onDelete,
		onEditClient
	}
}
