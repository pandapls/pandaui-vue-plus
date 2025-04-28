# 说明

doucument - 文档目录
packages - 组件库代码目录
component - 具体的组件库代码
theme-chalk - 组件样式
utils - 工具函数

```shell
## 安装子包依赖
pnpm --filter xxx install
```

# 测试相关

- vitest 框架
- jsdom 模拟浏览器环境
- @vitejs/plugin-vue vite提供对vue的支持 通过该插件能够处理当文件类型的vue组件
- @vue/test-utils vue官方提供的库 提供了各种api用于做单元测试
