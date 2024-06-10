import { defineStore } from "pinia"
import { reactive } from "vue"
import { IUserStoreState } from "./user-store.types"

export const useUserStore = defineStore(
	"user",
	() => {
		const state = reactive<IUserStoreState>({
			me: {
				id: 1,
				surname: "",
				name: "",
				patronymic: "",
				phone: "",
				email: "",
				abbreviated: "",
				status: "",
				created_at: "",
				role: {
					id: 1,
					name: { ru: "", uz: "" },
					permissions: []
				},
				permissions: []
			}
		})

		return {
			state
		}
	},
	{
		persist: {
			storage: window.localStorage
		}
	}
)
