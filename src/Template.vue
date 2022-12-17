<script setup>

import Layout from '../containers/Layout.vue';
import { reactive, toRefs } from 'vue'

const state = reactive({
    title: 'asd'
});
const props = defineProps({
    header: String
})


</script>

<template>
    <Layout class="home">
        {{state.title}}
    </Layout>
</template>

<style lang="css" scoped>

</style>
