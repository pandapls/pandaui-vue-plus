<template>
	<div class="pandaui-card" :style="width ? {width: width + 'px'}: {}">
		<!-- 卡片图片 -->
		<div
			class="pandaui-card-img"
			:style="imgHeight ? {height : imgHeight + 'px'} : {}"
		>
			<img :src="imgSrc" alt="img" />
		</div>
		<!-- 1. 通过 props 传递过来 -->
		<!-- 2. 通过 slot 插槽来设置 -->
		<div v-if="summary" class="pandaui-card-summary">
			{{ summary }}
		</div>
		<div v-else class="pandaui-card-summary">
			<slot></slot>
		</div>
		<!-- 卡片的 footer -->
		<div class="pandaui-card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cardProps } from './card';

export default defineComponent({
    name: 'pandaCard',
    props: cardProps,
    setup() {
        return{}
    }
})
</script>

<style lang="scss" scoped></style>
