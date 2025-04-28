// 该文件会导出一个工具方法，该方法用于组件的安装
import type { App, Component } from 'vue';

// 定义组件安装类型
export type SFCWithInstall<T extends Component> = T & {
	install(app: App): void
};

// 改进组件安装函数，添加泛型约束和明确返回类型
export const withInstall = <T extends Component>(component: T): SFCWithInstall<T> => {
	// 添加install方法
	(component as SFCWithInstall<T>).install = (app: App): void => {
		const name = (component as any).name;
		// 确保组件名称正确转换为kebab-case
		const kebabName = name
			.replace(/([A-Z])/g, '-$1')
			.toLowerCase()
			.replace(/^-/, '');
		// 注册组件
		app.component(kebabName, component);
	};

	return component as SFCWithInstall<T>;
};

// withInstall use eg: withInstall(Mycomponent) - app.use(Mycomponent)
