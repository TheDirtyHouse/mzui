# mz-vue-actionSheet


```Javascript
AddressPicker.show({
      title:'自定义',
      btnCancel:function(provice,city){
         // alert("provice是"+provice+"   city是"+city);
      },
       btnSure:function(provice,city){
         // alert("provice是"+provice+"   city是"+city);
      }
    });

```

# API
| Option      | Description                                | Value                       | Default  |
|-----------  |--------------------------------------------|-----------------------------|----------|
| title       | 标题                                        |                             |          |
| cancelText  | 取消按钮的文字                                |  “取消”                      |          |
| suerText    | 确认按钮的文字                                |   ”确认“                     |          |
| className   | 最外DIV的class                               |                             |          |
| btnCancel   | 关闭回调事件                                 | 关闭弹框，带上provice和city对象 |          |
| suerText    | 确认回调事件                                 | 关闭弹框，带上provice和city对象 |          |

# License
MIT