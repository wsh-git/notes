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



# vi

```
vi 打开指定文件
默认是命令模式
'i' 进入插入模式
编辑文本内容
': q'不保存文件修改，直接退出编辑模式
': wq'保存文件修改，退出编辑模式
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

