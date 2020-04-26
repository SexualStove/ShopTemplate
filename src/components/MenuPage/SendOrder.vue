<template>

    <button v-on:click="sendOrder">SendTing</button>


</template>






<script>
    import {EventBus} from "../../App";
    //import CreateMenu from "./CreateMenu";
    import BlogServices from "../../services/BlogServices";

    export default {
        //components: {CreateMenu},
        data() {

            return {
            }
        },
        methods: {
            sendOrder: function(){
                // pass through object with data here ie
                // {
                // name: number:
                // {orderIDs/quantity}
                //}
                BlogServices.SendOrder();
            }
        },
        mounted() {
            let self = this;
            EventBus.$on('Changed', changed => {
                self.MenuItems = changed;
                console.log(`Oh, that's nice. It's gotten ${self.MenuItems} clicks! :)`);
            });

        }
    }



</script>






<style>




</style>