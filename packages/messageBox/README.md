# mz-vue-messageBox

 1:Messagebox.alert("info");
 2:Messagebox.alert({
  title:'温馨提示',
  message:'hello',
 });
 3:Messagebox.confirm({
  title:'温馨提示',
  showTitle:false,
  message:'hello</br>换行',
  btnOk:function(){
    alert('it is my btnOk');
  },

 });
```


# API
| Option               | Description                           | Value                 | Default  |
|-----------           |---------------------------------------|-----------------------|----------|
| title                | title of the messagebox               |                       |          |
| showTitle            | 是否显示标题                            |  true or false        |  true
| confirmButtonText    | 确认按钮文字                            |             string    |   "确定 "
| cancelButtonText     | 取消按钮文字                            |             string    |   "取消 " |
| showDelete           | 是否显示关闭按钮                         |  true or false        |  false   |
| showCancelButton     | 是否显示取消按钮（alert的时候自动关闭）    |true or false           |true      |
| showConfirmButton    | 是否显示确认按钮                         |        true or false  |true       |
| btnOk                | 确认按钮的回调函数                      |            function    |关闭messagebox   |
| btnCancel            | 取消按钮的回调函数                       |            function   |关闭messagebox   |




# License
MIT