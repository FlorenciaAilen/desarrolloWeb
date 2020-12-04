<template>
<div>
  <img :src="img" alt="">
  <h1>Welcome</h1>
  <h4>{{name}}</h4>
</div>
</template>

<script>
export default {
    name:'Çard',
      props: ["name","img"]
}
</script>

<style scoped lang="scss">

    img{
      border-radius: 50%;
      width: 130px;
    }

</style>