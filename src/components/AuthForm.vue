<template>
    <div class="auth-container">
                <Logo></Logo>
                <h1>Авторизация</h1>
                <form>
                    <MyInput placeholder="Логин" type="text" />
                    <MyInput placeholder="Пароль" type="text" />
                    <MyButton @click.prevent="$router.push('/main')">ВХОД</MyButton>
                </form>
            </div>
</template>

<script>

</script>

<style scoped>
.auth-container {
    
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding-left:250px;
    margin-top: 80px;
    
}


h1 {
    margin-top: 30px;
    font-family: 'Cera Pro Medium';
    width: 250px;
    height: 50px;
    flex-shrink: 0;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    grid-gap: 10px
}



</style>