import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { isAxiosError } from "axios"
import { useAuthStore } from "@/app/stores"
import { i18n } from "../i18n"
import { messageError } from "#shared/utils/functions/message-provider"
import { separateUrl } from "#shared/utils/functions"
import { useDiscreteApi } from "#shared/composables"
import { HttpStatus } from "#shared/types"

const { loadingBar } = useDiscreteApi()

const handleRequest = async (
	request: InternalAxiosRequestConfig<AxiosRequestConfig>
): Promise<InternalAxiosRequestConfig<AxiosRequestConfig>> => {
	const authStore = useAuthStore()
	const separatedUrl = separateUrl(request.url as string)
	const defaultApiVersion = "v1"

	loadingBar.start()

	request.url = defaultApiVersion + request.url

	if (separatedUrl.version) {
		request.url = separatedUrl.version + separatedUrl.url
	}

	request.headers["Content-Language"] = i18n.global.locale.value

	if (authStore.isAuthorized) {
		request.headers.Authorization = `Bearer ${authStore.authState.access_token}`
	}

	return request
}

const handleResponse = (response: AxiosResponse): AxiosResponse => {
	loadingBar.finish()

	return response
}

const handleError = (error: unknown) => {
	const authStore = useAuthStore()

	loadingBar.error()

	if (isAxiosError(error)) {
		if (error.response?.status == HttpStatus.UNAUTHORIZED) {
			authStore.logout()
		}

		console.error("%c INTERCEPTOR MESSAGE: \n", "color:red; font-size: 12px; font-weight: bold ", error)
		messageError(error.response?.data?.message)
		return Promise.reject(error.response)
	}

	console.error("%c INTERCEPTOR MESSAGE: \n", "color:red; font-size: 12px; font-weight: bold ", error)
	messageError(String(error))
	return Promise.reject(error)
}

export { handleError, handleRequest, handleResponse }
