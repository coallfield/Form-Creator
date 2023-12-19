<template>
    <div class="list-navigation">
        <div class="nav-btns">
            <Logo></Logo>
            <div class="btns">
                <NavButton class="list-btn">Формы</NavButton>
                <NavButton class="list-btn">Пользователи</NavButton>
            </div>
            <MyButton  style="margin-top: 583px;" @click="$router.push('/')" class="no-border">Выход</MyButton>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.list-navigation {
    position: fixed;
    height: 100vh;
    width: 40%;
    float: left;
    background-color: white;
    border-radius: 10px;
    
}

.nav-btns {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btns {
    width: 170px;
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    grid-gap: 16px
}




</style>