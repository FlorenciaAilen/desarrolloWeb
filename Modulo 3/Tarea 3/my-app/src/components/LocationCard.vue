<template>
  <div id="div-container">
      <router-link :to="'/detail/' + order">
      <div  class="container">
        <div class="d-none d-sm-block"><svg width="50" hight="50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></div>
          <p class="d-block d-sm-none">{{location}}</p> 
      </div>
      <p class="d-none d-sm-block">{{location}}</p>
      </router-link>
  </div>
</template>

<script>


export default {
  name: 'LocationCard',
  props:["location","order"]
}
</script>

<style scoped lang="scss">
  

  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    max-width: 100%;
    height: 60px;
    background: rgb(177, 214, 159);
    margin: 20px 0px;

    p{
      margin: 0;
      height: auto;
      color: #033949;
      text-decoration: none;
                
    }
  }

@media only screen and (min-width: 576px){

    #div-container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
   .container{
     border-radius: 50%;
     width: 180px;
     height: 180px;
   }
}
    

</style>