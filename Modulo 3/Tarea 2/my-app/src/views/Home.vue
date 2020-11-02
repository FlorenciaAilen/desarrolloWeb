<template>
  <div class="home">
    <div class="pelota"></div>
    <Calendar v-for="(d, index) in calendar" :key="index" :date="d.date" :info="d.info" :index="d.id"/>

   

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
    height: 200px;
    width: 100%;
    position: relative;
    top: -35px;
    z-index: -1;
    background-image: url("../assets/pelota.jpg");
    background-size: cover;

  }
</style>
