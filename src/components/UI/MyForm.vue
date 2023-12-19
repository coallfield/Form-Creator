<template>
    <form>
        <h1 class="title">Форма регистрации участников</h1>
        <div v-for="input in inputs" class="inputs">
            <MyInput style="width: 270px;" :placeholder="input.placeholder" :list="input.type === 'list' ? input.id : null"
                :type="input.type">

            </MyInput>
            <datalist v-if="input.type === 'list'" :id="input.id">
                <option v-for="value of input.optionValues" :value="value"></option>
            </datalist>
        </div>
        <div class="checkbox-container">
            <Checkbox></Checkbox>
            <p>Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</p>
        </div>
        <div class="submit">
            <MyButton style="width: 270px" @click.prevent>Отправить</MyButton>
        </div>
    </form>
</template>


<script>
export default {
    name: 'MyForm',
    props: {
        inputs: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.title {
    margin-top: 40px;
    margin-left: 40px;
width: 269px;
height: 70px;
flex-shrink: 0;
font-family: Cera Pro;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

.inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    
}

.checkbox-container {
    display: flex;
    flex-direction: row;
    justify-content:center;
    grid-gap: 16px;
    font-family: Cera Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
    color: #212121
}
.checkbox-container p {
    opacity: 0.5;
    width: 260px
}

.submit {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 40px;
}

</style>