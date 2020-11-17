<template>

    
    <div>
            <b-button
                id="box"
                :class="visible ? null : 'collapsed'"
                :aria-expanded="visible ? 'true' : 'false'"
                aria-controls="collapse-4"
                @click="visible = !visible"
            >
                <div class="date">
                    {{date}}
                </div>
              
                <div class="teams d-flex align-items-center justify-content-center ">
                    <div class="circle">
                        <p>{{team1}}</p>
                    </div>
                    <div class="linea"></div>
                    <div class="circle">
                        <p>{{team2}}</p>
                    </div>
                    
                </div>
               
            </b-button>
            <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                <b-card class="container">
                    <div class="hour d-flex align-items-center justify-content-center">
                        <p>{{hour}}</p>
                        <div class="svg-container"><svg width="25px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg></div>
                        
                    </div>
                    <div class="location d-flex align-items-center justify-content-center">
                        <router-link :to="'/detail/' + order">
                            <p>{{location}}</p>
                        </router-link>

                        <div class="svg-container"><svg width="25px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" class="svg-inline--fa fa-map-marked-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></div>
                        
                    </div>
                </b-card>
            </b-collapse>
       
    </div>

  
 
</template>

<script>
import {mapState} from 'vuex';

export default {
    name:'collapse',
    props: ["team1","team2","date","hour","location","color","order"],
    data() {
      return {
        visible: false
      }
    },
    computed:{ 
        ...mapState(['myGames'])
    }
        
}



</script>

<style scoped lang="scss">


#box{
    height: 80px;
    width: 100%;
    background: rgb(177, 214, 159);
    position: relative;
    margin-top: 50px;
    
     
    .date{
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 5px;
        font-size: 22px;
        font-weight: bold;
    
    }

    .circle{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: white;
    

        p{
            text-align: center;
            margin-top: 25%;
            color: black;
            font-size: 20px;
            font-weight: bold;
        
        }
        
    }

    .linea{
        background: black;
        width: 10px;
        height: 3px;
        margin: 0 30px;
    }
}

.container{
    background: #0f2f38;

    .hour, .location{
        margin-bottom: 10px;
        color: white;
        p{
            margin: 0;
            width: 150px;
           
            
            
        }
    }
}




</style>