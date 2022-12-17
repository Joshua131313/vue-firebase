<script setup>
import { RouterLink } from 'vue-router';


const props = defineProps({
    disabled: Boolean
})

</script>

<template>
    <div :is="disabled ? RouterLink : 'div'" to="/" class="logo">
        <img src="https://i.imgur.com/pyj1InU.png" alt="">
    </div>  
</template>

<style lang="css" scoped>
    .logo img {
        width: 120px;
        height: 80px;
    }
</style>
