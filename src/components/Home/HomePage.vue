<template>
  <div id="WholePage">
    <HomePageSplashScreen></HomePageSplashScreen>
    <About></About>
    <hr class="section-break" />
    <Footer></Footer>
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import About from "./About";
    import Footer from "../Global/Footer";
    export default {
        components: {Footer,  About, HomePageSplashScreen}
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
  #WholePage {
    width: 100vw;
  }
  #MenuArea {
    background-image: url("../../assets/images/triangle-mosaic.png");
    padding-bottom: 3vw;
  }
  .section-break {
    background-color: #4d4d4d;
    border: 0;
    border-top: 1px solid #4d4d4d;
    height: 1px;
    margin: initial;
    text-align: center;
    width: 100%;
  }
  .section-break:before {
    background-color: snow;
    color: #1a1a1a;
    content: '\25C9';
    display: inline-block;
    font-size: 1.6rem;
    left: 50%;
    line-height: 1;
    padding: 0 0.5rem;
    text-rendering: geometricPrecision;
    transform: translateY(-53%);
    z-index: 1;
  }
</style>