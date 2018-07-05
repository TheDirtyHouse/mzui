<template>
    <transition name="fade">
        <div id="mzui-picker" v-show="isShow">
            <div id="mzui-picker-screen-mask"></div>
            <hgroup style="position: absolute;bottom:0;left:0;width:100%;">
                <div id="mzui-picker-header" class="flex-row flex-corss-center flex-main-between">
                    <div style="min-width:6rem" @click="btnCancel">{{txtCancel||"取消"}}</div>
                    <span>{{title||""}}</span>
                    <div style="min-width:6rem;text-align: right" @click="btnOk">{{txtOk||"确认"}}</div>
                </div>
                <div id="mzui-picker-body">
                    <div id="mzui-picker-data" style="overflow: hidden;">
                        <div id="mzuiPickerDataList" class="flex-col flex-center" style="">
                            <p v-for="item in listData">{{item.text}}</p>
                        </div>
                    </div>
                    <div id="mzui-picker-mask" class="flex-col flex-center">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </hgroup>
        </div>
    </transition>
</template>
<script>
let finger = {
    sy: 0, //按下触摸的时候的Y轴值
    start_time: 0, //按下触摸时候的时间
    cy: 0, //当前触摸移动的Y轴值
    lastTime: 0, //释放触摸时候的时间
    curDomY: 0, //当前dom的Y轴值
    state: "", //触摸状态"down"和"end"
};
const ItemHeight = 45; //每一个选项占用的DIV高度

