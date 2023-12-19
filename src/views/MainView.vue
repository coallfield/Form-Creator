<template>
    <div class="list-form">
        <LeftWindow></LeftWindow>
        <FormList></FormList>
    </div>
</template>

<script>
import FormList from '@/components/FormList.vue'

export default {
    components: {FormList},
    
}





</script>

<style scoped>

.list-form {
    width: 100%;
    height: 100vh;
    background: #F6F6F6;
}



</style>