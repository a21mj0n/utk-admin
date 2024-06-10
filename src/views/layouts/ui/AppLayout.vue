<script lang="ts" setup></script>

<template>
	<Component :is="$route.meta.layoutComponent">
		<slot />
	</Component>
</template>
