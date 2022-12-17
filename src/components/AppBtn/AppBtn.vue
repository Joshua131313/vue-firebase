<script setup>

const props = defineProps({
    className: String,
    onClick: Function,
    disabled: Boolean,
    loading: Boolean,
    icon: String,
    text: String
})


</script>

<template>
    <button 
      class="appbtn"
      :class="[disabled ? 'disabledBtn' : '', className]" 
      @click="()=> {!disabled && onClick?.()}">
        <i v-if="loading" className="fal fa-spinner fa-spin"></i>
        <i v-else-if="icon" :className="icon"></i>
        <span>{{text}}</span>
        <i className='fad fa-long-arrow-right'></i>
    </button>
</template>

<style>
    @import './AppBtn.css'
</style>
