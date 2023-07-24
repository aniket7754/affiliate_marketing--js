
<template>


 <SideNav/>
 <Navbar/>
 <div class="page-container row-fluid container-fluid">
<div class="overlay hidden"></div>

  <router-view></router-view>
   </div>  
</template>

<script>
// import Navbar from './components/Navbar.vue'
// import SideNav from './components/SideNav.vue'
// import Footer from './components/Footer.vue'
export default {
  name: 'App',
//   components: {
//     SideNav,
//     Navbar,
//     Footer
// },

 
}
// $(document).ready(function(){
   
// })


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- 
  <main class="main">
                                    <div class="container">
                                        <div class="scroll" id="uu">
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Angkor Wat</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Bali Temple</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Big Ben</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Colosseum</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Eiffel Tower</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Grand Canyon</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Great Wall</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Machu Picchu</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="trending-card">
                                                <div class="card-image">
                                                    <img src="../assets/image/pic-2.png" loading="lazy"
                                                        class="responsive" alt="Images">
                                                </div>
                                                <div class="card-inner">
                                                    <h3 class="text text-title">Saint Basil</h3>
                                                    <p class="paragraph truncate">
                                                        <a class="btn btn-light">#474394</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main> 
 -->

 <!-- <main class="main">
                <div class="container">
                    <div class="scroll">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Angkor Wat</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Bali Temple</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Big Ben</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Colosseum</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Eiffel Tower</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Grand Canyon</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Great Wall</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Machu Picchu</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/image/pic-2.png" loading="lazy" class="responsive" alt="Images">
                            </div>
                            <div class="card-inner">
                                <h3 class="text text-title">Saint Basil</h3>
                                <p class="paragraph truncate">
                                    <a class="btn btn-light">#474394</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main> -->