// 从vite里面引入 defineConfig 该方法用于定义vite配置
import { defineConfig } from 'vite';
// 让vite支持对vue的处理
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
