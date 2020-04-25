<template>
  <div>
    <label for="MenuInput"></label><textarea id="MenuInput" rows="4" cols="50"></textarea>
    <button v-on:click="getMenuInput">Submit</button>



  </div>
</template>

<script>
    import {EventBus} from "../../App";
    export default {
        name: "CreateMenu",
        data() {

            return {
                MenuItems: [
                    {
                        SectionTitle: "Example Section",
                        SectionItems: [ {
                            id: -1,
                            title: "Example Item",
                            price: 99.99,
                        }]
                    }
                ]
            }
        },
        methods: {
            writeFile() {
                //Implement once some one wants the offer
                const fs = require('fs');

                fs.writeFile("/tmp/test", document.getElementById("MenuInput").value, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
            },

             getMenuInput() {
                let menuString = [];
                let ItemChunk = {};
                let SectionChunk = {};
                let allItems = [];
                this.MenuItems = [];
                let id = 0;
                let sectionString =[];
                sectionString = document.getElementById("MenuInput").value.split("-");
                //menuString = document.getElementById("MenuInput").value.split(",");
                console.log(menuString);
                 for(let i=1; i < sectionString.length; i++) {
                     SectionChunk = [];
                     console.log("Secotion string");
                     console.log(sectionString);
                     menuString = sectionString[i].split(",");
                     console.log("Menu string on split");
                     console.log(menuString);
                     SectionChunk.SectionTitle = menuString[0];
                     SectionChunk.SectionItems = [];
                     menuString = menuString.slice(1);
                     console.log("Meu string on slice");
                     console.log(menuString);
                     for(let i=0; i < menuString.length; i++) {
                         ItemChunk = [];
                         ItemChunk.id = id;
                         let ItemSplit = menuString[i].replace("\n", "").split(":");
                         console.log("Item split");
                         console.log(ItemSplit);
                         if(ItemSplit[0] !== "" && ItemSplit[0] !== "\n" &&
                             ItemSplit[1] !== "" && ItemSplit[1] !== null) {
                             ItemChunk.title = ItemSplit[0];
                             ItemChunk.price = ItemSplit[1];
                             SectionChunk.SectionItems.push(ItemChunk);
                             allItems += ItemChunk;
                             id += 1;
                         }

                     }
                     console.log(SectionChunk);
                     this.MenuItems.push(SectionChunk);
                 }


                 EventBus.$emit('Changed', this.MenuItems);
                return allItems;
            }
        }
    }
</script>

<style scoped>

</style>