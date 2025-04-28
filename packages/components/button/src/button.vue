<template>
	<div
		class="pandaui-button"
		:class="[
            `pandaui-button-${type}`,
            {
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
                'is-disabled': disabled,
            }
        ]"
		:disabled="disabled"
		@click="clickHandle"
	>
		<i v-if="icon" :class="`pandaui-icon-${icon}`"></i>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps, buttonEmits } from './button';

export default defineComponent({
    name: 'pandaButton',
    props: buttonProps,
    emits: buttonEmits,
    setup(props, { emit }) {
        function clickHandle(e: MouseEvent) {
            if (props.disabled) return;
            emit("click", e)
        }
        return {
            clickHandle
        }
    }
})
</script>

<style scoped></style>