module.exports = {
    name: 'mz-picker',
    data() {
        return {
            listData: [],
            domList: null,
            selectIndex: -1,
            isShow: false,
            callback_btnOk: null,
            callback_btnCancel: null,
            title: "",
            txtCancel: "",
            txtOk: "",
        }
    },
    props: {},
    computed: {},
    mounted() {},
    beforeDestroy() {
        this.close();
    },
    methods: {
        close: function() {
            let dom = this.domList;
            if (!dom) return;
            if ("ontouchstart" in window) {
                dom.removeEventListener('touchstart', this.touchStart)
                dom.removeEventListener('touchmove', this.touchMove)
                dom.removeEventListener('touchend', this.touchEnd)
            } else {
                dom.removeEventListener('mousedown', this.touchStart)
                dom.removeEventListener('mousemove', this.touchMove)
                dom.removeEventListener('mouseup', this.touchEnd)
                dom.removeEventListener('mouseout', this.touchEnd)
            }
            this.isShow = false;
        },
        setListData: function(list) {
            if (list) {
                this.listData = [];
                if (typeof list[0] === "string") {
                    for (let i = 0; i < list.length; i++) {
                        this.listData.push({ text: list[i] });
                    }
                } else {
                    this.listData = list;
                }
            }
        },
        show: function(options) {

            if (options.list) {
                this.setListData(options.list);
            }
            if (options.btnOk) this.callback_btnOk = options.btnOk;
            if (options.btnCancel) this.callback_btnCancel = options.btnCancel;
            if (options.txtOk) this.txtOk = options.txtOk;
            if (options.txtCancel) this.txtCancel = options.txtCancel;
            if (options.title) this.title = options.title;

            finger.max_y = -(this.listData.length - 1) * ItemHeight;
            finger.min_y = 0;

            if (!this.domList) this.domList = document.getElementById('mzuiPickerDataList');

            if ("ontouchstart" in window) {
                this.domList.addEventListener('touchstart', this.touchStart)
                this.domList.addEventListener('touchmove', this.touchMove)
                this.domList.addEventListener('touchend', this.touchEnd)
            } else {
                this.domList.addEventListener('mousedown', this.touchStart)
                this.domList.addEventListener('mousemove', this.touchMove)
                this.domList.addEventListener('mouseup', this.touchEnd)
                this.domList.addEventListener('mouseout', this.touchEnd)
            }

            this.isShow = true;
            if (options.index) {
                this.toIndex(options.index);
            } else {
                this.toIndex(0);
            }
        },
        btnCancel: function(e) {
            this.close();
            if (this.callback_btnCancel) {
                this.callback_btnCancel(this.selectIndex, this.listData[this.selectIndex]);
                this.callback_btnCancel = null;
            }
        },
        btnOk: function(e) {
            this.close();
            if (this.callback_btnOk) {
                this.callback_btnOk(this.selectIndex, this.listData[this.selectIndex]);
                this.callback_btnOk = null;
            }
        },
        touchStart: function(e) {
            let temp = e;
            if (e.changedTouches) temp = e.changedTouches[0];

            let self = this;
            finger.state = 'down';
            finger.sy = temp.pageY;
            finger.start_time = e.timestamp || Date.now();
            e.preventDefault();
        },
        touchMove: function(e) {
            let temp = e;
            if (e.changedTouches) temp = e.changedTouches[0];
            if (finger.state !== 'down') return;
            finger.cy = temp.pageY;
            finger.last_time = e.timestamp || Date.now();
            this.update();
            e.preventDefault();
        },
        touchEnd: function(e) {
            let temp = e;
            if (e.changedTouches) temp = e.changedTouches[0];
            if (finger.state !== "down") return;
            finger.state = "up";
            finger.cy = temp.pageY;
            finger.last_time = e.timestamp || Date.now();

            this.update('end');
            e.preventDefault();
        },
        toIndex: function(index) {
            index = index < 0 ? 0 : index;
            index = index >= this.listData.length ? this.listData.length - 1 : index;
            let domList = this.domList;
            let y = -(index * ItemHeight);
            finger.curDomY = y;
            domList.style.webkitTransition = ``;
            domList.style.webkitTransform = `translateY(${y}px)`;
            this.selectIndex = Math.abs(index);
        },
        update: function(type) {
            let domList = this.domList;
            let now = Date.now();
            let y = finger.curDomY + (finger.cy - finger.sy);

            let power_move = Math.abs(finger.cy - finger.sy) / (finger.last_time - finger.start_time) * 60; //惯性缓动
            let toward = -1; //1:手指向上，-1:手指向下

            //手指向上滑动
            if (finger.cy < finger.sy) {
                toward = 1;
                power_move = -power_move;
            }

            //如果是touch结束，则保存最后坐标值，并且启动缓动效果
            if (type && type === 'end') {
                finger.start_time = finger.lastTime = finger.cy = finger.sy = 0;
                y += power_move;
                if (y % ItemHeight != 0) {
                    if (y < 0) {
                        y = parseInt(y / ItemHeight - toward) * ItemHeight;
                    } else {
                        y = parseInt(y / ItemHeight + toward) * ItemHeight;
                    }
                }
                domList.style.webkitTransition = `transform 1000ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                domList.style.webkitTransition = '';
            }

            y = y > finger.min_y ? finger.min_y : y;
            y = y < finger.max_y ? finger.max_y : y;

            if (type && type === 'end') {
                finger.curDomY = y;
                this.selectIndex = Math.abs(finger.curDomY / ItemHeight);
            }
            domList.style.webkitTransform = `translateY(${y}px)`;
        }

    }
}
</script>
<style scoped lang="scss">
$pickerHeight:180;
$itemHeight:45;
$maskHeight:(180-45)/2;

#mzui-picker {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 145;
}

#mzui-picker-screen-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: -1;
}

#mzui-picker-header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    padding: 0 16px;
    background: white;
}

#mzui-picker-body {
    background: #f5f5f5;
    width: 100%;
    height: $pickerHeight+px;
}

#mzui-picker-data {
    width: 100%;
    height: 100%;
    -webkit-mask: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #fff 40%, #fff 60%, rgba(0, 0, 0, 0) 100%);
    div p {
        line-height: $itemHeight+px;
    }
}

#mzui-picker-mask {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    div {
        width: 100%;
        height: $maskHeight+px;
    }
    div:nth-child(2) {
        height: $itemHeight+px;
        opacity: 1;
        border: 1px solid rgba(204, 204, 204, .5);
        border-left: 0;
        border-right: 0;
    }
}

#mzuiPickerDataList {
    padding-top: $maskHeight+px;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;

    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}


.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: all .3s;
}
</style>