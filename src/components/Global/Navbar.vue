<template>

    <div id="Nav-content">
      <div id="Title"> ST </div>
      <div id="navOptions">
        <div class="Option">About</div>
        <div class="Option">Menu</div>
        <div class="Option">Order Online</div>
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
  #Nav-content {
    grid-area: Nav;
    width: 100vw;
    background-color: lightblue;
  }
  #Nav-content {
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-areas:
      "Title Options Options"
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
  }
  #navOptions {
    grid-area: Options;
  }
  .Option {
    display: inline-block;
    height: 100%;
    margin-left: 10vw;
    margin-right: 10vw;
    cursor: pointer;
  }
</style>