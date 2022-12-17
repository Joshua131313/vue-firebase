<script setup>

import Layout from '../containers/Layout.vue';
import { reactive } from 'vue'

const state = reactive({
    title: 'Home'
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
