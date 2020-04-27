<template>
  <div id="Capsule">
    <div id="CenterWindow">
      <Navbar></Navbar>
      <div id="SplashPage">
        <div id="MainTitle">
          <div id="ShopTitle">  Menu </div>
          <div id="Line"></div>
          <div id="SubTitle"> Locally sourced and ethically produced </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import Navbar from "../Global/Navbar.vue";
    import {  TimelineMax, Back } from "gsap"
    import JQuery from 'jquery';
    let $ = JQuery;
    export default {
        components: {Navbar},
        mounted() {
            let LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#Line', 2, {width: "-1vw", ease:Back.easeInOut(0.4)}, "+=0.5").from(
                '#ShopTitle', 1, {y: "1vw", opacity: 0, ease:Back.easeInOut(0.4)}, "-=0.7").from(
                '#SubTitle', 1, {y: "-1vw", opacity: 0, ease:Back.easeInOut(0.4)}, "-=0.1")
        },
        methods: {
            ServiceClick() {
                $('html, body').animate({
                    scrollTop: $("#MainWindow").offset().top -400
                }, 2000);
            }
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
  #Capsule, #CenterWindow {
    width: 100vw;
    height: 100vh;
  }
  #CenterWindow {
    width: 100vw;
    display: grid;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    grid-template-areas:
      "Nav"
      "Main"
      "Main"
      "Main"
      "Main"
      "Main"
      "Main"
      "Main"
      "Main"
      "Main";
    justify-content: center;
  }
  #Nav-content {
    grid-area: Nav;

  }

  #SplashPage {
    grid-area: Main;
    background-image: url("../../assets/images/FishnChipMenu.jpg");
    background-size: cover ;
    background-position: 0 0vh;
    justify-content: center;
    display: inline-block;
    width: 100%;
  }
  #MainTitle {
    position: absolute;
    justify-self: center;
    font-family: 'Amatic SC', cursive;
    width: 100vw;
    top: 30%
  }
  #ShopTitle {
    font-size: 8vw;
  }
  #SubTitle {
    font-size: 3vw;
  }
  #Line {
    background-color: black;
    width: 25vw;
    height: 1px;
    justify-self: center;
    align-self: center;
    margin-left: 37.5vw
  }

</style>