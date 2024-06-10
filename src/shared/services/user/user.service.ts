import { BaseService } from "../base"
import { IMe, IUser, IUserCreateDto, TUserUpdateDto } from "./user.types"
import { IResponse } from "../../types"

class UserService extends BaseService {
	constructor() {
		super()
		this.modelName = "user"
	}

	async fetchUser(id: IUser["id"]): Promise<IUser> {
		const user = await this.fetchOne<IUser>(id)
		return user.data
	}

	async fetchUserList(): Promise<IUser[]> {
		const userList = await this.fetchAll<IUser>()
		return userList.data
	}

	async createUser(createUserDto: IUserCreateDto) {
		await this.create<IUserCreateDto>(createUserDto)
		return "User successfully created!"
	}

	async updateUser(id: IUser["id"], updateUserDto: TUserUpdateDto) {
		await this.update(id, updateUserDto)
		return "User successfully updated!"
	}

	async deleteUser(id: IUser["id"]) {
		await this.delete(id)
		return "User successfully deleted!"
	}

	async fetchMe(): Promise<IMe> {
		const { data: response } = await this.$axios.get<IResponse<IMe>>("/me")

		return response.data
	}
}

export default new UserService()
