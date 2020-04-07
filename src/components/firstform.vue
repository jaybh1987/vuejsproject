<template>
    <div>
        <input v-model="message" placeholder="edit me.">
        <button v-on:click="getDate()" >getTodayDate</button>
        <!-- <br>
        <button v-on:click="greet">Greet</button>
        <br>
        <button v-on:click="say('What')">Say What</button>
        <br>
        <button v-on:click="say('hi')">Say hi</button>
        <br>
        <button v-on:click="warn('Form cannot be submitted.')">warn</button>
         -->
        <h3>{{message}}</h3>
        <h3>{{todayDate}}</h3>
        
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            message: "",
            todayDate: "press button."
        }
    },
    methods : {
        getDate : function () {
            return this.todayDate = this.dateFunction()
        },

        dateFunction: function(){
            var today = new Date()
            var day = today.getDate()
            var month = today.getMonth()
            var year = today.getFullYear()
          
            return day +'-'+month+'-'+ year
        },
        // greet: function(event) {
        //     alert('hello'+this.message)

        //     if(event) {
        //         alert(event.target.tagName)
        //     }
        // },
        // say: function(message) {
        //     alert(message)
        // },
        // warn: function(message, event) {
        //     if(event) {
        //         event.preventDefault()
        //     }
        //     alert(message)
        // }
    }
}
</script>

<style scoped>
</style>