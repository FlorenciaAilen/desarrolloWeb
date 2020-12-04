<template>
  <div id="container" class="container-calendar d-flex align-items-center justify-content-center">
      <div class="calendar"><svg width="40px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" class="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></div>
      <div class="box"> 
          <p class="date">{{date}}</p>
          <p>{{info}}</p>
      </div>
  </div>
</template>

<script>

export default {
    name: 'calendar',
    props:['date','info','index'],
    methods: {
        odd: function (){
            let container = document.getElementById("container")
            if(this.index % 2 == 0){
                container.classList.add("flex-row-reverse");
            }
             
        }
    }
}
</script>

<style scoped lang="scss">

.container-calendar{
    margin: 20px 0;
    .calendar{
        margin-right: 20px;
    }
    .box{
        background: rgb(177, 214, 159);
        width: 70%;
        height: auto;
        border-radius: 8%;

        .date{
            font-weight: bold;
            margin-top: 5px;
        }
    }
}

@media only screen and (min-width: 768px){
    #container{
        flex-direction: column;
        .calendar{
            margin-bottom: 10px;
        }

        .box{
            width: 22vw;
            height: 20vh;
            
        }
    }

}
</style>