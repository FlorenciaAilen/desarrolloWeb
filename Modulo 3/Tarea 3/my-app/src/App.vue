<template>
  <div id="app">
        <div class="flex">
          <Nav/>
          <div class="main-view"> <router-view/></div>
          <Footer/>
        </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components:{
    Nav,
    Footer
  },
  methods:{
    ...mapMutations(['insertGameInfo']),
    getGamesInfo: async function(api){
      let promise = await fetch(api)
      let isOk    = promise.ok
      let json;
      if(isOk){
        json = await promise.json()
      } else{
        alert(promise.status)
        return 0;
      }

      this.insertGameInfo(json);
    }
  },
  beforeMount(){
        this.getGamesInfo('gamesInfo.json')
    }
};
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }

  div{
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .flex{
    display: grid;
    height: 100vh;
    width: 100vw;
    align-content: space-between;
  }

</style>
