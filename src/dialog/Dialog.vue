<template>

<div>
<button class="btn" type="button" v-on:click='isDialog=!isDialog'>open modal</button>
<div class="am-modal"  v-bind:class='{ammodalactive:isDialog}' tabindex="-1">
  <div class="am-modal-dialog">
    <div class="am-modal-hd"><slot name="header">This is header</slot>
      <a href="javascript: void(0)" class="am-close am-close-spin" v-on:click='isDialog=!isDialog'>&times;</a>
    </div>
    <div class="am-modal-bd">
      <slot name="body">This is the body of the the modal</slot>
    </div>
    <div class="am-modal-footer">
      <slot name="footer">This is the footer</slot>
    </div>
  </div>
  
</div>
<div class="am-dimmer" v-bind:class='{ammodalactive:isDialog}' v-on:click='isDialog=!isDialog' style="display: block;"></div>
</div>

</template>

<script>
export default {
  props: {
    
    closeViaDimmer: { // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },
    lg: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isDialog: false
     }
   },
};
  
  
</script>

<style lang="stylus">
.am-modal {
  width: 270px;
  position: fixed;
  display: none;
  z-index: 1110;
  left: 50%;
  margin-left: -135px;
  margin-top: 0;
  top: 50%;
  text-align: center;
  border-radius: 0;
  opacity: 0;
  -webkit-transform: scale(1.185);
      -ms-transform: scale(1.185);
          transform: scale(1.185);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  /*@media @large-up {
    width: @modal-lg;
    margin-left: -@modal-lg/2;
  }*/
}
.am-modal:focus {
  outline: 0;
}
.am-modal.ammodalactive {
  opacity: 1;
  -webkit-transition-duration: 300ms;
          transition-duration: 300ms;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}
