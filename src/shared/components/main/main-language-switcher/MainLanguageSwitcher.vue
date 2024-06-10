<script lang="ts" setup>
import { NButton, NIcon, NPopselect } from "naive-ui"
import { ChevronDownIcon } from "lucide-vue-next"
import useComponent from "./useComponent"

const { locale, languageList, languageIconsMap, renderLabel, onUpdateLocale } = useComponent()
</script>

<template>
	<NPopselect :on-update-value="onUpdateLocale" :options="languageList" :render-label="renderLabel" :value="locale">
		<NButton icon-placement="right" text>
			<NIcon class="mr-3" size="14">
				<Component :is="languageIconsMap[locale]" />
			</NIcon>
			{{ $t(`language.${locale.toLowerCase()}`) || "Язык" }}

			<template #icon>
				<NIcon size="14">
					<ChevronDownIcon />
				</NIcon>
			</template>
		</NButton>
	</NPopselect>
</template>

<style lang="scss" scoped></style>
