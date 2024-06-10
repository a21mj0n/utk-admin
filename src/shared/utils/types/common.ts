import { MaskTokens, MaskType } from "maska"

export interface IResponseError {
	data: null
	message: string
}

export interface IMaskOptions {
	mask?: MaskType
	tokens?: MaskTokens
	tokensReplace?: boolean
	eager?: boolean
	reversed?: boolean
}
