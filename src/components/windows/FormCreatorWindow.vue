<template>
    <div class="creator-info">
        <Logo></Logo>
        <div class="back-btn-cont">
            <button class="back-btn" @click="$router.push('/main')"><img style="margin-right: 8px;"
                    src="@/img/arrow-left.png">Назад</button>
        </div>
        <div class="nav-btns">
            <NavButton>Тип формы</NavButton>
            <NavButton>Сущности</NavButton>
            <NavButton>Поля</NavButton>
            <NavButton>Правила показа полей</NavButton>
            <NavButton>Другие настройки</NavButton>
        </div>
        <div class="save-script-btns">
            <MyButton style=" background-color: white; border: 1px solid #3EA748; color:#3EA748;">Скрипт</MyButton>
            <MyButton @click="$emit('addToForms')">Сохранить</MyButton>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.creator-info {


   margin-left: 280px;
   position: fixed;
   margin-top: 80px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  
}

.back-btn-cont {
   width: 170px;
   margin-top: 30px;
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   height: 30px;
   gap: 8px;
   flex-shrink: 0;
 
}

.back-btn {
   width: 63px;
   height: 30px;
   border: black;
   background: none;
   font-family: Cera Pro;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}

.nav-btns {
   margin-top: 56px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   grid-gap: 16px
}


.save-script-btns {
   margin-top: 330px;
   width: 170px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
}
</style>