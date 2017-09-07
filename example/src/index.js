
import * as mzui from '../../lib/bundle';
import popInput from '../../lib/popupInput';
import addressPicker from '../../lib/addressPicker';
import selectList from '../../lib/selectList';
import header from '../../lib/header';
import page from '../../lib/page';

import   '../../lib/commonCss/style.css';
import   '../../lib/bundle/style.css';
import   '../../lib/popupInput/style.css';
import   '../../lib/addressPicker/style.css';
import   '../../lib/selectList/style.css';
import   '../../lib/header/style.css';
import   '../../lib/page/style.css';

mzui.popupInput = popInput;
mzui.addressPicker = addressPicker;
mzui.selectList = selectList;
mzui.header = header;
mzui.page = page;

window.onload=function(){
  
// var ActionSheet = mzui.actionSheet.default;
var ui = mzui;

debugger;

//由于下面是script引入的，所以要注意
// ui.addressPicker=mzui.addressPicker.default;
// ui.popupInput=mzui.popupInput.default;
// ui.selectList=mzui.selectList.default;
// ui.page=mzui.page.default;
// ui.header=mzui.header.default;

var app = new Vue({
    el: '#app',
    data:{
    	 nav: {
          leftTitle: "",
          rightTitle: "",
          title: "标题栏3",
          leftBtn: "back",
          rightBtn: "service",
        },
        nnViewSwitch: {
          curPage: "loading",
          all: false,
          nav: false,
          content: false,
          loading: true,
          navmask:0,
          index: false, //默认的首页都叫index
          selectList:false,
        },

    	inputPhone:"",
    	isLoading:true,
    	isDisabled:true,
    	companyList:[{
                    "dataTypeCode": "rsbd_company",
                    "dataTypeName": "车险保单公司",
                    "dataCode": "picc",
                    "dataValue": "这个是公司名称1！",
                }, {
                    "dataTypeCode": "rsbd_company",
                    "dataTypeName": "车险保单公司",
                    "dataCode": "taiping",
                    "dataValue": "这个是公司名称2！",
                }],
      popupInput:{
      	show:false,
      	imgsrc:"data:image/png;base64,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"
      }
    },
    mounted:function(){
        var self=this;
        setTimeout(function(){
          self.$refs.mainPage.openPage();
          self.nnViewSwitch.loading=false;
          self.nnViewSwitch.index=true;
        },1);
      },
    methods:{
    	navLeftBtn:function(e){
    		if(this.nnViewSwitch.selectList===true){
    			this.nnViewSwitch.selectList=false;
    		}
    	},
    	navRightBtn:function(e){

    	},
    	btnPopupInput:function(e){
    		this.popupInput.show=true;
    	},
    	btnPopupInputOk:function(e){
    		this.popupInput.show=false;
    	},
    	btnPopupInputClose:function(e){
    		this.popupInput.show=false;
    	},
    	btnPopupInputImg:function(e){

    	},
    	btnSelectList:function(e){
    		this.nnViewSwitch.selectList=true;
    	},
    	btnSelectListItem: function(index) {

          alert(index);
          this.nnViewSwitch.selectList=false;
      },
    	btnToast:function(e){
    		var type=e.currentTarget.getAttribute('data-type');
    		switch(type){
    			case 'info':{ui.toast.info('this is info');}break;
    			case 'success':{ui.toast.success('this is success');}break;
    			case 'error':{ui.toast.error('this is error');}break;
    		}
    		
    	},
    	btnLoading:function(e){
    		ui.loading.show({       //显示loading
					text: '正在加载',
					className: ''    
				}, 'log信息');
				setTimeout(function(){
					ui.loading.hide();
				},2000);
    	},
    	btnMask:function(e){
    		var type=e.currentTarget.getAttribute('data-type');
    		if(type==="normal"){
	    		ui.mask.show(true);
	    	}else{
	    		ui.mask.show(false);
	    	}
    		setTimeout(function(){
					ui.mask.hide();
				},2000);
    	},
    	btnMessageBox:function(e){

    		var type=e.currentTarget.getAttribute('data-type');
    		switch(type){
    			case 'alert':{ui.messageBox.alert("info");}break;
    			case 'confirm':{
    				ui.messageBox.confirm({
    					title:'温馨提示',
							showTitle:false,
							message:'hello</br>换行',
							btnOk:function(){
								alert('it is my btnOk');
							},
    				});
    			}break;
    		}
    	},
    	btnAddressPicker:function(e){
    		ui.addressPicker.show({
		      title:'自定义',
		      btnCancel:function(provice,city){
		         // alert("provice是"+provice+"   city是"+city);
		      },
		       btnSure:function(provice,city){
		         // alert("provice是"+provice+"   city是"+city);
		      }
		    });
    	},
    	btnActionSheet:function(e){
    		ui.actionSheet.show({
			    title:'信息还未提交,真的要离开',
			    cancelText:'再想想',
			    actions:[
			    {
			      text:'操作1',
			      action:function(){
			        alert('操作1');
			      },
			    },
			    {
			      text:'操作2',
			      action:function(){
			        alert('操作2');
			      }
			    }
			    ]
			   });
    	}
    },
    components:{
      mzButton:ui.button,
      mzCell:ui.cell,
      mzInput:ui.input,
      mzSelectList:ui.selectList,
      mzPopupInput:ui.popupInput,
      mzPage:ui.page
    },
  });
};