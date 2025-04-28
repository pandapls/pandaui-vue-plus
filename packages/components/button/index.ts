import Button from './src/button.vue';
import { withInstall } from '@pandaui-vue-plus/utils';
// 导出类型定义
export * from './src/button';

// 使用withInstall包装组件
export const PandaButton = withInstall(Button);

// 默认导出包装后的组件
export default PandaButton;