.am-modal.am-modal-out {
  opacity: 0;
  z-index: 1109;
  -webkit-transition-duration: 300ms;
          transition-duration: 300ms;
  -webkit-transform: scale(0.815);
      -ms-transform: scale(0.815);
          transform: scale(0.815);
}
@media only screen and (min-width:641px) {
  .am-modal {
    width: 540px;
    margin-left: -270px;
  }
}
.am-modal-dialog {
  border-radius: 0;
  background: #f8f8f8;
}
.am-modal-hd {
  padding: 15px 10px 5px 10px;
  font-size: 1.8rem;
  font-weight: 500;
}
.am-modal-hd + .am-modal-bd {
  padding-top: 0;
}
.am-modal-hd .am-close {
  position: absolute;
  top: 4px;
  right: 4px;
}
.am-modal-bd {
  padding: 15px 10px;
  text-align: center;
  border-bottom: 1px solid #dedede;
  border-radius: 2px 2px 0 0;
}
.am-modal-bd + .am-modal-bd {
  margin-top: 5px;
}
.am-modal-prompt-input {
  display: block;
  margin: 5px auto 0 auto;
  border-radius: 0;
  padding: 5px;
  line-height: 1.8rem;
  width: 80%;
  border: 1px solid #dedede;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
}
.am-modal-prompt-input:focus {
  outline: none;
  border-color: #d6d6d6;
}
.am-modal-footer {
  height: 44px;
  overflow: hidden;
  display: table;
  width: 100%;
  border-collapse: collapse;
}
.am-modal-btn {
  display: table-cell !important;
  padding: 0 5px;
  height: 44px;
  -webkit-box-sizing: border-box !important;
          box-sizing: border-box !important;
  font-size: 1.6rem;
  line-height: 44px;
  text-align: center;
  color: #0e90d2;
  display: block;
  word-wrap: normal;
  /* for IE */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  border-right: 1px solid #dedede;
}
.am-modal-btn:first-child {
  border-radius: 0 0 0 0;
}
.am-modal-btn:last-child {
  border-right: none;
  border-radius: 0 0 0 0;
}
.am-modal-btn:first-child:last-child {
  border-radius: 0 0 0 0;
}
.am-modal-btn.am-modal-btn-bold {
  font-weight: 500;
}
.am-modal-btn:active {
  background: #d4d4d4;
}
.am-modal-btn + .am-modal-btn {
  border-left: 1px solid #dedede;
}
.am-modal-no-btn .am-modal-dialog {
  border-radius: 0;
  border-bottom: none;
}
.am-modal-no-btn .am-modal-bd {
  border-bottom: none;
}
.am-modal-no-btn .am-modal-footer {
  display: none;
}
.am-modal-loading .am-modal-bd {
  border-bottom: none;
}
.am-modal-loading .am-icon-spin {
  display: inline-block;
  font-size: 2.4rem;
}
.am-modal-loading .am-modal-footer {
  display: none;
}
.am-modal-actions {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1110;
  width: 100%;
  text-align: center;
  border-radius: 0;
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition: -webkit-transform 300ms;
  transition: -webkit-transform 300ms;
  transition: transform 300ms;
  transition: transform 300ms, -webkit-transform 300ms;
}
.am-modal-actions.ammodalactive {
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
}
.am-modal-actions.am-modal-out {
  z-index: 1109;
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%);
}
.am-modal-actions-group {
  margin: 10px;
}
.am-modal-actions-group .am-list {
  margin: 0;
  border-radius: 0;
}
.am-modal-actions-group .am-list > li {
  margin-bottom: 0;
  border-bottom: none;
  display: block;
  word-wrap: normal;
  /* for IE */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.015);
          box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.015);
}
.am-modal-actions-group .am-list > li > a {
  padding: 1rem;
  display: block;
  word-wrap: normal;
  /* for IE */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.am-modal-actions-group .am-list > li:first-child {
  border-top: none;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.am-modal-actions-group .am-list > li:last-child {
  border-bottom: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.am-modal-actions-header {
  padding: 1rem;
  color: #999999;
  font-size: 1.4rem;
}
.am-modal-actions-danger {
  color: #dd514c;
}
.am-modal-actions-danger a {
  color: inherit;
}
.am-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1110;
  background: #fff;
  display: none;
  overflow: hidden;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%);
}
.am-popup.ammodalactive,
.am-popup.am-modal-out {
  -webkit-transition-duration: 300ms;
          transition-duration: 300ms;
}
.am-popup.ammodalactive {
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
}
.am-popup.am-modal-out {
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%);
}
@media all and (min-width: 630px) and (min-height: 630px) {
  .am-popup {
    width: 630px;
    height: 630px;
    left: 50%;
    top: 50%;
    margin-left: -315px;
    margin-top: -315px;
    -webkit-transform: translateY(1024px);
        -ms-transform: translateY(1024px);
            transform: translateY(1024px);
  }
  .am-popup.ammodalactive {
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);
  }
  .am-popup.am-modal-out {
    -webkit-transform: translateY(1024px);
        -ms-transform: translateY(1024px);
            transform: translateY(1024px);
  }
}
.am-popup-inner {
  padding-top: 44px;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.am-popup-hd {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #dedede;
  background-color: #fff;
}
.am-popup-hd .am-popup-title {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 43px;
  text-align: center;
  margin: 0 30px;
  color: #333333;
  display: block;
  word-wrap: normal;
  /* for IE */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.am-popup-hd .am-close {
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: #999999;
}
.am-popup-hd .am-close:hover {
  -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
          transform: rotate(360deg);
  color: #555555;
}
.am-popup-bd {
  padding: 15px;
  background: #f8f8f8;
  color: #555555;
}
.modal-fade-transition
  -webkit-transition background-color 300ms 0s
  transition background-color 300ms 0s
.modal-fade-enter, .modal-fade-leave
  background-color rgba(0, 0, 0, 0)
.am-modal, .am-dimmer
  display block
.am-dimmer-active {
  overflow: hidden;
}
.am-dimmer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1100;
  opacity: 0;
}
.am-dimmer.ammodalactive {
  opacity: 1;
  z-index: 1100;
}
.am-modal-lg
  width 1024px
  margin-left -512px
  top 100px
</style>

