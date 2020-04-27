<template>
  <div>
    <div id="RuleTitle"> We allow for you to edit the menu yourself! </div>
    <div id="RuleHolder">
      <div class="Rule">- Easy to remove or add new menu items!</div>
      <div class="Rule">- Only the owner can change the menu</div>
      <div class="Rule">- Separate items with ","</div>
      <div class="Rule">- To make a section use, "-" before the section title</div>
      <div class="Rule">- Text entered into the box below is previewed in the menu above. Play around with it to see the change!</div>
    </div>
    <div id="InputZone">
      <label for="MenuInput"></label><textarea id="MenuInput" rows="12" cols="70">
    </textarea>
    </div>
    <button v-on:click="getMenuInput">Change</button>



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
                        id: 0,
                        SectionItems: [ {
                            id: -1,
                            Ordered: 0,
                            title: "Example Item",
                            price: 99.99,
                        }]
                    },

                ],
                startedOnce: false,
                StartingString: "-Fish and chips,\n" +
                    "      \n" +
                    "      Fish:3.50,\n" +
                    "      Chips:2.60,\n" +
                    "      Hot Dog:1.50,\n" +
                    "\n" +
                    "-Chinese,\n" +
                    "      BBQ chicken: 12.50,\n" +
                    "      Lemon Chicken: 14.00,\n" +
                    "      Sweet and sour pork: 15.00"
            }
        },
        beforeMount() {
            document.getElementById("MenuInput").value = this.StartingString;
            this.getMenuInput();

        },
        mounted() {
            if(this.startedOnce === false) {
                document.getElementById("MenuInput").value = this.StartingString;
                this.getMenuInput();
                this.startedOnce = true;
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
                let SectionId = 0;
                let sectionString =[];
                sectionString = document.getElementById("MenuInput").value.split("-");
                //menuString = document.getElementById("MenuInput").value.split(",");
                //console.log(menuString);
                 for(let i=1; i < sectionString.length; i++) {
                     SectionChunk = [];
                     //console.log("Secotion string");
                     //console.log(sectionString);
                     menuString = sectionString[i].split(",");
                     //console.log("Menu string on split");
                     //console.log(menuString);
                     SectionChunk.SectionTitle = menuString[0];
                     SectionChunk.id = SectionId;
                     SectionChunk.SectionItems = [];
                     menuString = menuString.slice(1);
                     //console.log("Meu string on slice");
                     //console.log(menuString);
                     SectionId += 1;
                     for(let i=0; i < menuString.length; i++) {
                         ItemChunk = [];
                         ItemChunk.id = id;
                         let ItemSplit = menuString[i].replace("\n", "").split(":");
                         //console.log("Item split");
                         //console.log(ItemSplit);
                         if(ItemSplit[0] !== "" && ItemSplit[0] !== "\n" &&
                             ItemSplit[1] !== "" && ItemSplit[1] !== null) {
                             ItemChunk.title = ItemSplit[0];
                             ItemChunk.price = ItemSplit[1];
                             ItemChunk.Ordered = 0;
                             SectionChunk.SectionItems.push(ItemChunk);
                             allItems += ItemChunk;
                             id += 1;
                         }

                     }
                     //console.log(SectionChunk);
                     this.MenuItems.push(SectionChunk);
                 }


                 EventBus.$emit('Changed', this.MenuItems);
                return allItems;
            }
        }
    }
</script>

<style scoped>
#RuleTitle {
  font-family: 'Oswald', sans-serif;
  font-size: 3vw;
  font-weight: 200;
}
  .Rule {
    text-align: left;
    width: auto;
    margin: 0.5vw;
  }
  #RuleHolder {
    font-family: 'Oswald', sans-serif;
    font-size: 1.2vw;
    font-weight: 200;
    display: inline-block;
    margin: 3vw;
  }
</style>