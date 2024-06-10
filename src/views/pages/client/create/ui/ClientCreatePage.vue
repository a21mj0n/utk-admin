<script lang="ts" setup>
import usePage from "./usePage"
import { MainCrudButtons } from "#shared/components/main"
import { ClientRoutesEnum } from "#routes/types"
import { ClientForm } from "../components"

const { formRef, formModel, isLoading, onCreateClient } = usePage()
</script>

<template>
	<ClientForm v-model:form-ref="formRef" v-model:model="formModel" />

	<MainCrudButtons :back-route-name="ClientRoutesEnum.list" :has-delete="false" :is-loading="isLoading" :on-save="onCreateClient" />
</template>

<style lang="scss" scoped></style>
