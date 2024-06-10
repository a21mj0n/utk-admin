<script lang="ts" setup>
import { NButton, NPagination } from "naive-ui"
import { useRouter } from "vue-router"
import { ArrowLeft, ArrowRight } from "../icons/svg"
import { IPagination } from "#shared/types/pagination"
import { useCustomBreakpoints } from "#shared/composables"

const { isMobile } = useCustomBreakpoints()
const router = useRouter()

withDefaults(
	defineProps<{
		isLoading?: boolean
		disabled: boolean
		pagination: IPagination | undefined
	}>(),
	{
		disabled: false
	}
)

const onUpdatePage = (page: number) => {
	router.push({
		...router.currentRoute.value,
		query: { ...router.currentRoute.value.query, page }
	})
}
</script>

<template>
	<n-pagination
		v-if="Number(pagination?.meta.total) > 10"
		:disabled="disabled || isLoading"
		:page="Number(pagination?.meta.current_page)"
		:page-count="Number(pagination?.meta.last_page)"
		:page-slot="isMobile ? 5 : 12"
		class="main-pagination"
		@update-page="onUpdatePage"
	>
		<template #prev>
			<n-button
				:bordered="false"
				:disabled="(pagination?.meta.current_page || 1) === 1 || disabled || isLoading"
				:render-icon="ArrowLeft"
				ghost
				size="medium"
				type="primary"
			>
				{{ isMobile ? "" : $t("pagination.prev") }}
			</n-button>
		</template>
		<template #next>
			<n-button
				:bordered="false"
				:disabled="(pagination?.meta.current_page || 1) === pagination?.meta.last_page || disabled || isLoading"
				:render-icon="ArrowRight"
				ghost
				icon-placement="right"
				size="medium"
				type="primary"
			>
				{{ isMobile ? "" : $t("pagination.next") }}
			</n-button>
		</template>
	</n-pagination>
</template>
<style lang="scss">
.v-binder-follower-content {
	.n-popselect-menu {
		width: fit-content !important;
	}
}
</style>
