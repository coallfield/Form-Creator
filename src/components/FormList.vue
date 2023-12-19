<template>
    <div class="forms">
            <div class="title-button">
                <div class="title">
                    <h1>Формы</h1>
                </div>
                <MyButton @click="$router.push('/formcreator')" style="text-wrap: nowrap;">Создать форму</MyButton>
            </div>
            <div class="forms-container">
                <div @click="toggleVisible(form)" v-for="form in forms" class="form">
                    <div class="info">
                        <h2 class="title">Форма регистрации участников</h2>
                        <p class="author">Автор: user1</p>
                        <p class="date">Дата создания: 16.12.2023</p>
                    </div>
                    <div class="form-btns">
                        <MyButton style="height: 42px; width: 179px;" class="no-border">Редактировать</MyButton>
                        <MyButton style="height: 42px; width: 179px; border: none;" class="no-border">Удалить</MyButton>
                    </div>

                    
                    
                </div>
            </div>
        </div>
        
</template>

<script>
export default {
    data() {
        return {
            forms: this.$store.state.forms,
            showForm: false
        }
    },
    methods: {
        toggleVisible(form) {
            this.showForm = !this.showForm
            this.$store.state.currentForm = form
            this.$router.push(`/form`)
        }
    }
}
</script>

<style scoped>
.forms {
    width: 60%;
    float: right;
    display: flex;
    flex-direction: column;
    
}

.form-btns {
    margin-right: 24px;
    display: flex;
    grid-gap: 30px;
    flex-direction: column;
}

.title-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    padding-right: 250px;
    padding-left: 80px;
    font-family: Cera Pro Medium;
}
.forms-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    grid-gap: 15px
}

.form {
 
    width: 825px;
    height: 190px;
    border-radius: 10px;
    background: #FFF;
    margin-left: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    padding-top: 24px;
    grid-gap: 8px
}
.title {
    font-family: Cera Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

p {
    font-family: Cera Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.date {
    margin-top: 50px;
}

.no-border {
     background-color: white; border: 1px solid #3EA748; color:#3EA748;
    font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}



</style>