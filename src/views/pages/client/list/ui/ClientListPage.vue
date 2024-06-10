<script lang="ts" setup>
import { onMounted } from "vue"
import { NButton, NDataTable } from "naive-ui"
import { PlusIcon } from "lucide-vue-next"
import usePage from "./usePage"
import { useTableColumns } from "../composables"
import { ClientRoutesEnum } from "#routes/types"
import { MainTeleport } from "#shared/components/main"
import { renderIcon } from "#shared/utils/functions"
import { BREAKPOINTS } from "#shared/utils/constants"

const { clientList, isLoading, getClientList } = usePage()
const { columns } = useTableColumns()

onMounted(() => {
	getClientList()
})
</script>

<template>
	<NDataTable :columns="columns" :data="clientList" :loading="isLoading" :scroll-x="BREAKPOINTS.s" :single-line="false" />

	<MainTeleport to="#page-header-teleport-target">
		<NButton :render-icon="renderIcon(PlusIcon)" type="primary" @click="$router.push({ name: ClientRoutesEnum.create })">
			{{ $t("toAdd") }}
		</NButton>
	</MainTeleport>
</template>

<style lang="scss" scoped></style>
