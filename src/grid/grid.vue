<template>
<div class="et-container">
<div class="et-grid {{color}}">

	 <slot></slot>
</div>
</div>
</template>

<script type="text/babel">
  export default{
    props: ['color']
    
  }
</script>
<style lang="stylus">



</style>