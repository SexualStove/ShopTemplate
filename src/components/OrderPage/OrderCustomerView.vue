<template>
  <div id="WholePage" >
    <div id="TitleCard"><b> Order </b> </div>
    <div id="OrdersPage">
      <div id="receiptChunk">
        <div class="Title">Receipt</div>
        <div class="OrderedItem" style="text-align: center" v-if="TotalPrice <= 0">
          No items added yet.
        </div>
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

          <div class="Explanation">Phone number to ring when order is done and invite inside <br>
          Or plate number to deliver to car</div>

          <label for="Phone">Phone Number</label>
          <input type="text" id="Phone" name="Phone" value="">

          <label for="Plate">Car licence plate</label>
          <input type="text" id="Plate" name="Plate" value="">
        </div>
      </div>
      <div class="Explanation" id="ExeplantionOrder">Try It!<br>
      Don't worry it'll just show you what the customer and business get after clicked</div>
      <button v-on:click="MakeOrder" class="button button1">Place Order</button>

      <div class="Emails" id="CustomerEmail" v-if="Details.name !== ''">
        <h1>Email to customer:</h1>
        Thank you for ordering {{Details.name}}! <br>
        You have ordered: <br>
        <div v-for="Order in OrderedItems" :key="Order.id">
          <div>
            - {{Order.title}} x{{Order.Ordered}}<br>
          </div>
        </div> <br>
        Which comes to a total of ${{TotalPrice}}<br><br>
        We will give you a call on {{Details.phone}} when the order is ready!
      </div>
      <div  class="Emails" id="BussinessEmail"  v-if="Details.name !== ''">
        <h1>Email to Business:</h1>
        New Order!<br>
        Order Processed at: {{Details.TimeOf}}<br>
        Customer Name: {{Details.name}}<br>
        Customer Phone: {{Details.phone}}<br>
        Customer Email: {{Details.email}}<br>
        Customer Plate number: {{Details.plate}}<br><br>

        They have ordered: <br>
        <div v-for="Order in OrderedItems" :key="Order.id">
          <div>
            - {{Order.title}} x{{Order.Ordered}}<br>
          </div>
        </div> <br>
        Which comes to a total of ${{TotalPrice}}<br>
      </div>
    </div>

  </div>
</template>

<script>
    import {EventBus} from "../../App";
    import BlogController from "../../services/BlogServices";

    export default {
        name: "OrderCustomerView",
        data() {

            return {
                MenuItems: [
                ],
                OrderedItems: [
                ],
                TotalPrice: 0,
                Details: {
                    name: '',
                    email: null,
                    phone: null,
                    plate: null,
                    TimeOf: null,
                },
                BusEmail: "",
            }
        },
        computed: {

        },
        methods: {
            MakeOrder() {
                /*this.CusEmail += "Thank you for ordering "+document.getElementById('Name').value+"! \n"
                this.CusEmail += "You have ordered: \n"
                for(let i; i < this.OrderedItems; i++) {
                    let Order = this.OrderedItems[i];
                    this.CusEmail += "- "+Order.title+" x"+Order.Ordered+"\n"
                }
                this.CusEmail += "\n \n This comes to a total of $"+this.TotalPrice;
                this.CusEmail += "\n \n Thank you for ordering from Sherily Takeaways!"
                console.log(this.CusEmail);*/
                this.Details.name = document.getElementById('Name').value;
                this.Details.email = document.getElementById('Email').value;
                this.Details.phone = document.getElementById('Phone').value;
                this.Details.plate = document.getElementById('Plate').value;
                this.Details.TimeOf = new Date(new Date().getTime() + 12*60*60*1000).toLocaleTimeString();

                console.log(this.OrderedItems);
                console.log(this.OrderedItems[0]);
                var fullOrder = [];

                for (let i = 0; i < this.OrderedItems.length; i++) {
                  var singleItem = [this.OrderedItems[i].title,
                               this.OrderedItems[i].Ordered,
                               this.OrderedItems[i].price];
                  fullOrder.push(singleItem);
                }

                console.log(fullOrder);
                let order = {
                  Name: this.Details.name,
                  Email: this.Details.email,
                  Phone: this.Details.phone,
                  Plate: this.Details.plate,
                  TimeOf: this.Details.TimeOf,
                  Order: fullOrder,
                  Total: this.TotalPrice
                };

                BlogController.SendOrder(order);
            }
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
  #WholePage {
    background-image: url("../../assets/images/lined_paper.png");
    padding-bottom: 5vw;
  }
#OrdersPage {
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-areas: "Receipt Receipt Receipt Receipt Receipt Receipt Receipt User User User"
  "explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation"
  "button button button button button button button button button button"
  "Customer Customer Customer Customer Customer Bussiness Bussiness Bussiness Bussiness Bussiness";
  display: grid;
  font-family: 'Oswald', sans-serif;
  justify-content: center;
  align-items: center;
  align-content: center;
}
  #TitleCard {
    padding: 3vw 0 1vw 0;
    font-size: 10vw;
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
    background-color: rgba(250, 231, 203, 0.3);
    grid-area: Receipt;
    display: inline-block;
    width: 60%;
    align-self: center;
    justify-self: center;
    border-radius: 50px;
  }


  #UserDetailsPage {
    border-radius: 25px;
    grid-area: User;
    vertical-align: top;
    top: 0;
    background-image: url("../../assets/images/email-pattern.png");
   }

input[type=text] {
  width: 70%;
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
  margin: 0.5vw 0 1vw 17% ;
}

input[type=text]:focus {
  border: 3px solid #555;
}
  .Explanation {
    font-size: 1.5vw;
    margin: 1vw;
    font-weight: 300;
  }
#ExeplantionOrder {
  grid-area: explanation;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 1vw 2vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1vw;
  margin: 1vw 0 0 0;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 20vw;
  border-radius: 25px;
  justify-self: center;
  align-self: center;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  grid-area: button;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

  #CustomerEmail {
    grid-area: Customer;
  }
  #BussinessEmail {
    grid-area: Bussiness;
  }
  .Emails {
    top: 0;
    vertical-align: top;

  }
</style>