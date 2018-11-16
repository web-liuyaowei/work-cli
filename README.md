# work-cli
  - 1、记录自己搭建的脚手架 避免重复搭建
  - 2、记录遇到的一些问题，并持续优化
  
## description  
```
项目搭建  vue-router + babel + less + eslint(perttier)
配合 vscode 编辑器格式化

用户设置的配置
{
  // 由于prettier不能格式化vue文件template 所以使用js-beautify-html格式化
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned" //属性 强制折行对齐
    }
  },
  // eslint校验哪些语言
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "html",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 编辑器字体大小
  "editor.fontSize": 16,
  // 不让文件自动保存
  "files.autoSave": "off",
  "eslint.options": {
    "useEslintrc": true
  },
  "prettier.disableLanguages": [
    "vue",
    "js",
    "html"
  ],
  // tab 为多少个空格
  "editor.tabSize": 2,
  // 不让vscode 自动更新
  "update.channel": "none",
  // 编辑器 将在视区宽度处换行
  "editor.wordWrap": "on"
}
```

## Project setup
```





npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
