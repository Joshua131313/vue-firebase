<script>
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

