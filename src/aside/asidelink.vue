<template>
<button id="content" class="et-button et-button--raised et-button--accent" v-on:click = "isVisible = true" >red box</button> 
</template>
<script>
export default {
    data: function () {
            return {
            	twoWay: true,
                isVisible: false,

            }
        }
        
}
</script>