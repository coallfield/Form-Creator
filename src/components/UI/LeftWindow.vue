<template>
    <div>
        <AuthWindow v-if="$route.path === '/'"></AuthWindow>
        <FormListWindow v-if="$route.path === '/main'"></FormListWindow>
        <FormCreatorWindow v-if="$route.path === '/formcreator'" @addToForms="$emit('addToForms')"></FormCreatorWindow>
    </div>
</template>

<script>
import AuthWindow from '@/components/windows/AuthWindow.vue';
import FormListWindow from '@/components/windows/FormListWindow.vue';
import FormCreatorWindow from '@/components/windows/FormCreatorWindow.vue'
export default {
    components: {AuthWindow, FormListWindow, FormCreatorWindow},
    name: 'LeftWindow'

}

</script>

<style scoped>


</style>