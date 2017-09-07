


## 环境要求
* node:v7.4.0


## 编码调试

* 终端执行：sh dev.sh

## 打包发布

* sh package.sh
* npm version patch
* npm publish

## 安装使用
* npm install vue-mzui -D



## 使用方法

#### script标签引入

##### 以input组件为例
* 引入：首先引用组件文件js和css样式，以及公共样式库commonCss.css
```
<link rel="stylesheet" type="text/css" href="node_modules/mzui/dist/css/commonCss.css">
<link href="node_modules/mzui/dist/css/input.css" rel="stylesheet">
<script type="text/javascript" src="node_modules/mzui/dist/js/input.js"></script>
```
* 初始化
```
//html
<mz-input></mz-input>

//js
new Vue({
  el:"#app",
  components:{
      mzInput: mzui.input.default,//注意这里单组件的形式引入和集合包引入编码是不一样的
  },
 });
```
#####
 以bundle集合包为例

* 引入：首先引用组件文件js和css样式，以及公共样式库commonCss.css
```
<link rel="stylesheet" type="text/css" href="node_modules/mzui/dist/css/commonCss.css">
<link href="node_modules/mzui/dist/css/bundle.css" rel="stylesheet">
<script type="text/javascript" src="node_modules/mzui/dist/js/bundle.js"></script>
```
* 初始化
```
//html
<mz-input></mz-input>

//js
new Vue({
  el:"#app",
  components:{
      mzInput: mzui.bundl
      e.input, //注意这里单组件的形式引入和集合包引入编码是不一样的
  },
 });

```


#### import引入
#### .babelrc文件内增加插件配置

```
{
  "plugins": [
      [ "component", 
        [
          { "libraryName": "vue-mzui", "style": true }
        ]
      ]
    ],
}
```

##### 以input组件为例
* 引入：首先引用组件文件js和css样式，以及公共样式库commonCss.css
```
//index.js
  import 'vue-mzui/lib/commonCss/style.css';//引用公共样式文件
  import {input} from 'vue-mzui';
```
* 初始化
```
//index.html
<mz-input></mz-input>

//index.js
new Vue({
  el:"#app",
  components:{
      mzInput: input,//注意这里单组件的形式引入和集合包引入编码是不一样的
  },
 });
```
#####
 以bundle集合包为例

* 引入：首先引用组件文件js和css样式，以及公共样式库commonCss.css
```
//index.js
  import 'vue-mzui/lib/commonCss/style.css';//引用公共样式文件
  import {bundle} from 'vue-mzui';
```
* 初始化
```
//index.html
<mz-input></mz-input>

//index.js
new Vue({
  el:"#app",
  components:{
      mzInput: bundle.input,//注意这里单组件的形式引入和集合包引入编码是不一样的
  },
 });
```




