<template>
  <div id="MenuArea" v-if="MenuItems.length !== 0">
    <div v-for="Section in MenuItems" v-bind:key="Section.SectionTitle" class="SelectionArea">
      <div class="SelectionTitle"><b>{{Section.SectionTitle}}</b></div>
      <div  v-for="SectionItem in Section.SectionItems" :key="SectionItem.id">
        <div class="SlectionItem">
        {{SectionItem.title}} : ${{SectionItem.price}}
        </div>
        <div class="OrderArea">
          <div v-on:click="MinusOrder(SectionItem)" class="ButtonHolder">
            <div class="OrderButtonsRed">
              <span>-</span>
            </div>
          </div>
          <div :key="SectionItem.OrderedItems" class="OrderedAmount">{{SectionItem.Ordered}}</div>
          <div v-on:click="AddOrder(SectionItem)" class="ButtonHolder">
            <div  class="OrderButtonsGreen">
              <span>+</span>
            </div>
          </div>
         </div>

      </div>
  </div>
  </div>
</template>

<script>
    //import Vue from 'vue';
    import {EventBus} from "../../App";

    export default {
      name: "MenuPage",
      data() {
            return {
                MenuItems: [
                ],
                OrderedItems: [

                ]
            }
        },
        methods: {
          AddOrder(SectionItem) {
              SectionItem.Ordered += 1;
              this.$forceUpdate();
              //console.log(SectionItem)
              EventBus.$emit('Changed', this.MenuItems);
            },
            MinusOrder(SectionItem) {
              if(SectionItem.Ordered >= 1) {
                  SectionItem.Ordered -= 1;
                  this.$forceUpdate();
                  EventBus.$emit('Changed', this.MenuItems);
              }
            }
        },
        mounted() {
          let self = this;
          EventBus.$on('Changed', changed => {
              self.MenuItems = changed;
              //console.log(`Oh, that's nice. It's gotten ${self.MenuItems} clicks! :)`);
          });

      }
    }

</script>

<style scoped>
.SelectionTitle {
  font-size: 8vw;
  font-weight: 300;
  font-family: 'Amatic SC', cursive;
  display: block;
  width: 100%;
  margin-bottom: 3vw;
}
.SlectionItem {
  display: inline-block;
  margin: 1.5vw;
  font-weight: 300;
  font-family: 'Amatic SC', cursive;
  font-size: 4vw;
  vertical-align: bottom;
}
.OrderedAmount {
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  margin-top: 1vw ;
  height: 3.5vw;
  width: 2vw;
}
  .SelectionArea {
    display: inline-block;
    margin: 2vw;
    width: auto;
    top: 0;
    vertical-align: center;
  }

  .OrderArea {
    font-family: 'Oswald', sans-serif;
    font-size: 2vw;
    margin: 2vw 0 2vw 0;
    display: inline-block;
  }
.ButtonHolder {
  width:2vw;
  height: 2vw;
  margin: 1vw;
  display: inline-block;
  vertical-align: central;

}
.OrderButtonsGreen, .OrderButtonsRed{
  font-family: 'Oswald', sans-serif;
  position:relative;
  text-decoration:none;
  color:black;
  font-size:1vw;
  box-sizing:border-box;
  transition: 0.5s;
  margin: initial;
}
.OrderButtonsGreen:hover, .OrderButtonsRed:hover {
  font-size:1.5vw;
  cursor: pointer;
}
.OrderButtonsGreen span, .OrderButtonsRed span{
  position:relative;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  width: 2vw;
  height: 2vw;
  margin: initial;
}
.OrderButtonsGreen span:before, .OrderButtonsRed span:before{
  content:'';
  width:100%;
  height:100%;
  display:block;
  position:absolute;
  border-radius:100%;
  border:0.3vw solid greenyellow;
  box-sizing:border-box;
  transition: all .85s cubic-bezier(0.25, 1, 0.33, 1);
  box-shadow: 0 30px 85px rgba(0,0,0,0.14), 0 15px 35px rgba(0,0,0,0.14);
}
.OrderButtonsGreen span:before {
  border:0.1vw solid greenyellow;
}
.OrderButtonsRed span:before {
  border:0.1vw solid orangered;
}
.OrderButtonsGreen:hover span:before, .OrderButtonsRed:hover span:before{
  transform:scale(1.2);
  box-shadow: 0 20px 55px rgba(0,0,0,0.14), 0 15px 35px rgba(0,0,0,0.14);
}

</style>