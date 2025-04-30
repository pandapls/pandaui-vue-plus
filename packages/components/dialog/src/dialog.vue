<template>
	<transition name="dialog-fade">
		<!-- 控制对话框是否显示，根据外部所传递的 visible 这个 prop -->
		<div v-show="visible" class="pandaui-dialog_wrapper">
			<!-- 控制对话框的宽度以及上面的距离 -->
			<div class="pandaui-dialog" :style="{ width: width, marginTop: top }">
				<!-- 头部 -->
				<div class="pandaui-dialog_header">
					<slot name="title">
						<span class="pandaui-dialog_title">{{ title }}</span>
					</slot>
					<!-- 关闭按钮 -->
					<button class="pandaui-dialog_headerbtn" @click="clickHandle">
						<i class="pandaui-icon-close"></i>
					</button>
				</div>
				<!-- 中间内容部分 -->
				<div class="pandaui-dialog_body">
					<slot></slot>
				</div>
				<!-- 底部部分 -->
				<div class="pandaui-dialog_footer">
					<slot v-if="$slots.footer" name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { dialogProps } from './dialog';

export default defineComponent({
    name:'pandaDialog',
    props:dialogProps,
    emits: ['close'],
    setup(_,{emit}) {
        function clickHandle() {
            emit('close');
        }

        return {
            clickHandle,
        }
    }
})
</script>

<style lang="scss" scoped></style>
