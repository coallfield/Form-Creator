<template>
    <div @click.stop="$router.push('/main')" class="form-popup">
        <MyForm @click.stop style="background-color: white;" :inputs="form"></MyForm>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: this.$store.state.currentForm
        }
    }
}
</script>

<style>
.form-popup {
    width: 100%;
    height: 100%;
    position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3EA748;
}
</style>