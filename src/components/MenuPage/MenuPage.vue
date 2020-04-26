<template>
  <div id="MenuArea" v-if="MenuItems.length !== 0">
    <div v-for="Section in MenuItems" v-bind:key="Section.SectionTitle" class="SelectionArea">
      <div class="SelectionTitle"><b>{{Section.SectionTitle}}</b></div>
      <div  v-for="SectionItem in Section.SectionItems" v-bind:key="SectionItem.title">
        <div class="SlectionItem">
        {{SectionItem.title}} : {{SectionItem.price}}$
        </div>
        <div class="OrderArea">
          <div class="ButtonHolder">
            <div class="OrderButtonsRed">
              <span>-</span>
            </div>
          </div>
          <div class="OrderedAmount">{{SectionItem.Ordered}}</div>
          <div class="ButtonHolder">
            <div class="OrderButtonsGreen">
              <span>+</span>
            </div>
          </div>
         </div>

      </div>
  </div>
  </div>
</template>

<script>
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
      mounted() {
        let self = this;
        EventBus.$on('Changed', changed => {
          self.MenuItems = changed;
          console.log(`Oh, that's nice. It's gotten ${self.MenuItems} clicks! :)`);
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
  display: block;
  margin: 2vw;
  font-weight: 300;
  font-family: 'Amatic SC', cursive;
  font-size: 4vw;
}
.OrderedAmount {
  display: inline-block;
  vertical-align: center;
}
  .SelectionArea {
    display: inline-block;
    margin: 3vw;
    width: auto;
    top: 0;
    vertical-align: center;
  }

  .OrderArea {
    font-family: 'Oswald', sans-serif;
    font-size: 2vw;
  }
.ButtonHolder {
  width:3vw;
  margin: 1vw;
  display: inline-block;
  vertical-align: top;

}
.OrderButtonsGreen, .OrderButtonsRed{
  font-family: 'Oswald', sans-serif;
  position:relative;
  text-decoration:none;
  color:black;
  font-size:2vw;
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
  width: 3vw;
  height: 3vw;
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
  border:0.3vw solid greenyellow;
}
.OrderButtonsRed span:before {
  border:0.3vw solid orangered;
}
.OrderButtonsGreen:hover span:before, .OrderButtonsRed:hover span:before{
  transform:scale(0.8);
  box-shadow: 0 20px 55px rgba(0,0,0,0.14), 0 15px 35px rgba(0,0,0,0.14);
}

</style>