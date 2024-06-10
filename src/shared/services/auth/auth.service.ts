import { IAuthLoginDto, IAuthResponse } from "./auth.types"
import { BaseService } from "#services/base"
import { IResponse } from "../../types"

// import { IResponse } from "../../types"

class AuthService extends BaseService {
	constructor() {
		super()
	}

	async login(authData: IAuthLoginDto): Promise<IAuthResponse> {
		const { data: response } = await this.$axios.post<IResponse<IAuthResponse>>(`/login`, authData)

		return {
			token: response.data.token
		}
	}

	async logout(): Promise<string> {
		await this.$axios.delete(`/logout`)

		return this.$i18n.global.t("auth.login.exitText")
	}
}

export default new AuthService()
