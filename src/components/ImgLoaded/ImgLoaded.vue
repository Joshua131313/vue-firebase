<script setup>

import { onUnmounted, reactive, watchEffect } from 'vue'

const state = reactive({
    isLoaded: false
});
const props = defineProps({
    src: String,
    skeletonClass: String,
    class: String 
})
// onUnmounted(()=> {
//     state.isLoaded = false
// })


</script>

<template>
    <div class="imgloaded" :class="class">
        <img
            :style="state.isLoaded ? 'display: block;' : 'display: none'" 
            referrerPolicy='no-referrer'  
            :src='src'
            @load="()=> state.isLoaded = true" 
            alt="" > 
            <div class="rskeletonimg" 
                :class="skeletonClass"
                :style="state.isLoaded ? 'display: none;' : 'display: block'" 
            >
            </div>
    </div>
</template>

<style lang="css" scoped>
 .rskeletonimg {
    animation: skeleton 2.2s infinite;
    width: 100%;
    height: 100%;
    background-color: rgb(238, 238, 238);
    position: absolute;
    top: 0;
    z-index: 100;
  }
  .user .rskeletonimg {
    border-radius: 50%;
  }
  .imgloaded  {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .imgloaded img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.3s;
  }
  @keyframes skeleton {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1
    }
  }
</style>
