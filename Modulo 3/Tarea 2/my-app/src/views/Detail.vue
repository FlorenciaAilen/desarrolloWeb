<template>
  <div>
      <h2>{{myGames[0].locations[$route.params.order].name}}</h2>
      <p>{{myGames[0].locations[$route.params.order].adress}}</p>
      <iframe class="map" :src="myGames[0].locations[$route.params.order].map" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      <div class="goBack"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name:'Detail',
    computed:{
        ...mapState(['myGames'])
    }
}
</script>

<style scoped lang="scss">

    .map{
        width: 90%;
        height: 400px;
    }
</style>