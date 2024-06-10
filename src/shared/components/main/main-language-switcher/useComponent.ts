import { useI18n } from "vue-i18n"
import { computed, h } from "vue"
import { RusFlagIcon, UzbFlagIcon } from "#shared/components/icons/svg"
import { NIcon, SelectRenderLabel } from "naive-ui"
import { useLocalStorage } from "@vueuse/core"

export default function () {
	const { t, locale, availableLocales } = useI18n()
	const localeInStorage = useLocalStorage("utk-locale", "ru")

	const languageIconsMap = {
		ru: RusFlagIcon,
		uz: UzbFlagIcon
	}

	const languageList = computed(() =>
		availableLocales.map(lang => ({
			label: t(`language.${lang.toLowerCase()}`),
			value: lang.toLowerCase(),
			icon: languageIconsMap[lang.toLowerCase()]
		}))
	)

	const renderLabel: SelectRenderLabel = option =>
		h(
			"div",
			{
				style: {
					display: "flex",
					alignItems: "center"
				}
			},
			[
				h(
					NIcon,
					{ class: "mr-3", size: 14 },
					{
						default: () => h(option.icon)
					}
				),
				h(
					"div",
					{},
					{
						default: () => [h("div", null, [option.label as string])]
					}
				)
			]
		)

	const onUpdateLocale = (value: string) => {
		locale.value = value
		localeInStorage.value = value
	}

	return {
		locale,
		languageIconsMap,
		languageList,
		renderLabel,
		onUpdateLocale
	}
}
