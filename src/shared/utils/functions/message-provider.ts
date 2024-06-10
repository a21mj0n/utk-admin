import type { VNodeChild } from "vue"
import type { MessageOptions } from "naive-ui"

import { renderMessage } from "@/shared/utils/functions"
import { useDiscreteApi } from "@/shared/composables"

const { message } = useDiscreteApi()

type MessageContentType = string | (() => VNodeChild)

export const messageError = (content: MessageContentType, options?: MessageOptions) =>
	message.error(content, options || { render: renderMessage })

export const messageSuccess = (content: MessageContentType, options?: MessageOptions) =>
	message.success(content, options || { render: renderMessage })
