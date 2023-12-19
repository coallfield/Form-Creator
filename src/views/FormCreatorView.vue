<template>
    <div class="form-creator-view">
        <div class="creator-window">
            <LeftWindow @addToForms="addToForms()"></LeftWindow>
        </div>
        <FormCreator 
            style="flex-shrink: 1;" 
            @addInput="(typeValue) => addInput(typeValue)" 
            @deleteInput="(input) => deleteInput(input)" 
            @addPlaceholder ="(object) => addPlaceholder(object)" 
            @addListInput="(listInputs) => addListInput(listInputs)"
            :inputs="inputs">
        </FormCreator>
        <div class="form-preview">
            <div class="form-container">
                <MyForm :inputs="inputs"></MyForm>
            </div>
        </div>
    </div>
</template>

<script>
import FormCreator from '@/components/FormCreator.vue'
export default {
    components: {FormCreator},
    data() {
        return {
            inputs: [],
            
        }
    },
    methods: {
        addInput(typeValue, optionValues) {
            const input = {
                optionValues: optionValues || null,
                required: false,
                placeholder: '',
                type: typeValue,
                id: crypto.randomUUID()
            }
            this.inputs.push(input)
           
           
        },
        deleteInput(input) {
           this.inputs = this.inputs.filter(el => el.id !== input.id)
        },
        addPlaceholder(object) {
            this.inputs.forEach(el => {
                if(el.id === object.input.id) {
                    el.placeholder = object.$event.target.value
                }
            })
        },
        addListInput(listInputs)    {
            const optionValues = []
            for (let i = 0; i < listInputs.length; i++) {
                optionValues.push(listInputs[i].title)
            }
            this.addInput('list', optionValues)
        },
        addToForms() {
            this.$store.state.forms.push(this.inputs)
            this.inputs = []
        }
        
    }
}
</script>

<style scoped>



.form-creator-view {
    
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    
  
}

.creator-window {
    min-width: 35%;
    
    height: 100vh;
    float: left;
    background-color: white;
    border-radius: 10px;
   
    
}

.form-preview {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    background: #3EA748;
    height: 100vh;
    /* float: right; */
    width: 41%;
    margin-left: 1150px;
    overflow: hidden;

}


form {
    width: 349px;
    min-height: 504px;
    flex-shrink: 0;
    border-radius: 20px;
background: #FFF;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}



</style>