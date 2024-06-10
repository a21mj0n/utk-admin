<script setup lang="ts">
import { ref } from "vue"
import { NButton, NImage } from "naive-ui"
import { MediaContentIcon, MediaContentIcon2, ScaleIcon } from "@/shared/components/icons/svg"

withDefaults(
	defineProps<{
		urlPrefix?: string
		preview?: string
		fallback?: "type-1" | "type-2"
		title: string
		upload?: boolean
		scalePosition?: "top" | "center" | "bottom"
	}>(),
	{
		urlPrefix: "",
		fallback: "type-1",
		upload: true,
		scalePosition: "bottom",
		preview: ""
	}
)

const emit = defineEmits<{
	"update:preview": [image: string | File]
}>()

const fileInput = ref<HTMLInputElement | null>(null)

const onPickImage = async (e: Event) => {
	const target = e.target as HTMLInputElement

	const fileReader = new FileReader()
	const file = target.files?.length ? target.files[0] : null

	fileReader.readAsDataURL(file as File)
	fileReader.onload = function () {
		emit("update:preview", file as File)
	}
}

const openPreviewInNewTab = (src: string) => {
	const image = new Image()
	image.src = src

	const w = window.open("")
	w?.document.write(image.outerHTML)
}
</script>

<template>
	<div class="preview">
		<div class="preview__photo">
			<n-image v-if="preview" :src="urlPrefix + preview" />
			<div v-else-if="fallback === 'type-1'" class="preview__placeholder">
				<MediaContentIcon />
			</div>
			<MediaContentIcon2 v-else />

			<a v-if="preview" @click="openPreviewInNewTab(urlPrefix + preview)" :class="['preview__scale', scalePosition || '']">
				<ScaleIcon />
			</a>
		</div>
		<div class="preview__info">
			<div class="preview__title">
				{{ title }}
				<div v-if="'default' in $slots">
					<slot />
				</div>
			</div>
			<div class="preview__upload" v-if="upload && false">
				<input ref="fileInput" type="file" id="passport" accept="image/*" hidden @change="onPickImage" />
				<n-button @click="() => fileInput?.click()" class="preview__upload" text size="small" type="primary"
					>{{ preview ? "Загрузить новый" : "Загрузить" }}
				</n-button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.preview {
	width: 14rem;

	&__photo {
		@include flex(0, row, center, center);

		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23CCCCCCFF' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='76' stroke-linecap='round'/%3e%3c/svg%3e");
		border-radius: 12px;
		margin-bottom: 1.3rem;
		position: relative;
		padding: 2rem;
		width: 14rem;
		height: 14rem;
		border-radius: 1.2rem;
		transition: all 0.3s var(--n-bezier);

		:deep(.n-image) {
			img {
				object-fit: contain !important;
				width: 100%;
			}
		}
	}

	&__placeholder {
		@include flex(0, row, center, center);
		position: absolute;
		height: 7.2rem;
		width: 7.2rem;
		border-radius: 0.8rem;
		background: var(--grey-50);
	}

	&__scale {
		@include flex(_, center, center);
		cursor: pointer;
		position: absolute;
		bottom: 5px;
		right: 5px;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50px;
		border: 0.5px solid var(--grey-100, #e5e5e5);
		background: #fff;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

		&:active {
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0);
		}

		&.top {
			bottom: unset;
			right: unset;
			top: 5px;
			left: 5px;
		}

		&.center {
			bottom: unset;
			right: unset;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&__info {
		@include flex(0.8rem, column, center, center);
	}

	&__title {
		@include font("t12");

		width: 100%;
		text-align: center;
		color: var(--text-primary);
	}

	&__upload {
		width: 100%;
		text-align: center;
		line-height: 1;
	}
}
</style>
