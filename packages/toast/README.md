# mz-vue-toast

```Javascript
// 1.全局引用
import 'mzUI' from 'mz-ui';
mzUI.Toast.info('test')

// 2.实例引用
xxx.$toast.info('test')

// 3.参数为对象
mzUI.Toast.info({
  message: 'test',
  duration: 20000,
  className: 'my-toast',
  type: 'alert',
    btnClose:function () {//关闭按钮回调函数
          alert('btnClose')
        }
     maskClose:"1",//点击阴影部分是够关闭
     btnMaskClose:function () {//点击阴影部分关闭回调（仅在maskClose为1的时候有效）
      alert('handleMaskClose')
     }
})

```


# API
| Option               | Description                           | Type                  | value    | default  |
|-----------           |---------------------------------------|-----------------------|----------|----------|
| message              | message of the toast                  |  String             |    支持html标签     |          |
| duration             | 显示时间                               |  Number               |          | 3000     |
| type                 | toast图标类型                   |  String                     |  info/success|
| className            | 自定义类名                              |  String              |           |
| position             | toast位置                              |  String           |   "middle/top" | 'middle'|


# License
MIT

