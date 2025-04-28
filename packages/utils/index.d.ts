declare module '@pandaui-vue-plus/utils' {
	import type { App, Component } from 'vue';

	// 定义组件安装类型
	export type SFCWithInstall<T extends Component> = T & {
		install(app: App): void
	};

	// 声明withInstall函数类型
	export function withInstall<T extends Component>(component: T): SFCWithInstall<T>;
}
