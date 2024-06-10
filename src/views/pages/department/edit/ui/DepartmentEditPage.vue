<script lang="ts" setup>
import usePage from "./usePage"
import { DepartmentRoutesEnum } from "#routes/types"
import { DepartmentForm } from "#pages/department/create/components"
import { MainCrudButtons } from "#shared/components/main"

const { formRef, formModel, logisticCenterList, isLoading, onDeleteDepartment, onEditDepartment } = usePage()
</script>

<template>
	<DepartmentForm
		v-model:form-model="formModel"
		v-model:form-ref="formRef"
		:is-loading-center-list="isLoading.fetchCenter"
		:loading="isLoading.delete || isLoading.edit"
		:logistic-center-list="logisticCenterList"
	/>

	<MainCrudButtons
		:back-route-name="DepartmentRoutesEnum.list"
		:is-loading="isLoading"
		:on-delete="onDeleteDepartment"
		:on-save="onEditDepartment"
		has-delete
	/>
</template>

<style lang="scss" scoped></style>
