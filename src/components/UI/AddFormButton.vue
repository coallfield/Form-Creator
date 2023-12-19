<template>
    <button class="add-input">
        <span style="text-wrap: nowrap;"><slot></slot></span>
        <Plus></Plus>
    </button>
</template>

<script>
import Plus from '@/components/Plus.vue'
export default {
    name: 'AddFormButton',
    components: {Plus}

}
</script>

<style scoped>
.add-input {
    
    display: inline-flex;
    padding: 21px 30px 20px 30px;
    justify-content: center;
    align-items: center;
    gap: 212px;
    border-radius: 10px;
    border: 1px dashed #3EA748;
    color:#3EA748;
    width: 415px;
    height: 70px;
}

span {

font-family: Cera Pro;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>