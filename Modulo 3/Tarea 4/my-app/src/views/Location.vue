<template>
  <div>
    <b-row>
      <b-col   v-for="(p,index) in myGames[0].locations" :key="index"  cols="12" sm="6" md="4">
        <LocationCard :location="p.name" :order="p.id" />
      </b-col>
    </b-row>
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

<style>

</style>