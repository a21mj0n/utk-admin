<script lang="ts" setup>
import { computed } from "vue"
import { darkTheme, lightTheme, NConfigProvider, NLoadingBarProvider, ruRU } from "naive-ui"
import { useDark } from "@vueuse/core"
import { AppLayout } from "@/views/layouts"
import { darkThemeOverrides, lightThemeOverrides } from "#shared/utils/naive-overrides"
import "virtual:uno.css"

const isDark = useDark()

const themeOverrides = computed(() => (isDark.value ? darkThemeOverrides : lightThemeOverrides))
const theme = computed(() => (isDark.value ? darkTheme : lightTheme))
</script>

<template>
	<NConfigProvider :locale="ruRU" :theme="theme" :theme-overrides="themeOverrides">
		<NLoadingBarProvider>
			<AppLayout>
				<RouterView />
			</AppLayout>
		</NLoadingBarProvider>
	</NConfigProvider>
</template>
