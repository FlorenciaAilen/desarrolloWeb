<template>
  <div>
      <div id="body">
        <div>
          <svg width="120" height="120" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
        </div>

        <div>
          <h2>MEMBER LOGIN</h2>
          <h5>Login With</h5>
          <div @click="login()" class="google"><svg width="50" height="50" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></div>
        </div>
      </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import {mapState} from 'vuex';

export default {
    name:'LoginCard',
    computed:{
        ...mapState(['user']),
        
    },
    methods:{
       login(){
            let provider = new firebase.auth.GoogleAuthProvider()

            firebase
            .auth()
            .signInWithPopup(provider)
            .then(result =>{
                console.log("Logged in " + result.user.email)
                console.log(result)
            })
            .catch(error => {
                console.log(error.code)
            })

        },
    }
}
</script>

<style scoped lang="scss">
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
  
    #body{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction:column;
      height: 60vh;
      width: 80vw;
      position: relative;

      .google{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        height: 60px;
        width: 60px;
      }

    }
  }




</style>