<script lang="ts" setup>
import { NButton, NDropdown, NIcon, NLayoutHeader, NSwitch } from "naive-ui"
import { ChevronDownIcon, MoonIcon, SunIcon } from "lucide-vue-next"
import { useComponent } from "./useComponent"
import { MainLanguageSwitcher } from "#shared/components/main"
import { useAuthStore, useUserStore } from "@/app/stores"

const { dropdownOptions, isDark, onDropdownSelect, toggleDark } = useComponent()
const { isAuthorized } = useAuthStore()
const userStore = useUserStore()
</script>

<template>
	<NLayoutHeader bordered class="py-5">
		<div class="flex justify-end items-center gap-8">
			<NSwitch :on-update-value="toggleDark" :value="isDark">
				<template #checked-icon>
					<MoonIcon />
				</template>
				<template #unchecked-icon>
					<SunIcon />
				</template>
			</NSwitch>

			<MainLanguageSwitcher />

			<NDropdown v-if="isAuthorized" :options="dropdownOptions" trigger="hover" @select="onDropdownSelect">
				<NButton icon-placement="right" text>
					<p class="t14">{{ userStore.state?.me.abbreviated }}</p>

					<template #icon>
						<NIcon size="14">
							<ChevronDownIcon />
						</NIcon>
					</template>
				</NButton>
			</NDropdown>
		</div>
	</NLayoutHeader>
</template>

<style lang="scss"></style>
