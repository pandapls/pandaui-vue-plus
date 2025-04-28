// 定义button的prop属性
// 将props 定义为button的类型
// ExtractPropTypes 是vue3提供的一个工具类型 用于从vue组件的props对象中提取类型
import type { ExtractPropTypes, PropType } from 'vue';

// 定义按钮类型
export type ButtonType =
	| 'default'
	| 'primary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'text';

// 定义按钮尺寸
export type ButtonSize = 'large' | 'medium' | 'small' | 'mini';

export const buttonProps = {
	type: {
		type: String as PropType<ButtonType>,
		default: 'default',
	},
	plain: {
		type: Boolean,
		default: false,
	},
	round: {
		type: Boolean,
		default: false,
	},
	circle: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: String,
		default: '',
	},
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

// 定义事件类型
export const buttonEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type ButtonEmits = typeof buttonEmits;
