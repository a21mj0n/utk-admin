<script lang="ts" setup>
import { NButton, NDataTable } from "naive-ui"
import { PlusIcon } from "lucide-vue-next"
import { renderEmptyCell, renderIcon } from "#shared/utils/functions"
import { BREAKPOINTS } from "#shared/utils/constants"
import { MainTeleport } from "#shared/components/main"
import usePage from "./usePage"
import { UserRoutesEnum } from "#routes/types"
import { useTableColumns } from "../composables"

const { userList, paginationReactive, isLoading } = usePage()
const { columns } = useTableColumns()
</script>

<template>
	<!--	<NTabs :on-update-value="onUpdateTab" :value="tab" class="mb-8" type="bar">-->
	<!--		<NTab :disabled="isLoading" name="all">All</NTab>-->
	<!--		<NTab :disabled="isLoading" name="active">Active</NTab>-->
	<!--		<NTab :disabled="isLoading" name="banned">Banned</NTab>-->
	<!--	</NTabs>-->

	<NDataTable
		:columns="columns"
		:data="userList"
		:loading="isLoading"
		:pagination="userList.length > 10 ? paginationReactive : false"
		:render-cell="value => renderEmptyCell(value)"
		:scroll-x="BREAKPOINTS.s"
		:single-line="false"
	>
		<template #empty> empty</template>
	</NDataTable>

	<MainTeleport to="#page-header-teleport-target">
		<NButton :render-icon="renderIcon(PlusIcon)" type="primary" @click="$router.push({ name: UserRoutesEnum.create })">
			{{ $t("toAdd") }}
		</NButton>
	</MainTeleport>
</template>

<style lang="scss" scoped></style>
