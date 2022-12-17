<script setup>

const props = defineProps({
    value: String,
    type: {
        default: 'text',
        type: String
    },
    placeholder: String,
    error: String,
    disabled: Boolean
})
const emit = defineEmits(['update:value'])
const updateValue = (e) => {
    emit('update:value', e.target.value)
}

</script>

<template>
      <div className="flex authinputcont">
        <span>{{placeholder}}</span>
        <input
            :disabled='disabled'
            required
            :type='type'
            :value='value'
            :placeholder="`Enter ${placeholder}`"
            className="authinput"
            @change="updateValue"
        />
        <span v-if="error" className="error">
            {{error}}
        </span>
     </div>
</template>

<style lang="css" scoped>

</style>
