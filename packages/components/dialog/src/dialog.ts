import type { ExtractPropTypes } from 'vue';

export const dialogProps = {
	title: {
		type: String,
		default: '提示',
	},

	width: {
		type: String,
		default: '50%',
	},
	top: {
		type: String,
		default: '15vh',
	},
	visible: {
		type: Boolean,
		default: false,
	},
} as const;

export type DialogProps = ExtractPropTypes<typeof dialogProps>;
