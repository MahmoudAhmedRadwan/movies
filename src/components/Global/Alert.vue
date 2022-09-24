<template>
    <div class="alert_messege">
        <p> {{messege}} </p>
        <div class="actions">
            <button @click="accept" class="saveBtn">Yes</button>
            <button @click="cancel" class="cancelBtn">Cancel</button>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Alert',
    props: {
        acceptedDelete: {
            type: Function
        },
        messege: String
    },
    methods: {
        accept(){
            if (this.acceptedDelete) {
                this.acceptedDelete()
                this.$parent.alertToggle = false;
            }
        },
        cancel(){
            this.$parent.alertToggle = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.saveBtn,
.cancelBtn{
    width: 111px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 26px;
    padding: 6px 0;
    text-align: center;
    color: #FFF;
    font-size: 13px;
    border: 0;
    display: block;
    cursor: pointer;
}
.saveBtn{
    background: #00BF787B ;
    margin-right: 20px;
}
.cancelBtn{
    background: #FFFFFF ;
    color: #000;
}
.alert_messege{
    width: 424px;
    padding: 20px;
    border-radius: 10px;
    position: fixed;
    margin-left: -200px;
    margin-right: -200px;
    top: 10%;
    left: 50%;
    right: 50%;
    background-color: #FFF;
    text-align: center;
    z-index: 99;
    box-shadow: 0 0 10px #8f8f8f;
    p{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 30px;
    }
    .actions{
        display: flex;
        justify-content: center;
        button:first-child{
            margin-left: 20px;
        }
    }
}
</style>