<script setup lang="ts">
import { NButton, NIcon } from "naive-ui"
import { ref } from "vue"
import { ToolbarLeftIcon, ToolbarRightIcon, ZoomInIcon, ZoomOutIcon, ToolbarHomeIcon } from "../icons/svg"
import { onMounted } from "vue"

const screenZoomPercent = ref<number>(100)

const onZoom = (value: number) => {
	screenZoomPercent.value = screenZoomPercent.value + value
	document.body.style.zoom = `${screenZoomPercent.value}%`
	sessionStorage.setItem("screenZoomPercent", String(screenZoomPercent.value))
}

onMounted(() => {
	screenZoomPercent.value = sessionStorage.getItem("screenZoomPercent") ? Number(sessionStorage.getItem("screenZoomPercent")) : 100
	document.body.style.zoom = `${screenZoomPercent.value}%`
})
</script>

<template>
	<div class="main-toolbar">
		<n-button size="small" @click="$router.go(-1)" tertiary type="primary">
			<template #icon>
				<n-icon>
					<ToolbarLeftIcon />
				</n-icon>
			</template>
		</n-button>

		<n-button size="small" @click="$router.go(+1)" tertiary type="primary">
			<template #icon>
				<n-icon> <ToolbarRightIcon /></n-icon>
			</template>
		</n-button>

		<div class="main-toolbar__home">
			<n-button size="small" @click="$router.push('/')" tertiary type="primary">
				<template #icon>
					<n-icon> <ToolbarHomeIcon /></n-icon>
				</template>
			</n-button>
		</div>

		<n-button size="small" @click="onZoom(10)" tertiary type="primary">
			<template #icon>
				<n-icon>
					<ZoomInIcon />
				</n-icon>
			</template>
		</n-button>

		<n-button size="small" @click="onZoom(-10)" tertiary type="primary">
			<template #icon>
				<n-icon>
					<ZoomOutIcon />
				</n-icon>
			</template>
		</n-button>
	</div>
</template>

<style scoped lang="scss">
.main-toolbar {
	display: flex;
	gap: 0.8rem;
	width: 24rem;
	position: fixed;
	left: 50%;
	right: 50%;
	bottom: 0.2rem;
	transform: translate(-50%, -50%);
	justify-content: space-between;
	padding: 0.8rem 1.2rem;
	background: map-get($colors, "static-white");
	border-radius: 1.2rem;
	transition: all 300ms ease-in;
	box-shadow: 0px 4px 16px 0px #0000000d;
	box-shadow: 0px 4px 10px 0px #0000001f;

	&__show {
		justify-content: space-between;
		min-width: 40rem;
		max-width: 50rem;
		transition: all 300ms ease-in;
	}

	&__home {
		padding: 0 1rem;
		border-right: 1px solid map-get($colors, "grey-100");
		border-left: 1px solid map-get($colors, "grey-100");
	}
}

.n-button {
	font-weight: 700;
	color: map-get($colors, "static-black");
	border-radius: 0.4rem;
	padding: 0;
	height: 2.8rem;
	width: 2.8rem;
}

.n-icon {
	height: 100%;
	width: 100%;
	font-weight: 700;
	svg {
		width: 100%;
		height: 100%;
	}
}
</style>
