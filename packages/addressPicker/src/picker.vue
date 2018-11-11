<template>
  <div class="pd-select-item">
      <div class="pd-select-line"></div>
      <div class="pd-select-list">
        <ul class="pd-select-ul" ref="list">
          <li class="pd-select-list-item" v-for="(el,index) in renderData " :class="{'hidden':setHidden(el.index)}" :key="index">{{el.value}}</li>
        </ul>
      </div>
      <ul class="pd-select-wheel" ref="wheel">
        <li class="pd-select-wheel-item" :class="{'hidden':setHidden(el.index)}" :style="setWheelItemDeg(el.index)" :index="el.index" v-for="(el,index) in renderData " :key="index">{{el.value}}</li>
      </ul>
  </div>
</template>
<script>
module.exports = {
  name: 'picker',
  data() {
    return {
      spin: { start: -9, end: 9, branch: 9 },
      finger: { startY: 0, lastY: 0, startTime: 0, lastTime: 0, transformY: 0 }
    };
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'line'
    },
    value: {}
  },
  computed: {
    renderData() {
      let temp = [];
      for (let k = this.spin.start; k <= this.spin.end; k++) {
        let data = {
          value: this.getSpinData(k) && this.getSpinData(k).areaName,
          index: k
        };
        temp.push(data);
      }
      return temp;
    }
  },
  watch: {
    listData: function(val, oldVal) {
      if (val && val != oldVal) {
        this.updateSpin(0);
        this.setWheelDeg(0, 'end', 0);
        this.setListTransform();
        this.getPickValue(0);
      }
    }
  },
  mounted() {
    /* 事件绑定 */
    this.$el.addEventListener('touchstart', this.itemTouchStart);
    this.$el.addEventListener('touchmove', this.itemTouchMove);
    this.$el.addEventListener('touchend', this.itemTouchEnd);
    /* 初始化状态 */
    let index = this.listData.indexOf(this.value);
    if (index === -1) {
      console.warn('当前初始值不存在，请检查后listData范围！！');
      this.setListTransform();
      this.getPickValue(0);
    } else {
      let move = index * 43;
      /* 因为往上滑动所以是负 */
      this.setStyle(-move);
      this.setListTransform(-move, -move);
    }
  },
  methods: {
    /* 根据type 控制滚轮显示效果 */
    setHidden(index) {
      if (this.type === 'line') {
        return index < 0 || index > this.listData.length - 1;
      } else {
        return false;
      }
    },
    setWheelItemDeg(index) {
      return {
        transform: `rotate3d(1, 0, 0, ${(-index * 20) %
          360}deg) translate3d(0px, 0px, 100px)`
      };
    },
    setWheelDeg(updateDeg, type, time = 1000) {
      if (type === 'end') {
        this.$refs.wheel.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        this.$refs.wheel.style.webkitTransform = `rotate3d(1, 0, 0, ${updateDeg}deg)`;
      } else {
        this.$refs.wheel.style.webkitTransition = '';
        this.$refs.wheel.style.webkitTransform = `rotate3d(1, 0, 0, ${updateDeg}deg)`;
      }
    },
    setListTransform(translateY = 0, marginTop = 0, type, time = 1000) {
      if (type === 'end') {
        this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        this.$refs.list.style.webkitTransform = `translateY(${translateY -
          this.spin.branch * 43}px)`;
        this.$refs.list.style.marginTop = `${-marginTop}px`;
        this.$refs.list.setAttribute('scroll', translateY);
      } else {
        this.$refs.list.style.webkitTransition = '';
        this.$refs.list.style.webkitTransform = `translateY(${translateY -
          this.spin.branch * 43}px)`;
        this.$refs.list.style.marginTop = `${-marginTop}px`;
        this.$refs.list.setAttribute('scroll', translateY);
      }
    },
    itemTouchStart(event) {
      let finger = event.changedTouches[0];
      this.finger.startY = finger.pageY;
      this.finger.startTime = event.timestamp || Date.now();
      this.finger.transformY = this.$refs.list.getAttribute('scroll');
      event.preventDefault();
    },
    itemTouchMove(event) {
      let finger = event.changedTouches[0];
      this.finger.lastY = finger.pageY;
      this.finger.lastTime = event.timestamp || Date.now();
      /* 设置css */
      let move = this.finger.lastY - this.finger.startY;
      this.setStyle(move);
      event.preventDefault();
    },
    itemTouchEnd(event) {
      let finger = event.changedTouches[0];
      this.finger.lastY = finger.pageY;
      this.finger.lastTime = event.timestamp || Date.now();
      let move = this.finger.lastY - this.finger.startY;
      /* 计算速度 */
      /* 速度计算说明
         * 当时间小于300毫秒 最后的移动距离等于 move + 减速运动距离
         * */
      let time = this.finger.lastTime - this.finger.startTime;
      let v = move / time;
      /* 减速加速度a */
      let a = 1.8;
      /* 设置css */
      if (time <= 300) {
        move = v * a * time;
        time = 1000 + time * a;
        this.setStyle(move, 'end', time);
      } else {
        this.setStyle(move, 'end');
      }
    },
    /* 设置css */
    setStyle(move, type, time) {
      const singleHeight = 43;
      const deg = 20;
      const singleDeg = deg / singleHeight;
      let currentListMove = this.finger.transformY;
      let updateMove = move + Number(currentListMove);
      /* 根据滚轮类型 line or cycle 判断 updateMove最大距离 */
      if (this.type === 'line') {
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(this.listData.length - 1) * singleHeight) {
          updateMove = -(this.listData.length - 1) * singleHeight;
        }
      }
      let updateDeg = -updateMove * singleDeg;
      let spinAim = Math.round(updateDeg / 20);
      let margin = Math.round(updateMove / singleHeight) * singleHeight; // 如果不这么写 会导致没有滚动效果
      /* 计算touchEnd移动的整数距离 */
      let endMove = margin;
      let endDeg = Math.round(updateDeg / deg) * deg;
      if (type === 'end') {
        this.setListTransform(endMove, margin, type, time);
        this.setWheelDeg(endDeg, type, time);
        /* 设置$emit 延迟 */
        setTimeout(() => this.getPickValue(endMove), 200);
      } else {
        this.setListTransform(updateMove, margin);
        this.setWheelDeg(updateDeg);
      }
      this.updateSpin(spinAim);
    },
    /* 更新spin */
    updateSpin(spinAim) {
      this.spin.start = this.spin.branch * -1 + spinAim;
      this.spin.end = this.spin.start + this.spin.branch * 2;
    },
    /* 获取spin 数据 */
    getSpinData(index) {
      if (!this.listData.length) {
        return;
      }
      index = index % this.listData.length;
      return this.listData[index >= 0 ? index : index + this.listData.length];
    },

    /* 获取选中值 */
    getPickValue(move) {
      let index = Math.abs(move / 43);
      let pickValue = this.getSpinData(index);
      this.$emit('input', pickValue);
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('touchstart', this.itemTouchStart);
    this.$el.removeEventListener('touchmove', this.itemTouchMove);
    this.$el.removeEventListener('touchend', this.itemTouchEnd);
  }
};
</script>
<style scoped lang="scss">
@import "../../common_scss/mixin";
html {
  font-family: 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'STHeitiSC-Light',
    'Arial', sans-serif;
  line-height: 1.8;
}

