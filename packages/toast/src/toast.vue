<template>
    <div v-show="shown" class="toast-mask flex-col flex-main-center flex-cross-center" :class="{'from-top': position=='top'}">
        <transition>
            <div v-show="shown && position=='middle'" class="toast" :class="toastClass">
                <i :class="['toast-icon','icon-'+type]" v-if="type!='info'"></i>
                <div class="toast-message" v-html="message"></div>
            </div>
        </transition>
        <transition name="toast-top">
            <div v-show="shown && position=='top'" class="toast toast-top" :class="toastClass" :style="{'padding-left': type=='info'?'20px':'50px'}">
                <i :class="['toast-icon','icon-'+type]" v-if="type!='info'"></i>
                <div class="toast-message" v-html="message"></div>
            </div>
        </transition>
    </div>
</template>
<style scoped lang="scss">
@import "../../common_scss/mixin";


.toast-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 210;
    
    &.from-top {
        -webkit-box-pack: start;
        -moz-flex-pack: start;
        -ms-flex-pack: start;
        -moz-justify-content: start;
        justify-content: start;
    }
}

.toast {
    position: relative;
    max-width: 80%;
    padding: pxToRem(12) pxToRem(20);
    border-radius: pxToRem(4);
    background: rgba(62, 62, 77, .9);
    color: #fff;
    text-align: center;
}

.toast-top {
    position: relative;
    top: pxToRem(44);
    transform: translate3d(0, pxToRem(20), 0);
}

.toast-top-enter {
    opacity: 0;
    transform: translate3d(0, 0px, 0);
}

.toast-top-enter-active {
    transition: all .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}

.v-enter {
    opacity: 0;
    transform: translate3d(0, pxToRem(20), 0);
}

.v-enter-active {
    transition: all .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}

.v-leave {
    opacity: 1;
}

.v-leave-active {
    transition: all .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
    opacity: 0;
}

.toast-message {
    @include fontPxToRem(14);
    text-align: left;
    word-break: break-all;
}

.toast-icon {
    display: block;
    position: absolute;
    top: pxToRem(12);
    left: pxToRem(20);
    width: pxToRem(22);
    height: pxToRem(22);
    vertical-align: middle;
}

.icon-success {
    background: url(../assets/toast_icon_success.png) no-repeat;
    background-size: 100% 100%;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 0px, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, pxToRem(20), 0);
    }
}

.slide-up {
    animation: slideUp .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}
</style>
<script>
export default {

    data() {
        return {
            shown: false
        }
    },
    props: {
        message: String,
        type: {
            type: String,
            default: 'info' //info/success/error
        },
        duration: {
            type: Number,
            default: 3000
        },
        className: [String, Array],
        position: {
            type: String,
            default: 'middle'
        },
        callback: Function
    },

    computed: {
        toastClass() {
            var classes = [];
            let className = this.className;

            if (className) {
                if (typeof className === 'string') {
                    classes.push(className);
                }
                if (Array.isArray(className)) {
                    classes = classes.concat(className);
                }
            }
            return classes.join(' ');
        }
    }

};
</script>