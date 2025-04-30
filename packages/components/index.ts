import Button from './button/src/button.vue';
import Card from './card/src/card.vue';
import Dialog from './dialog/src/dialog.vue';

import type { App, Plugin } from 'vue';

// 统一给所有组件添加上 install
// 之后在其他项目中使用的时候，就可以一次性导入所有的组件

const components = [Button, Card, Dialog];

const install = (app: App) => {
	components.forEach((component) => {
		app.component((component as any).name, component);
	});
};

const Pandaui: Plugin = {
	install,
};

export default Pandaui;
