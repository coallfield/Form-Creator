<template>
    <div class="main-info">
        <AuthForm></AuthForm>
        <div class="attentions">
            <p id="problem">Если возникла проблема, то можете написать <a>Алёне из Сибтеха</a></p>
            <p id="withlove">С любовью, ваш <a>Сибтех</a></p>
        </div>
    </div>
</template>


<script>
import AuthForm from '@/components/AuthForm.vue'
export default {
    components: {AuthForm}
}
</script>

<style scoped>

.main-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 40%;
    float: left;
    background: white;
    height: 100vh;
    border-radius: 10px;
}

.attentions {
    padding-top: 310px;
    display: flex;
    flex-direction: column;
    padding-left:250px;
    grid-gap: 8px
}

p {
    color: #676767
}

#problem {
    width: 260px;
}
a {
    text-decoration: underline;
    color: #3EA748;
}

</style>