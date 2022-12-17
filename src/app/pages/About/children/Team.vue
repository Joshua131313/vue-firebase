
<script>
import Layout from '@/app/containers/Layout.vue';
import { reactive, toRefs } from 'vue'

export default {
    setup() {
        const state = reactive({});
        return {
            ...toRefs(state),
        };
    },
    components: { Layout, Layout }
}
</script>

<template>
    <Layout class="about">
        Team
    </Layout>
</template>

<style lang="css" scoped>

</style>