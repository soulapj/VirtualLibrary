<template>
    <div>
        <button @click="emitDetails">{{ label }}</button>
    </div>
</template>

<script>
    export default {
        props:{
            label: {
                type: String,
                default: 'Show details'
            },
            color: {
                type: String,
                default: 'blue'
            }
        },
        methods:{
            emitDetails(){
                this.$emit('show-details');
            }
        }
    }
</script>

<style scoped>


button {
    background-color: v-bind(color);
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

</style>