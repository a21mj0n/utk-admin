<template>
    <button class="link" v-if="type === 'button'">
        <slot />
    </button>
    <RouterLink v-else :to="to" class="link" v-bind="$attrs">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, RouterLinkProps } from 'vue-router';

type LinkType = 'link' | 'button';

defineEmits(['click']);

defineProps<{
    to: RouterLinkProps['to'],
    type?: LinkType
}>()
</script>

<style lang="scss" scoped>
.link {
		background: none;
		border: none;
		text-align: left;
    color: var(--brand-primary-500);
    @include font("t12");
}
</style>