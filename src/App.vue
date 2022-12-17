<script>
import { reactive, toRefs } from 'vue';
import StoreContext from './StoreContext';


export default {
    name: "App",
    components: {
      StoreContext,
    }
}
</script>

<template>
  <StoreContext>
      <RouterView />
  </StoreContext>
</template>

