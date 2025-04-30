import type { ExtractPropTypes } from 'vue';

const paginationProps = {
	// 总页码数
	total: {
		type: Number,
		default: 0,
	},
	// 当前页码数
	currentPage: {
		type: Number,
		default: 1,
	},
	// 页码最大能够显示的数量
	pagerCount: {
		type: Number,
		default: 10,
	},
} as const;

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;

export default paginationProps;
