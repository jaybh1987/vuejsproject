<template>
    
    <div id="myform">
        <input type="text" v-model="symbol" name="symbol">
        <br>
        <input  v-model.number="price" type="number">
        <br>
        <button v-on:click="submitData()">submit</button>
        <br>
        <p> 
            {{output}}
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            symbol: '',
            price: 0,
            output: JSON.stringify({symbol:this.symbol, price: this.price})
        }
    },
    methods: {
        showInput: function() {
            console.log(JSON.stringify({symbol:this.symbol, price: this.price}))
        },
        submitData: function() {
            axios.post(
                '/api/savestock',
                JSON.stringify({symbol:this.symbol, price: this.price}),
                {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            .then(function(response) {
                console.log(response)
            })
            .then(function(error){
                console.log(error)
            })
        }
    }
}
</script>


<style scoped>
#myform {
    background-color: rgb(108, 201, 224);
    height: auto;
    width: 200px;
}
</style>