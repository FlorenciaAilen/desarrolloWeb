<template>
  <div class="gameInfo">
       <form action="">
          <label class="label-filter">
                <select placeholder="hola" v-model="checkedMonth"  id="month-filter" class="filter">
                  <option value="default">Filtered by Month</option>
                  <option v-for="(p,index) in months" :key="index" :value="p">{{p}}</option>
                </select>  
            </label>

            <label class="label-filter">
                <select placeholder="hola" v-model="checkedTeam"  id="month-filter" class="filter">
                  <option value="default">Filtered by Team</option>
                  <option v-for="(p,index) in teams" :key="index" :value="p">{{p}}</option>
                </select>  
            </label>
      </form>
    <b-container class="bv-example-row">
    <b-row>
    <b-col  v-for="(p,index) in filtered" :key="index" cols="12" md="6">
      <Collapse :team1="p.team1" :team2="p.team2" :date="p.day" :hour="p.time" :location="p.location" :order="locationOrder(p.location)"/>
        
     </b-col>

        </b-row>
        </b-container>
  </div>
</template>

<script>
import Collapse from "@/components/Collapse.vue";
import {mapState} from 'vuex';

export default {
    name: 'GameInfo',
    data() {
      return {
        order: '',
        months:[],
        teams:[],
        checkedMonth:'default',
        checkedTeam:'default'
      }
    },
    components:{
        Collapse
    },
    computed:{
        ...mapState(['myGames']),
        filteredMembers: function (){
            return this.members.filter(e => this.checkedParties.includes(e.party) && (this.checkedState == e.state || this.checkedState == 'All' ))
        },
        filtered: function (){
            return this.functionFilter()
        }
    },
     methods:{
        locationOrder(p){

            console.log(this.myGames[0].locations[0].name)

            let order

            for(let i = 0 ; i < this.myGames[0].locations.length ; i++){

                    
                    if(p == this.myGames[0].locations[i].name){
                        order = this.myGames[0].locations[i].id
                        console.log(this.myGames[0].locations)
                    }
               
                }
            return order
        },
        functionFilter(){
            let lista 

            if(this.checkedMonth == "default" ){
                lista = this.myGames[0].soccerGames.filter(e => (e.team1 == this.checkedTeam || e.team2 == this.checkedTeam || "default" == this.checkedTeam) )
            } else {
                lista = this.myGames[0].soccerGames.filter(e => (e.month == this.checkedMonth && (e.team1 == this.checkedTeam || e.team2 == this.checkedTeam || "default" == this.checkedTeam)))
            }

            return lista
        },
        insertMonth(){

            console.log(this.myGames[0].soccerGames[0].month)

            let meses = []

            for(let i = 0; i < this.myGames[0].soccerGames.length; i++){

                if(!meses.includes(this.myGames[0].soccerGames[i].month)){
                    this.months.push(this.myGames[0].soccerGames[i].month)
                    meses.push(this.myGames[0].soccerGames[i].month)
                }
                
            }
         
        },
        insertTeams(){
            for(let i = 0; i < this.myGames[0].teams.length; i++){
                this.teams.push(this.myGames[0].teams[i].name)
            }
        }
    },
    created:function(){
        this.insertMonth();
        this.insertTeams();
     
    }
    // beforeMount(){
    //     this.locationOrder()
    // }
   
}
</script>

<style scoped lang="scss">

    label{
        margin: 0 20px;
        select{
            margin-top: 30px;
            height: 30px;
        }
    }
</style>