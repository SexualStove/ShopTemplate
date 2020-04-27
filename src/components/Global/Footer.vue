<template>
  <div id="Footer">
    <div id="Options">
      <div class="Option"><router-link tag="div" to="/">Home</router-link> <div class="Line"></div></div>
      <div class="Option"><router-link tag="div" to="/#AboutArea">About</router-link> <div class="Line"></div></div>
      <div class="Option"><router-link tag="div" to="/Menu"> Menu  </router-link><div class="Line"></div></div>
      <div class="Option"><router-link tag="div" to="/Menu#OrderHerf"> Order </router-link> <div class="Line"></div></div>
    </div>
    <div id="Quote"> When looking for great and authentic food, Shirley Takeaways is where you wanna be!</div>
    <div id="Copyright">Copyright © 2020 In House Web. All Rights Reserved. Designed by In House Web.</div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
#Footer {
  background-image: url("../../assets/images/dust_scratches.png");
  width: 100vw;
  height: 30vh;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-template-columns: 30% 70%;
  display: grid;
  grid-template-areas: "Options Meat"
  "Options Meat"
  "Options Meat"
  "Options Meat"
  "Bottom Bottom";
}

.Option {
  display: inline-block;
  //height: 100%;
  margin-bottom: 0.4vw;
  margin-left: 7vw;
  margin-right: 12vw;
  cursor: pointer;
  font-size: 2vw;
  font-family: 'Oswald', sans-serif;
}
.Option:hover .Line {
  width: 110%;
}
.Line {
  transform: translate(-0.2vw, -0.2vw);
  width: 2vw;
  height: 2px;
  background-color: black;
  transition: 1.5s  ;
}
  #Options {
    grid-area: Options;
  }
  #Quote {
    grid-area: Meat;
    font-family: 'Amatic SC', cursive;
    font-size: 3.4vw;
    margin: 1vw;
  }
  #Copyright {
    grid-area: Bottom;
  }
</style>