<script lang="ts" setup>
import { NButton, NIcon, NImage, NLayoutHeader, NPopselect, NSpace, type SelectRenderLabel } from "naive-ui"
import { computed, h, ref } from "vue"
import { useI18n } from "vue-i18n"
import { ArrowIcon, RusFlagIcon, UzbFlagIcon } from "@/shared/components/icons/svg"

const { t, availableLocales, locale: globalLocale } = useI18n()

const langDropdownIcons = ref<{ [key: string]: () => JSX.Element }>({
	ru: RusFlagIcon,
	uz: UzbFlagIcon
})

const langDropdownOptions = computed(() =>
	availableLocales.map(lang => ({
		label: t(`language.${lang.toLowerCase()}`),
		value: lang.toLowerCase(),
		icon: langDropdownIcons.value[lang.toLowerCase()] as () => JSX.Element
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
			h(NIcon, { size: 18 }, h(option.icon)),
			h("div", { style: { marginLeft: "12px", padding: "4px 0" } }, [h("div", null, [option.label as string])])
		]
	)
</script>
<template>
	<n-layout-header bordered class="u-header-empty">
		<div class="u-header-empty__container">
			<div class="left">
				<NImage alt="log" src="/images/logo.png" width="80" />
			</div>

			<n-space :size="22" align="center" class="right">
				<n-popselect v-model:value="globalLocale" :options="langDropdownOptions" :render-label="renderLabel" class="u-popselect-menu">
					<n-button class="u-popselect-trigger" icon-placement="right" text>
						<n-icon size="14">
							<component :is="langDropdownIcons[globalLocale]" />
						</n-icon>
						{{ $t(`language.${globalLocale.toLowerCase()}`) || "Язык" }}

						<template #icon>
							<n-icon size="14">
								<arrow-icon direction="bottom" />
							</n-icon>
						</template>
					</n-button>
				</n-popselect>
			</n-space>
		</div>
	</n-layout-header>
</template>

<style lang="scss" scoped>
.u-header-empty {
	padding: 0 1.2rem;
	box-shadow: 0px -1px 0px 0px clr(--text-primary) inset;
	height: 5.6rem;

	&__container {
		@include flex(2.4rem, row, space-between, center);
		width: 100%;
		height: 100%;
		max-width: 129.6rem;
		margin: auto;

		.left {
			@include flex(0, row, start, center);
		}
	}
}

.u-popselect-menu {
	border-radius: 1.2rem;
}

.u-popselect-trigger {
	@include font("t12");

	//color: var(--text-secondary);

	.n-button__content {
		gap: 0.6rem;
	}
}
</style>
