<template>

    <div id="Nav-content">
      <router-link tag="div" to="/"><div id="Title"> ST </div></router-link>
      <div id="navOptions">
        <div class="Option"><router-link tag="div" to="/#AboutArea">About</router-link> <div class="Line"></div></div>
        <div class="Option"><router-link tag="div" to="/Menu"> Menu  </router-link><div class="Line"></div></div>
        <div class="Option"><router-link tag="div" to="/Menu#OrderHerf"> Order Online </router-link> <div class="Line"></div></div>
      </div>
      <div class="footer-social-links">
        <a href="#" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
        <a href="#" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
        <a href="#" title="Google+" target="_blank"><i class="fa fa-google-plus"></i></a>
      </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                Reverse: true,
                FirstTime: false,
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped>
  @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
  #Nav-content {
    grid-area: Nav;
    width: 100vw;
    background-image: url("../../assets/images/dust_scratches.png");
  }
  #Nav-content {
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: 10% 60% 30%;
    grid-template-areas:
      "Title Options Socials"
  }
  #Title {
    font-size: 3vw;
    font-weight: 600;
    font-family: 'Amatic SC', cursive;
    display: inline-block;
    width: 4vw;
    grid-area: Title;
    border-radius: 100%;
    border: slategray solid 3px;
    margin-left: 4vw;
    cursor: pointer;
  }
  #navOptions {
    grid-area: Options;
  }
  .Option {
    display: inline-block;
    height: 100%;
    margin-left: 5vw;
    margin-right: 5vw;
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
  .Option:first-child {
    margin-left: 0vw;
  }


  .footer-social-links{
    font-size: 0.8vw;
    text-align: center;
    //margin-top: 20%;
    grid-area: Socials;
    //transform: translateX(-29vw);
    width: 30vw;
  }
  .footer-social-links a{
    width: 1.5vw;
    height: 1.5vw;
    line-height: 1.5vw !important;
    position: relative;
    margin: 0 0.3vw;
    text-align: center;
    display: inline-block;
    color: #111;

    -webkit-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    -moz-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    -o-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    -ms-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
  }
  .footer-social-links a i,
  .footer-social-links a span{
    position: relative;
    top: 0.1vw;
    left: 0.05vw;
  }
  .footer-social-links a:before{
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #111;

    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

    -webkit-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    -moz-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    -o-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    -ms-transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);
    transition: all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000);

  }
  .footer-social-links a:hover{
    color: #fff;
  }
  .footer-social-links a:hover:before{
    background: #111;
  }
</style>