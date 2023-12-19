<template>
    <div class="form-creator">
        <div class="creator">
            <div>
                <h2 class="title">Поля</h2>
            </div>
            <div style="margin-top: 30px;">
                <h3>Скрытые поля</h3>
            </div>
            <div style="margin-top: 30px;">
                <AddFormButton>Добавить поле</AddFormButton>
            </div>
            <div style="margin-top: 80px;">
                <h3>Поля</h3>
            </div>
            <div class="inputs-settings" v-for="input in inputs" :key="input.id">
                <div class="form-settings">
                    <NavButton style="margin-bottom: 9px; color: #3EA748;"
                        @click="$emit('deleteInput', input)">Удалить поле</NavButton>
                </div>
                <div>
                   <MyInput @input="$emit('addPlaceholder', {$event, input})"  style="background: white;" :type="input.type"></MyInput>
                   
                </div>
                <div class="checkbox-container">
                    <input @click="input.required = !input.required" class="checkbox" type="checkbox">
                    <p>Сделать поле обязательным</p>
                </div>
            </div>
            <div class="other-buttons">
                <AddFormButton v-if="!isTyping" @click="toggleType()" >Добавить поле</AddFormButton>
                <div v-if="isTyping && !isListCreating" class="type-settings">
                    <MyButton class="type-btn" @click="addInput('text')">Строка</MyButton>
                    <MyButton class="type-btn" @click="addInput('number')">Число</MyButton>
                    <MyButton class="type-btn" @click="toggleList()">Список</MyButton>
                </div>
                    <div v-if="isListCreating" class="list-making">
                        <AddFormButton @click="addOption()">Добавить элемент списка</AddFormButton>
                        
                        <MyInput style="margin-top: 15px; border: 1px solid #3EA748" v-for="input in listInputs" @input="input.title = $event.target.value" placeholder="Придумайте название элемента списка"></MyInput>
                        <MyButton @click="addList(listInputs)">Сохранить</MyButton>
                        <p style="opacity: 0.5; text-align: right; margin-top: 10px;" v-if="attention">Заполните все данные</p>
                           
                    </div>
                
                <AddFormButton style="gap: 120px">Добавить страницу формы</AddFormButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        inputs: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            attention: false,
            isTyping: false,
            isListCreating: false,
            listInputs: [
                {title: '', id: crypto.randomUUID()}
            ],
        }
    }, 
    methods: {
        toggleType() {
            this.isTyping = !this.isTyping
        },
        toggleList() {
            this.isListCreating = !this.isListCreating
            
        },
        addInput(typeValue) {
            this.$emit('addInput', typeValue)
            this.toggleType()
        },
        addOption() {
            const input = {
                title: '',
                id: crypto.randomUUID()
            }
            this.listInputs.push(input)
        },
        addList(listInputs) {
            if(this.listInputs.some(el => el.title.trim() === '')) {
                this.attention = true
                setTimeout(() => {
                    this.attention = false
                }, 1000)
            } else {
                
                this.$emit('addListInput', listInputs)
                this.listInputs = [{title: '', id: crypto.randomUUID()}]
                this.toggleList()
                this.toggleType()

            }
        }
    }
   
   
}
</script>

<style scoped>
.form-creator {
    background: #F6F6F6;
    min-height: 100vh;
    width: 60%;
    float: right;
}

.creator {
    margin-top: 80px;
    margin-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.title {
    color: #000;
    font-family: Cera Pro;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 415px;
}

.form-settings {
    
    width: 415px;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
}

.checkbox-container {
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    grid-gap: 15px;
    align-items: center

}

.checkbox {
    
    display: flex;
    width: 24px;
    height: 24px;
    padding: 4px;
    justify-content: center;
    align-items: center;
}


.other-buttons {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    grid-gap: 30px
}


p {
    font-family: Cera Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

h3 {
    width: 415px;
    height: 29px;
    flex-shrink: 0;
    font-family: Cera Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
}

.type-settings {
    display: flex;
    flex-direction: row;
    grid-gap: 10px;

}

.type-btn {
    background: none;
    border: 1px dashed  #3EA748;
    color: #3EA748;
    width: 130px;
}

</style>