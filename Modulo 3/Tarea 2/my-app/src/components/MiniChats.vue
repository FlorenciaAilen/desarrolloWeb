<template>
  <div>
      <div class="circle"></div>
      <p>{{myGames[0]}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Minichat',
    computed:{
        ...mapState(['myGames']),
    }
}
</script>

<style scoped lang="scss">

    .circle{
        background: red;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

</style>