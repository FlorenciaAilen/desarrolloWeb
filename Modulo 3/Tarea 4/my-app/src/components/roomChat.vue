<template>
  <div id="roomChat" >
      <div><h1>CHAT</h1></div>
      <div class="body">
          <div v-for="(message,index) in messages" :key="index" class="bubble">
              <p>
                  <strong>
                      {{message.author}}:
                  </strong>
              </p>

              <p>
                  {{message.body}}
              </p>
          </div>
      </div>
       <div class="write">
            <input type="text" placeholder="Enter your message..." id="box" />
            <div class="send" @click="post()"><svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg></div>
           
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {db} from '../firebase/db';
export default {
    name:'roomChat',
    data(){
        return{
            messages:[]
        }
    },
    methods:{
        post: function(){
            let folder = db.ref("forum/match" + this.$route.params.id)
            let input = document.getElementById("box");
            let message = {
                body: input.value,
                author:this.user.displayName,
                date: new Date()
            }

            folder.push(message)

            input.value = "";
        }
    },
    computed:{
        ...mapState(['user'])
    },
    mounted(){
        this.messages = [];
        db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot) => {
            this.messages.push(snapshot.val())
        })
    }
}
</script>

<style scoped lang="scss">
    #roomChat{
        height: 200%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
 

        .bubble{
            background-color: rgb(177, 214, 159);
            min-width: 250px;
            min-height: 80px;
            margin: 10px 0;
            border-radius: 20px;
        }

        .write{
           display: flex;
           flex-direction: row;
           position: sticky;
           bottom: 0;
           width: 100%;
           justify-content: center;
            background: white;

           .send{
               margin-left: 10px;
           }
           
        }

    }
</style>