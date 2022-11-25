# npm

## 查看模块

## 安装模块

```
npm install xxx; --安装指定的模块
npm install -g xxx; --全局安装指定的模块
```

## 移除模块

```
npm uninstall xxx;
```

# Question

```
Warning: To load an ES module, set “type“: “module“ in the package.json or use the .mjs extension.
```

解决方案：

修改项目目录下的 package.json 文件：(如果没有 package.json 的话，在项目目录下使用命令 `npm init`)

```json
xxx
"main": "main.js",
"type": "module", // 增加项
"dependencies": {
    xxx
}
xxx
```

