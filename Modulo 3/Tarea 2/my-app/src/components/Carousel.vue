<template>

  <div class="carousel">

      <div class="allInfo">
          <h1>{{slideList[first].title}}</h1>
          <p>{{slideList[first].info}}</p>
      </div>

    <div class="d-flex justify-content-center">
      <div @click="changeSlide(0)" id="0" class="button active"><svg width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg></div>
      <div @click="changeSlide(1)" id="1" class="button"><svg  width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg></div>
      <div @click="changeSlide(2)" id="2" class="button"><svg width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg></div>
    </div>
 
  </div>

</template>

<script>
  export default {
      data(){
          return{
              first: 0
          }
      },
      props: ["slideList"],
      methods:{
          changeSlide(number){
              this.first = number;

              let divActive = document.getElementsByClassName("active")
              let newDivActive = document.getElementById(number)

              divActive[0].classList.remove("active")
              newDivActive.classList.add("active")
            }
        }
    }
  
</script>

<style scoped lang="scss">

   .carousel{
       height: 60vh;
       
    
    .allInfo{
        height: 70%;
    }

   }

   .button{
       margin: 0 20px;
       color: black;
   }

    .active{
        color: rgb(177, 214, 159);
    }

</style>

