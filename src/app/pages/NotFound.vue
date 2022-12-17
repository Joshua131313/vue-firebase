
<script>
import { reactive, toRefs } from 'vue'
import Layout from '../containers/Layout.vue';

export default {
    setup() {
        const state = reactive({});
        return {
            ...toRefs(state),
        };
    },
    components: { Layout }
}
</script>

<template>
    <Layout class="notfound">
        Not found
    </Layout>
</template>

<style lang="css" scoped>

</style>