<script lang="ts" setup>
import { NButton, NDataTable } from "naive-ui"
import { PlusIcon } from "lucide-vue-next"
import usePage from "./usePage"
import { useTableColumns } from "../composables"
import { StatementRoutesEnum } from "#routes/types"
import { BREAKPOINTS } from "#shared/utils/constants"
import { MainTeleport } from "#shared/components/main"
import { renderIcon } from "#shared/utils/functions"
import { onMounted } from "vue"

const { statementList, isLoading, paginationReactive, getStatementList } = usePage()
const { columns } = useTableColumns()

onMounted(() => {
	getStatementList()
})
</script>

<template>
	<NDataTable
		:columns="columns"
		:data="statementList"
		:loading="isLoading"
		:pagination="statementList && statementList?.length > 10 ? paginationReactive : false"
		:scroll-x="BREAKPOINTS.s"
		:single-line="false"
	/>

	<MainTeleport to="#page-header-teleport-target">
		<NButton :render-icon="renderIcon(PlusIcon)" type="primary" @click="$router.push({ name: StatementRoutesEnum.create })">
			{{ $t("toAdd") }}
		</NButton>
	</MainTeleport>
</template>

<style lang="scss" scoped></style>
