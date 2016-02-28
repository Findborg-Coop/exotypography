<template>
<button v-el:etpanel class="et-button et-button--accent" @:click = "isVisible = true">
 Open Panel</button> 
</template>
<script>
export default{
  
  data: function () {
    return {
      
      twoWay: true,
      isVisible: false,
      
     }
   }
}
</script>