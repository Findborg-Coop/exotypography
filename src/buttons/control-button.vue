<template>
	<a href="#" target="_blank" id="control-button" class="et-button et-button--raised et-button--fab et-button--colored"><i class="material-icons"><slot>apps</slot></i></a>	

</template>

<style lang="stylus">
#control-button {
      position: fixed;
      display: block;
      right: 0;
      bottom: 0;
      margin-right: 40px;
      margin-bottom: 40px;
      z-index: 900;
    }
</style>