<template>
<!-- Right aligned menu below button -->

   
<div style="
    position: relative;
    padding: 10px;
    
    ">
<div class="wrapper" style="box-sizing: border-box; right: 16px;">
  {{ title }}
  <button class="et-button et-button--icon" v-on:click='isVisible=!isVisible'>  <i class="material-icons">more_vert</i></span></button>

  <div  class="et-menu__container is-upgraded " v-bind:class='{visible:isVisible}' style="right: 16px; top: 52px; ">
  	<div class="et-menu__outline et-menu--bottom-right"></div>
  	<ul class="et-menu et-menu--bottom-right bg-white shadow1" style="clip: rect(0px 150.609px auto 0px);">
  		<li class="et-menu__item">Some Action</li>
  		<li class="et-menu__item ">Another Action</li>
  		<li class="et-menu__item">Yet Another Action</li>
  		<li class="et-menu__item">Yet Another Action</li>
  		<li class="et-menu__item">Yet Another Action</li>
  		<li class="et-menu__item">Yet Another Action</li>
	</ul>
	</div>

</div>
</template>

<script>
export default {
  props: ['title'],
  
  data: function () {
    return {
      
      isVisible: false
      
     }
   },
};
</script>
<style>
.et-menu__container {
    display:block;
    margin:0;
    padding:0;
    border:none;
    position:absolute;
    overflow:visible;
    height:0;
    width:0;
    z-index:-1
}

.et-menu__container.visible {
    z-index:999
}

.et-menu__outline {
    display:block;
    background:#fff;
    margin:0;
    padding:0;
    border:none;
    border-radius:2px;
    position:absolute;
    top:0;
    left:0;
    overflow:hidden;
    opacity:0;
    transform:scale(0);
    transform-origin:0 0;
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
    will-change:transform;
    transition:transform .3s cubic-bezier(0.4,0,0.2,1),opacity .2s cubic-bezier(0.4,0,0.2,1);
    z-index:-1
}

.et-menu__container.visible .et-menu__outline {
    opacity:1;
    transform:scale(1);
    z-index:999
}

.et-menu__outline.et-menu--bottom-right {
    transform-origin:100% 0
}

.et-menu__outline.et-menu--top-left {
    transform-origin:0 100%
}

.et-menu__outline.et-menu--top-right {
    transform-origin:100% 100%
}

.et-menu {
    position:absolute;
    list-style:none;
    top:0;
    left:0;
    height:auto;
    width:auto;
    min-width:124px;
    padding:8px 0;
    margin:0;
    opacity:0;
    clip:rect(0 0 0 0);
    z-index:-1
}

.et-menu__container.visible .et-menu {
    opacity:1;
    z-index:999
}

.et-menu.is-animating {
    transition:opacity .2s cubic-bezier(0.4,0,0.2,1),clip .3s cubic-bezier(0.4,0,0.2,1)
}

.et-menu.et-menu--bottom-right {
    left:auto;
    right:0
}

.et-menu.et-menu--top-left {
    top:auto;
    bottom:0
}

.et-menu.et-menu--top-right {
    top:auto;
    left:auto;
    bottom:0;
    right:0
}

.et-menu.et-menu--unaligned {
    top:auto;
    left:auto
}

.et-menu__item {
    display:block;
    border:none;
    color:rgba(0,0,0,0.87);
    background-color:transparent;
    text-align:left;
    margin:0;
    padding:0 16px;
    outline-color:#bdbdbd;
    position:relative;
    overflow:hidden;
    font-size:14px;
    font-weight:400;
    line-height:24px;
    letter-spacing:0;
    text-decoration:none;
    cursor:pointer;
    height:48px;
    width:100%;
    line-height:48px;
    white-space:nowrap;
    opacity:0;
    transition:opacity .2s cubic-bezier(0.4,0,0.2,1);
    user-select:none
}

.et-menu__container.visible .et-menu__item {
    opacity:1
}

.et-menu__item::-moz-focus-inner {
    border:0
}

.et-menu__item[disabled] {
    color:#bdbdbd;
    background-color:transparent;
    cursor:auto
}

.et-menu__item[disabled]:hover {
    background-color:transparent
}

.et-menu__item[disabled]:focus {
    background-color:transparent
}

.et-menu__item[disabled] .et-ripple {
    background:transparent
}

.et-menu__item:hover {
    background-color:#eee
}

.et-menu__item:focus {
    outline:none;
    background-color:#eee
}

.et-menu__item:active {
    background-color:#e0e0e0
}

.et-menu__item--ripple-container {
    display:block;
    height:100%;
    left:0;
    position:absolute;
    top:0;
    width:100%;
    z-index:0;
    overflow:hidden
}
</style>
