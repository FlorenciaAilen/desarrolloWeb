<template>
  <div class="home">
    <div class="pelota"></div>
     <b-container class="bv-example-row">
      <b-row class="row">
        <b-col class="col" v-for="(d,index) in calendar" :key="index"  cols="12" md="4">
          <Calendar :date="d.date" :info="d.info" :index="d.id"/>
        </b-col>
       </b-row>
     </b-container>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Calendar
  },
  data(){
    return{
      calendar: []
    };
  },
  methods:{
       getData: async function(api){
            let promise = await fetch(api)
            let isOk    = promise.ok
            let json;
            if(isOk){
                json = await promise.json()
            }else{
                alert(promise.status)
                return 0;
            }

            this.calendar = json
            console.log(this.calendar)
  }
},
beforeMount(){
        this.getData('calendar.json')
    }
}
</script>

<style scoped lang="scss">

  .pelota{
    height: 170px;
    width: 100%;
    position: relative;
    top: 0;
    z-index: -1;
    background-image: url("../assets/pelota.jpg");
    background-size: 100% 120%;
    background-repeat: no-repeat;

  }

  @media only screen and (min-width: 768px){
    .pelota{
      height: 280px;
      top: -8px;
    }

    
    
  }

</style>
