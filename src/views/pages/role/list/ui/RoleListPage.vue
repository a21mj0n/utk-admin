<script lang="ts" setup>
import { NButton, NDataTable } from "naive-ui"
import { PlusIcon } from "lucide-vue-next"
import usePage from "./usePage"
import { RoleRoutesEnum } from "#routes/types"
import { renderIcon } from "#shared/utils/functions"
import { MainTeleport } from "#shared/components/main"
import { useTableColumns } from "../composables"

const { roleList, isLoading } = usePage()
const { columns } = useTableColumns()
</script>

<template>
	<NDataTable :columns="columns" :data="roleList" :loading="isLoading" :single-line="false" />

	<MainTeleport to="#page-header-teleport-target">
		<NButton :render-icon="renderIcon(PlusIcon)" type="primary" @click="$router.push({ name: RoleRoutesEnum.create })">
			{{ $t("toAdd") }}
		</NButton>
	</MainTeleport>
</template>

<style lang="scss" scoped></style>
