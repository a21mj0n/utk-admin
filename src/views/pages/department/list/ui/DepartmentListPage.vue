<script lang="ts" setup>
import { NButton, NDataTable } from "naive-ui"
import { PlusIcon } from "lucide-vue-next"
import usePage from "./usePage"
import { useTableColumns } from "../composables"
import MainTeleport from "#shared/components/main/MainTeleport.vue"
import { renderIcon } from "#shared/utils/functions"
import { DepartmentRoutesEnum } from "#routes/types"

const { departmentList, isLoading } = usePage()
const { columns } = useTableColumns()
</script>

<template>
	<NDataTable :columns="columns" :data="departmentList" :loading="isLoading"></NDataTable>

	<MainTeleport to="#page-header-teleport-target">
		<NButton :render-icon="renderIcon(PlusIcon)" type="primary" @click="$router.push({ name: DepartmentRoutesEnum.create })">
			{{ $t("toAdd") }}
		</NButton>
	</MainTeleport>
</template>

<style lang="scss" scoped></style>
