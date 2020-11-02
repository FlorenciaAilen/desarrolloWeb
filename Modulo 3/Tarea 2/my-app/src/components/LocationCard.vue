<template>
  <div>
      <router-link :to="'/detail/' + order">
      <div  class="container">
        <p>{{location}}</p>
      </div>
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

      
    

</style>