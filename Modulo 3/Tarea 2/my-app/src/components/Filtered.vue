<template>
  <div>
      <form action="">
          <label class="label-filter">
                <select placeholder="hola" v-model="checkedState"  id="month-filter" class="filter">
                  <option value="">Filtered by Month</option>
                  <option value="s">hello</option>
                </select>  
            </label>
      </form>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Filtered',
    data(){
        return{
            checkedMonth: ''
        }
    },
     computed:{
        ...mapState(['myGames'])
    }
}
</script>

<style scoped lang="scss">

    select{
        width: 200px;
    }
</style>