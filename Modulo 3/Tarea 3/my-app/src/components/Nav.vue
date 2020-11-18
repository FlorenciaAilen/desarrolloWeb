<template>
<div>
<b-navbar class="nav" toggleable type="dark">
    <router-link to="/" >
        <img width="65px" src="../assets/logo.png" alt="">
    </router-link>
    <b-navbar-brand id="title" href="#">{{title}}</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto container">

            <b-nav-item>
                <router-link to="/"  class="d-flex justify-content-center align-items-center">
                    <div class="home-icon">
                        <svg width="30px" height="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                    </div>

                    <div >
                        <p>Home</p> 
                    </div>
                </router-link>
            </b-nav-item>

            <b-nav-item>
                <router-link to="/about" class="d-flex justify-content-center align-items-center">
                    <div class="home-icon">
                        <svg width="30px" height="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="svg-inline--fa fa-info-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                    </div>
                    <div >
                        <p>About</p> 
                    </div>
                </router-link>
            </b-nav-item>
          
            <b-nav-item>
             <router-link to="/gameInfo" class="d-flex justify-content-center align-items-center">
              
                <div class="home-icon game-info" >
                    <svg width="30px" height="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="futbol" class="svg-inline--fa fa-futbol fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"></path></svg>
                </div>
                <div >
                    <p>Game Info</p> 
                </div>
            
             </router-link>
            </b-nav-item> 

            <b-nav-item>
             <router-link to="/location" class="d-flex justify-content-center align-items-center">
                <div class="home-icon location">
                    <svg width="30px" height="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" class="svg-inline--fa fa-map-marked-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg>
                </div>

                <div >
                    <p>Location</p> 
                </div>
             </router-link>
            </b-nav-item>

            <b-nav-item>
             <router-link to="/chat" class="d-flex justify-content-center align-items-center">
                <div class="home-icon chat">
                    <svg width="30px" height="30px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg>
                </div>
                <div >
                    <p>Chat</p> 
                </div>
             </router-link>
            </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> 
</div>
</template>

<script>
export default {
    data: function(){
        return{
            title: 'NSYL'
        }
    }

}
</script>

<style scoped lang="scss">

    button{
        margin-right: 15px;
    }

    .navbar{
        background-color:#033949;
    }

    #title{
        font-size: 40px;
    }

    p{
        font-size: 25px;
        margin: 0;
        padding: 0;
        color: whitesmoke;
        text-decoration: none;
        margin: 5px 0;
    }
    a{
        text-decoration: none;
    }

    .home-icon{
        padding-right: 10px;
        position: relative;
        left: -50px;
        color: whitesmoke;
    }

    .game-info{
        left: -25px;
    }

    .location{
        left: -38px;
    }

    .chat{
        left: -60px;
    }

    .nav-link{
        font-size: 25px;
    }



    a {
        font-weight: bold;

        &.router-link-exact-active {
        
        svg{
            color: rgb(177, 214, 159);
            }

            p{
                color:  rgb(177, 214, 159);
                
            }
        }
    }

</style>