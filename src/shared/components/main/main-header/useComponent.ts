import type { DropdownOption } from "naive-ui"
import { LogOutIcon, PhoneCallIcon } from "lucide-vue-next"
import { useDark, useToggle } from "@vueuse/core"
import { useAuthStore, useUserStore } from "@/app/stores"
import { AuthService } from "#services/auth"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { phoneFormatter, renderIcon } from "#shared/utils/functions"

export const useComponent = () => {
	const authStore = useAuthStore()
	const userStore = useUserStore()
	const isDark = useDark()
	const toggleDark = useToggle(isDark)

	const onSignOut = async () => {
		const logoutMessage = await AuthService.logout()

		authStore.logout()

		messageSuccess(logoutMessage)
	}

	const onDropdownSelect = (key: string) => {
		switch (key) {
			case "logout":
				onSignOut()
				break
		}
	}

	const dropdownOptions: DropdownOption[] = [
		{
			label: phoneFormatter(userStore.state.me.phone),
			icon: renderIcon(PhoneCallIcon)
		},
		{
			key: "header-divider",
			type: "divider"
		},
		{
			label: "Выйти",
			key: "logout",
			icon: renderIcon(LogOutIcon)
		}
	]

	return {
		dropdownOptions,
		isDark,
		onDropdownSelect,
		toggleDark
	}
}
