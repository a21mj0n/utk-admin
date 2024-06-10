<script lang="ts" setup>
import { NIcon, NTab, NTabs } from "naive-ui"
import { MoveDownRightIcon, MoveUpLeftIcon, TruckIcon } from "lucide-vue-next"
import usePage from "./usePage"
import { StatementForm } from "../components"
import { MainCrudButtons, MainTeleport } from "#shared/components/main"
import { StatementRoutesEnum } from "#routes/types"
import { StatementTypeEnum } from "#services/statement"

const { formRef, formModel, onCreateStatement } = usePage()
</script>

<template>
	<StatementForm v-model:form-ref="formRef" v-model:model="formModel" :client-list="[]" :station-list="[]" />

	<MainCrudButtons :back-route-name="StatementRoutesEnum.list" :on-save="onCreateStatement" />

	<MainTeleport to="#page-header-teleport-target">
		<NTabs type="line">
			<NTab :name="StatementTypeEnum.import">
				<NIcon class="mr-2" size="18">
					<MoveDownRightIcon />
				</NIcon>
				Имрорт
			</NTab>
			<NTab :name="StatementTypeEnum.export">
				<NIcon class="mr-2" size="18">
					<MoveUpLeftIcon />
				</NIcon>
				Экспорт
			</NTab>
			<NTab :name="StatementTypeEnum.transit">
				<NIcon class="mr-2" size="18">
					<TruckIcon />
				</NIcon>
				Транзит
			</NTab>
		</NTabs>
	</MainTeleport>
</template>

<style lang="scss" scoped></style>
