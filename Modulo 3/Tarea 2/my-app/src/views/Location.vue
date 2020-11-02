<template>
  <div>
      <LocationCard v-for="(p,index) in myGames[0].locations" :key="index" :location="p.name" :order="p.id" />
  </div>
</template>

<script>
import LocationCard from "@/components/LocationCard.vue";
import {mapState} from 'vuex';

export default {
    name:'Location',
    components:{
      LocationCard
    },
    computed:{
        ...mapState(['myGames'])
    }
}
</script>

<style scoped>

</style>