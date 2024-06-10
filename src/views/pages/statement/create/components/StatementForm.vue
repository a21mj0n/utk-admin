<script lang="ts" setup>
import {
	FormInst,
	FormRules,
	NDatePicker,
	NDynamicInput,
	NForm,
	NFormItem,
	NFormItemGi,
	NGrid,
	NIcon,
	NInput,
	NP,
	NSelect,
	NTable,
	NText,
	NUpload,
	NUploadDragger,
	SelectOption
} from "naive-ui"
import { ArchiveIcon } from "lucide-vue-next"
import { IStatementCreateDto } from "#services/statement"
import { validatorMessages } from "#shared/utils/validators"
import { noFrontSpace } from "#shared/utils/functions"

defineProps<{
	clientList: SelectOption[]
	stationList: SelectOption[]
}>()

const formRef = defineModel<FormInst>("formRef")
const formModel = defineModel<IStatementCreateDto>("model")

const rules: FormRules = {
	number: {
		required: true,
		trigger: ["input", "blur"]
	}
}
</script>

<template>
	<NForm :ref="ref => (formRef = ref)" :model="formModel" :rules="rules" :validate-messages="validatorMessages">
		<NGrid cols="1 s:24 m:24 l:24 xl:24" responsive="screen" x-gap="20">
			<NFormItemGi label="29.Отправка номер:" offset="18" path="number" span="8">
				<NInput v-model:value="formModel!.number" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi label="1.Отправитель" path="sender_id" span="12">
				<NSelect v-model:value="formModel!.sender_id" :options="clientList" filterable></NSelect>
			</NFormItemGi>

			<NFormItemGi label="2.Станция отправителя" path="send_station_id" span="12">
				<NSelect v-model:value="formModel!.send_station_id" :options="stationList"></NSelect>
			</NFormItemGi>

			<NFormItemGi label="4.Получатель" path="receiver_id" span="12">
				<NSelect v-model:value="formModel!.receiver_id" :options="clientList" filterable></NSelect>
			</NFormItemGi>

			<NFormItemGi label="3.Заявления отправителя" path="number" span="12">
				<NInput v-model:value="formModel!.number" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi label="5.Станция назначения" path="receive_station_id" span="12">
				<NSelect v-model:value="formModel!.receive_station_id" :options="stationList"></NSelect>
			</NFormItemGi>

			<NFormItemGi span="12"></NFormItemGi>

			<NFormItemGi label="6.Пограничные станции переходов" span="7">
				<NDynamicInput :max="10" :min="1">
					<template #default="{ value }">
						<NSelect :options="stationList" :value="value"></NSelect>
					</template>
				</NDynamicInput>
			</NFormItemGi>

			<NFormItemGi span="17">
				<NTable :single-line="false" bordered size="small">
					<tbody>
						<tr>
							<th rowspan="2">7.Вагон</th>
							<th rowspan="2">8.Вагон предоставлен</th>
							<th rowspan="2">9.Грузоподьемность</th>
							<th rowspan="2">10.Оси</th>
							<th rowspan="2">11.Масса тары</th>
							<th rowspan="2">12.Тип цистерны</th>
							<th colspan="2">
								<p class="text-center">После перегрузки</p>
							</th>
						</tr>
						<tr>
							<th>13.Масса грузы</th>
							<th>14.К-во мест</th>
						</tr>
						<tr v-for="item in 4" :key="item">
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</NTable>
			</NFormItemGi>

			<NFormItemGi label="15.Наеминование груза" span="8">
				<NInput rows="6" type="textarea" />
			</NFormItemGi>

			<NFormItemGi label="16.Род упаковки" span="3">
				<NSelect />
			</NFormItemGi>
			<NFormItemGi label="17.К-во мест" span="3">
				<NInput />
			</NFormItemGi>
			<NFormItemGi label="18.Масса (в кг)" span="3">
				<div class="flex flex-col gap-4">
					<NInput />
					<NInput />
					<NInput />
				</div>
			</NFormItemGi>

			<NFormItemGi label="19.Пломбы" span="7">
				<div class="flex flex-col w-full">
					<NTable :single-line="false" class="mb-4">
						<tbody>
							<tr>
								<th>К-во</th>
								<th>Знаки</th>
							</tr>
							<tr>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</NTable>

					<NFormItem label="20.Погружено">
						<NInput />
					</NFormItem>

					<NFormItem label="21.Способ определение массы">
						<NInput />
					</NFormItem>
				</div>
			</NFormItemGi>

			<NFormItemGi label="23.Уплата прывозных платежей" span="10">
				<NDynamicInput :max="10" :min="1">
					<template #default="{ value }">
						<NInput />
					</template>
				</NDynamicInput>
			</NFormItemGi>

			<NFormItemGi label="22.Перевозчики" span="14">
				<NDynamicInput :max="10" :min="1">
					<template #default="{ value }">
						<div class="flex items-start gap-4 w-full">
							<NInput />
							<NInput pair separator="/" />
							<NInput />
						</div>
					</template>
				</NDynamicInput>
			</NFormItemGi>

			<NFormItemGi label="24.Документы, приложенные отправителем" span="14">
				<NUpload :max="6" directory-dnd multiple>
					<NUploadDragger>
						<div style="margin-bottom: 12px">
							<NIcon :depth="3" size="48">
								<ArchiveIcon />
							</NIcon>
						</div>
						<NText style="font-size: 16px"> Click or drag a file to this area to upload</NText>
						<NP depth="3" style="margin: 8px 0 0 0">
							Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date.
						</NP>
					</NUploadDragger>
				</NUpload>
			</NFormItemGi>
			<NFormItemGi label="25.Информация, не предназначенная для перевозчика. &numero; договора на поставку" span="10">
				<NInput rows="7" type="textarea" />
			</NFormItemGi>
			<NFormItemGi label="26.Дата заключения договора перевозки" span="7">
				<NDatePicker class="w-full" type="date" />
			</NFormItemGi>
			<NFormItemGi label="27.Дата прибытия" span="7">
				<NDatePicker class="w-full" type="date" />
			</NFormItemGi>
		</NGrid>
	</NForm>
</template>

<style lang="scss" scoped></style>