$color-background: #f5f5f5;
$color-checked: #e0e0e0;
$color-text-main: #333;
$color-text-second: #a8a8a8;
.pd {
  &-select {
    &-item {
      overflow: hidden;
      width: 100%;
      text-align: center;
      height: 179px;
      background: $color-background;
      position: relative;
    }
    &-ul {
      position: relative;
    }
    &-line,
    &-list,
    &-wheel {
      position: absolute;
      left: 0;
      right: 0;
      top: 73px;
    }
    &-line {
      z-index: 3;
    }
    &-list {
      z-index: 2;
      background: $color-background;
    }
    &-wheel {
      z-index: 1;
    }
    &-line {
      &:after,
      &:before {
        position: absolute;
        top: 0;
        content: '';
        display: table;
        background: $color-checked;
        width: 100%;
        height: 2px;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
      }
      &:before {
        bottom: -1px;
        top: auto;
      }
    }
    &-line,
    &-list {
      height: 43px;
      transform: translate3d(0px, 0px, 210px);
    }
    &-list {
      overflow: hidden;
    }
    &-list-item {
      text-shadow: 0 1px 1px rgba(102, 102, 102, 0.6);
    }
    &-list-item,
    &-wheel-item {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @include fontPxToRem(18);
      line-height: 43px;
      color: $color-text-main;
      &.hidden {
        visibility: hidden;
        opacity: 0;
      }
    }
    &-wheel {
      transform-style: preserve-3d;
      height: 43px;
      &-item {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden; /* Chrome 和 Safari */
        -moz-backface-visibility: hidden; /* Firefox */
        -ms-backface-visibility: hidden;
        position: absolute;
        top: 0;
        width: 100%;
        color: rgba(158, 158, 158, 1);
      }
    }
  }
}
</style>