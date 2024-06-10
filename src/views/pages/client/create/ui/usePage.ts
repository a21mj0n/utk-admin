import { reactive, ref } from "vue"
import { FormInst } from "naive-ui"
import { useRouter } from "vue-router"
import { ClientService, IClientCreateDto } from "#services/client"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { ClientRoutesEnum } from "#routes/types"
import { clearPhoneSymbols } from "#shared/utils/functions"

export default function () {
	const router = useRouter()

	const isLoading = reactive<{ create: boolean }>({ create: false })
	const formRef = ref<FormInst>()
	const formModel = ref<IClientCreateDto>({
		name: "",
		address: "",
		phone: "",
		email: "",
		registration_number: "",
		tax_id: null
	})

	const onCreateClient = async () => {
		try {
			isLoading.create = true

			await formRef.value?.validate()

			const normalizedFormModel: IClientCreateDto = {
				...formModel.value,
				phone: clearPhoneSymbols(formModel.value.phone)
			}

			const result = await ClientService.createClient(normalizedFormModel)

			if (!result) {
				return
			}

			messageSuccess(result)

			await router.push({ name: ClientRoutesEnum.list })
		} finally {
			isLoading.create = false
		}
	}

	return {
		formRef,
		formModel,
		isLoading,
		onCreateClient
	}
}
