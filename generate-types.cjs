// 该文件的目的生成类型文件的入口文件

const fs = require("fs");
const path = require("path");

// 定义组件和类型文件的目录路径
const componentsDir = path.resolve(__dirname, "dist", "components", "packages", "components");


// 类型声明入口文件位置
const typesFile = path.resolve(__dirname, "dist", "components", "types.d.ts");

// 获取组件目录下所有的子目录
const components = fs.readdirSync(componentsDir);
// 定义最终写入到types.d.ts的内容

let typesContent = 'import { Plugin } from "vue";\n\n';
typesContent += "declare const pandaui: Plugin; \n";
typesContent += "export default pandaui; \n\n";


typesContent += components
    .map((component) => `export * from './packages/components/${component}'`)
    .join("\n");

fs.writeFileSync(typesFile, typesContent);

console.log("类型声明文件的入口文件已经生成完毕...");
