<template>
    <div class="text-editor">
        <textarea v-model="text"></textarea>
        <div class="output-text" :inner-html.prop="text | marked"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:''
        }
    },
    filters:{
        upperCase(value){
            return value.toUpperCase()
        },
        emoji(value){
            return value.replace(':)', '🙂')
        }
    }
}
</script>

<style lang="scss" scoped>
.text-editor{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;

    textarea{
    width: 500px;
    height: 200px;
}
}
</style>