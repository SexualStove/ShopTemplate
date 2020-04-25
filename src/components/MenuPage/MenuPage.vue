<template>
  <div id="MenuArea" v-if="MenuItems.length !== 0">
    <div v-for="Section in MenuItems" v-bind:key="Section.SectionTitle" class="SelectionArea">
      <div class="SelectionTitle"><b>{{Section.SectionTitle}}</b></div>
      <div  v-for="SectionItem in Section.SectionItems" v-bind:key="SectionItem.title">
        <div class="SlectionItem">
        {{SectionItem.title}} : {{SectionItem.price}}$
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
  font-weight: 600;
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
  .SelectionArea {
    display: inline-block;
    margin: 3vw;
    width: auto;
  }
</style>