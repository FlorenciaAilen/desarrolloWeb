<template>
  <div>
    <template v-if="user == null">
        <LoginCard/>
    </template>
    <template v-else>
        <div class="d-flex align-items-center justify-content-center flex-column">
            <Card :img="user.photoURL" :name="user.displayName"/>
            <b-button class="logout" @click="logout()" variant="outline-primary">LOG OUT</b-button>
        </div>
    </template>

    
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import LoginCard from "@/components/LoginCard.vue";
import firebase from "firebase/app";
import "firebase/auth";
import {mapState} from 'vuex';


export default {
    name:'Profile',
    components:{
        Card,
        LoginCard
        
    },
    computed:{
        ...mapState(['user']),
        
    },
    methods: {
        logout(){

            firebase
            .auth()
            .signOut()
            .then(()=>{
                console.log("Logged out")
            })
            .catch(error => {
                console.log(error.code)
            })
        }
    }
}
</script>

<style scoped lang="scss">

   
</style>