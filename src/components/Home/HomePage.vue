<template>
  <div id="WholePage">
    <HomePageSplashScreen></HomePageSplashScreen>
    <About></About>
    <MenuPage></MenuPage>
    <CreateMenu></CreateMenu>
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import About from "./About";
    import CreateMenu from "../MenuPage/CreateMenu";
    import MenuPage from "../MenuPage/MenuPage";
    export default {
        components: {MenuPage, CreateMenu, About, HomePageSplashScreen}
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
  #WholePage {
    width: 100vw;
  }
</style>