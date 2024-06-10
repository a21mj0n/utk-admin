<script lang="ts" setup>
import usePage from "./usePage"
import { DepartmentRoutesEnum } from "#routes/types"
import { DepartmentForm } from "../components"
import { MainCrudButtons } from "#shared/components/main"

const { formRef, formModel, logisticCenterList, isLoading, onCreateDepartment } = usePage()
</script>

<template>
	<DepartmentForm
		v-model:form-model="formModel"
		v-model:form-ref="formRef"
		:is-loading-center-list="isLoading.fetch"
		:loading="isLoading.create"
		:logistic-center-list="logisticCenterList"
	/>

	<MainCrudButtons
		:back-route-name="DepartmentRoutesEnum.list"
		:has-delete="false"
		:is-loading="isLoading"
		:on-save="onCreateDepartment"
	/>
</template>

<style lang="scss" scoped></style>
