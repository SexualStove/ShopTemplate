<template>
  <div style="margin-bottom: 30vw">
    <div id="TitleCard"><b> Order </b> </div>
    <div id="OrdersPage">
      <div id="receiptChunk">
        <div class="Title">Receipt</div>
        <div v-for="Order in OrderedItems" :key="Order.id">
          <div class="OrderedItem">
           - {{Order.title}} x{{Order.Ordered}}
          </div>
        </div>
        <div id="Pirce">
          Total: ${{TotalPrice.toFixed(2)}}
        </div>
      </div>



      <div id="UserDetailsPage">
        <div class="Title"> Your Details </div>
        <div id="Details">
          <label for="Name">Name</label>
          <input type="text" id="Name" name="Name" value="">

          <label for="Email">Email</label>
          <input type="text" id="Email" name="Email" value="">

          <div id="Explanation">Phone number to ring when order is done and invite inside <br>
          Or plate number to deliver to car</div>

          <label for="Phone">Phone Number</label>
          <input type="text" id="Phone" name="Phone" value="">

          <label for="Plate">Car licence plate</label>
          <input type="text" id="Plate" name="Plate" value="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {EventBus} from "../../App";

    export default {
        name: "OrderCustomerView",
        data() {

            return {
                MenuItems: [
                ],
                OrderedItems: [
                ],
                TotalPrice: 0,

            }
        },
        computed: {

        },
        methods: {
        },
        mounted() {
            let self = this;
            EventBus.$on('Changed', changed => {
                self.TotalPrice = 0;
                self.MenuItems = changed;
                console.log(self.MenuItems);
                let i;
                let OrderedList = [];
               // console.log(this.MenuItems);

                for(i=0; i< self.MenuItems.length; i++) {
                    console.log(self.MenuItems[i]);
                    for(let n=0; n < self.MenuItems[i].SectionItems.length; n++) {

                        if(self.MenuItems[i].SectionItems[n].Ordered >= 1) {
                            OrderedList.push(self.MenuItems[i].SectionItems[n]);
                            self.TotalPrice +=   parseFloat(self.MenuItems[i].SectionItems[n].price)*
                                parseInt(self.MenuItems[i].SectionItems[n].Ordered);
                        }
                    }
                }
                self.OrderedItems = OrderedList;
            });
        }
    }

</script>

<style scoped>
#OrdersPage {
  grid-template-columns: 50% 50%;
  grid-template-areas: "Receipt User";
  display: grid;
  font-family: 'Oswald', sans-serif;
  justify-content: center;
  align-items: center;
  align-content: center;
}
  #TitleCard {
    margin: 3vw 0 1vw 0;
    font-size: 15vw;
    font-family: 'Amatic SC', cursive;

  }
#Pirce {
  margin: 2vw;
  font-size: 3vw;
}
  .Title {
    font-size: 4vw;
    margin: 1vw;
  }
  .OrderedItem {
    font-size: 2vw;
    text-align: left;
    margin: 0.5vw;
  }
  #receiptChunk {
    grid-area: Receipt;
    display: inline-block;
    width: 60%;
    align-self: center;
    justify-self: center;
  }


  #UserDetailsPage {
    grid-area: User;
    vertical-align: top;
    top: 0;
   }

input[type=text] {
  width: 50%;
  padding: 12px 20px;
  //margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  display: block;
  justify-self: center;
  align-self: center;
  horiz-align: center;
  margin: 0.5vw 0 1vw 25% ;
}

input[type=text]:focus {
  border: 3px solid #555;
}
  #Explanation {
    font-size: 1.5vw;
    margin: 1vw;
    font-weight: 300;
  }
</style>