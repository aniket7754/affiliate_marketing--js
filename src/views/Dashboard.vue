<template>
<side-nav/>
<navbar/>
    <section class="main-content">

        <div class="wrapper main-wrapper git clone git@bitbucket.org:abhinav045/publisher_frontend.git
" style=''>

            <div class="row row-top">
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card">
                        <div class="card-header  card-first p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <i class="fa-regular fa-hand-point-down"></i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize text-card ">Today's Clicks</p>
                                <h4 v-for="item in data.clicks" class="mb-0 card-text-white">{{ item['clicks']}}</h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3 text-start">
                            <p class="mb-0"><span class=" text-sm font-weight-bolder">Clicks</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card ">
                        <div class="card-header card-sec p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                <i class="fa-solid fa-money-bill-transfer"></i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize text-card">Today's Conversion</p>
                                <h4 v-for="item in data.conversion" class="mb-0 card-text-white">{{
                                item['conversions']}}
                                </h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3 text-start">
                            <p class="mb-0"><span class=" text-sm font-weight-bolder">Conversion</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card ">
                        <div class="card-header card-third p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                <i class="fa-brands fa-rev"></i>
                            </div>
                            <div class="text-end pt-1">
                                <p  v-for="item2 in data.conversion"  class="text-sm mb-0 text-capitalize text-card">
                                    Revenue
                                <h4 v-for="item in data.clicks" class="mb-0 card-text-white">
                                    {{((item.payout) * (item2.conversions)).toFixed(3)}}</h4>
                                </p>
                                </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3 text-start">
                            <p class="mb-0"><span class="text-sm font-weight-bolder">Revenue</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card ">
                        <div class="card-header card-fourt p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                <i class="fa-solid fa-wind"></i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize text-card">Total Offers</p>
                                <h4 v-for="item in data.total_offers" class="mb-0 card-text-white">
                                    {{ item['total_offers']}}</h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3 text-start">
                            <p class="mb-0"><span class=" text-sm font-weight-bolder">Total Offers </span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="clearfix"></div>
            <!-- MAIN CONTENT AREA STARTS -->

            <!-- MAIN CONTENT AREA ENDS -->
        </div>
    </section>


    <section class="main-content">
        <div class="wrapper main-wrapper mt-top" style=''>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-lg-6">

                    <div class="content-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="card grap-card">
                                    <div class="card-body">
                                        <h5 class="card-title">Line Chart</h5>

                                        <div id="main" style="height: 380px;margin: 0px auto" class="echart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="content-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body card-text">
                                        <h5 class="card-title"> Map</h5>

                                        <div id="chartDiv" style="max-width: 740px;height: 380px;margin: 0px auto">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="main-content">
        <div class="wrapper main-wrapper mt-top" style=''>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="content-body">

                        <div class="card" style="min-height: 330px">
                            <div class="card-header card-header-text py-3">
                                <h4 class="card-title text-white">Top 5 Campaigns</h4>
                                <router-link to="/Campaigns_table" class="fas fa-angle-double-right"></router-link>

                            </div>
                            <div class="card-content table-responsive">
                                <table class="table table-hover">
                                    <thead class="text-head">
                                        <tr>
                                            <th>Sr</th>
                                            <th>Campaign Name</th>
                                            <th>Conversions</th>
                                            <th>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(camp, index) in data.top_5_campaigns">
                                            <td>{{ index+ 1}}</td>
                                            <td><router-link to="/Reports" class="linkbtn">{{ camp._id }}</router-link>
                                            </td>
                                            <td>{{ camp.conversions }}</td>
                                            <td>{{ (camp.conversions * camp.payout).toFixed(3) }}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6">


                    <div class="card py-0" style="min-height: 330px">
                        <div class="card-header  card-header-text  py-3">
                            <h4 class="card-title text-white">Top 5 Geos</h4>
                            <router-link to="/Geos_table" class="fas fa-angle-double-right"></router-link>
                        </div>

                        <div class="card-content table-responsive">
                            <table class="table table-hover">
                                <thead class="text-head">
                                    <tr>
                                        <td></td>
                                        <th>Geos Name</th>
                                        <th>Offers</th>
                                        <th>Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="camp in data.top_5_country">
                                        <td><span class="fi fi-as"></span></td>
                                        <td><router-link to="/Reports" class="linkbtn">{{ camp._id }}</router-link></td>
                                        <td>{{ camp.count }}</td>
                                        <td>{{ (camp.conversions * camp.payout).toFixed(3) }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="main-content">
        <div class="wrapper main-wrapper mt-top">
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card py-0" style="min-height: 330px">
                        <div class="card-header  card-header-text  py-3">
                            <h4 class="card-title text-white">Trending Offer</h4>
                        </div>

                        <!-- <div class="scroll owl-carousel owl-theme"> -->

                        <div class="" style="overflow-x: scroll!important;">
                            
                            <div class="item m-auto mx-3" id="scroll">
                                <div v-for="camp in data.trending_offers">
                                    <div class="card mx-4 mt-5"
                                        style="width: 13rem!important; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">

                                        <img src="../assets/image/pic-2.png" class="card-img-top mt-4 m-auto"
                                            id="img-card" alt="image">
                                        <div class="card-body">
                                            <h5 class="card-title m-auto my-3">
                                                <router-link to="/Approved" class="text-decoration-none"><span
                                                        class=" text-primary">
                                                        {{ camp.offer_name }}
                                                    </span></router-link>
                                            </h5>
                                            <p class="card-text m-auto ">
                                                <router-link to="/Approved" class="text-decoration-none"><span
                                                        class="p-2" style="border-radius: .4rem; background: #EEEEEE;">
                                                        #{{ camp.offer_id }}
                                                    </span></router-link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- </div> -->

                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import axios from 'axios';
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'

import * as echarts from 'echarts';

export default {
    name: 'Dashboard',
    components: {
    SideNav,
    Navbar
},

    data() {
        return {
            data: {}
        }

    },
    created() {
        this.getdata();
    },
    methods: {
        getdata() {
            console.log("api")
            const urls = [
                { key: 'clicks', url: 'http://localhost:8080/api/v1/getstaticdata?required=clicks&start_date=2023-01-01&end_date=2023-01-03&pub_name=savtarr' },
                { key: 'conversion', url: 'http://localhost:8080/api/v1/getstaticdata?required=conversion&start_date=2023-01-01&end_date=2023-01-03&pub_name=savtarr' },
                { key: 'total_offers', url: 'http://localhost:8080/api/v1/getstaticdata?required=total_offers&start_date=2023-01-01&end_date=2023-01-03' },
                { key: 'top_5_country', url: 'http://localhost:8080/api/v1/getstaticdata?required=top_5_country&start_date=2023-01-01&end_date=2023-01-03&pub_name=savtarr' },
                { key: 'top_5_campaigns', url: 'http://localhost:8080/api/v1/getstaticdata?required=top_5_campaigns&start_date=2023-01-01&end_date=2023-01-03&pub_name=savtarr' },
                { key: 'trending_offers', url: 'http://localhost:8080/api/v1/getstaticdata?required=trending_offers&start_date=2023-01-01&end_date=2023-01-03' }
            ];
            Promise.all(urls.map(entry => axios.get(entry.url)))
                .then(responses => {
                    responses.forEach((response, index) => {
                        this.data[urls[index].key] = response.data.response;
                        console.log(this.data)
                    });
                    // console.log(this.data[0].clicks)
                });
        }
    },
    mounted() {



        $(document).ready(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 4,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });
        });

        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Clicks', 'Conversion', 'Revenue']
            },

            grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2023-11-1', '2023-12-1', '2023-13-1', '2023-14-1', '2023-14-1', '2023-15-1', '2023-16-1', '2023-17-1']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Clicks',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210, 394],
                    color: '#e01257'

                },
                {
                    name: 'Conversion',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310, 432],
                    color: '#39ac3d'
                },
                {
                    name: 'Revenue',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410, 877],
                    color: '#03A9F4'
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
        // option && myChart.setOption(option);
        window.addEventListener('resize', myChart.resize);



        $(document).ready(function () {
            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();
            });

        });


        var chart = JSC.chart('chartDiv', {
            debug: true,
            type: 'map',
            legend_visible: false,

            title: {
                position: 'full',
                label_text: 'World Regions Projections'
            },

            regionStyle: {
                initial: {
                    fill: '#aaaaaa',
                    'fill-opacity': 1,
                    stroke: 'false',
                    'stroke-width': 0,
                    'stroke-opacity': 1
                },
                hover: {
                    fill: '#e77512',
                    'fill-opacity': 1,
                    cursor: 'pointer'
                },
                selected: {
                    fill: '#e77512'
                },
                selectedHover: {}
            },

            mapping_projection: false,

            series: [
                {

                    map: 'world.region:africa',
                    backgroundColor: 'red'
                },
                { map: 'region:europe' },
                { map: 'region:asia' },
                { map: 'region:americas' }
            ],
            toolbar: {
                items: {
                    resetZoom_position: 'inside bottom left',
                    Projection: {
                        type: 'select',
                        value: 'none',
                        items: {
                            none: {},
                            mercator: {},
                            lambertConformalConic: {}
                        },
                        events_change: projectionChanged
                    }
                }
            }
        });

        function projectionChanged(val) {
            chart.options({
                mapping_projection: {
                    type: val,
                    parallels: [11.5, 0]
                }
            });
        }

        function setProjection(val) {
            chart.options({ mapping_projection_type: val });
        }
        // Set the scroll speed (in milliseconds)
        const scrollSpeed = 2000;

// Get the element that you want to scroll
const scrollContainer = document.querySelector('#scroll');

// Scroll to the right
function scrollRight() {
  scrollContainer.scrollLeft += 1;
  if (scrollContainer.scrollLeft !== scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    setTimeout(scrollRight, scrollSpeed / 100);
  } else {
    setTimeout(scrollLeft, scrollSpeed);
  }
}

// Scroll to the left
function scrollLeft() {
  scrollContainer.scrollLeft -= 1;
  if (scrollContainer.scrollLeft !== 0) {
    setTimeout(scrollLeft, scrollSpeed / 100);
  } else {
    setTimeout(scrollRight, scrollSpeed);
  }
}

// Start the scrolling
scrollRight();



    }
}


</script>

<!-- siderbar -->

<style>
.item {
    white-space: nowrap;
    overflow-x: auto;
}

.owl-item {
    width: 128.906px;
    margin-right: 10px;
    margin-bottom: .9rem;
}

.scroll {
    height: 300px;
    display: flex;
    overflow-x: scroll !important;
}

.item {
    text-align: center;
    flex-direction: row;
    display: flex;
}

/*----------------------------------------
  Page Top Bar
------------------------------------------*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


a,
button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
}

/* img {
  display: block;
 -o-object-fit: cover;
     object-fit: cover;
} */
img {
    height: 62px !important;
    width: 62px !important;
    margin: 1.5rem 1rem;
}

.container {
    max-width: 80rem;
    width: 100%;
    height: auto;
    padding: 0 2rem;
    margin: 0 auto;
}

.text {
    font-family: inherit;
    font-weight: 700;
    line-height: inherit;
    text-rendering: optimizeLegibility;
}

.text-title {
    font-size: 1.25rem;
    color: #d32f2f;
}

.paragraph {
    font-family: inherit;
    font-size: 1rem;
    font-weight: normal;
    line-height: inherit;
    margin: 0.25rem 0;
    color: #252a32;
    text-transform: unset;
    text-rendering: optimizeLegibility;
}

.truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    max-width: 100%;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;

}

.truncate a {
    margin: 0 1rem;
}

/* .main .scroll {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin: 2.5rem 0;
    cursor: default;
    overflow: scroll hidden;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    scroll-padding: 0px 1.25rem;
    scrollbar-width: none;
} */

/* .main .scroll::-webkit-scrollbar {
    display: none;
} */

/* .main .scroll.active {
    cursor: grab;
    cursor: -webkit-grab;
}

.main .scroll .trending-card {
    width: 16rem;
    height: auto;
    flex: 0 0 auto;
    margin: 0 0.75rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    color: #252a32;
    background: #ffffff;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.main .scroll .card-image {
    position: relative;
    display: block;
    width: 100%;

} */

/* .main .scroll .card-image img.responsive {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.main .scroll .card-inner {
    width: 100%;
    height: auto;
    padding: 1rem;
} */

.font-weight-bolder {
    font-weight: 700 !important;
    font-family: sans-serif;
    font-size: .9rem;
}

.shadow-primary {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4) !important;
}

.shadow-secondary {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(210, 210, 210, 0.4) !important;
}

.shadow-info {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4) !important;
}

.shadow-warning {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4) !important;
}

.shadow-success {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4) !important;
}

.shadow-danger {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4) !important;
}

.shadow-dark {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(41, 62, 94, 0.4) !important;
}

.bg-gradient-primary {
    /* background-image: linear-gradient(195deg, #EC407A 0%, #D81B60 100%); */
    background-image: linear-gradient(195deg, #8e44ad 0%, #a25abf 100%);
}

.bg-gradient-success {
    /* background-image: linear-gradient(195deg, #66BB6A 0%, #43A047 100%); */
    background-image: linear-gradient(195deg, #e84393 0%, #fd79a8 100%);
}

.bg-gradient-dark {
    /* background-image: linear-gradient(195deg, #0abde3 0%, #1fc7ed 100%); */
    background-image: linear-gradient(195deg, #3498db 0%, #1fc7ed 100%);

}

.bg-gradient-info {
    /* background-image: linear-gradient(195deg, #2bcbba 0%, #0fb9b1 100%); */
    background-image: linear-gradient(195deg, #00b894 0%, #58cbd8 100%);
}

.card .card-first {
    /* background-color: #e01257 !important; */
    background-color: #3498db;
}

.card .card-sec {
    /* background-color: #00bcd4 !important; */
    background-color: #8e44ad;
}

.card .card-third {
    /* background-color: #03A9F4 !important; */
    background-color: #e84393;
}

.card .card-fourt {
    /* background-color: #39ac3d !important; */
    background-color: #00b894;
}

.card-text-white {
    color: #fff;
}

.text-card {
    color: #e2e8fd;
    font-family: sans-serif;
}

.mt-n4 {
    margin-top: -1.5rem !important;
}

.icon-shape {
    width: 53px;
    height: 53px;
    background-position: center;
    border-radius: 0.5rem;
}

.icon-shape i {
    color: #fff;
    opacity: 0.8;
    top: 16px;
    font-size: 20px;
    position: relative;
}

.icon-shape .ni {
    top: 14px;
}

.row-top {
    margin-top: -2rem !important;
}

.today:hover {
    cursor: pointer;
}

.alpha-text {
    position: relative;
    font-size: 1rem;
    text-align: center;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: .8rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    margin-top: .2rem;
    color: #0f0 !important;
}

.notification {
    position: absolute;
    top: .3rem;
    left: 1.4rem;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background-color: #f00;
    border-radius: 50%;
    font-size: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-top: -.1rem;
    padding-left: 1px;
}

.navbar-nav {
    display: flex;
    flex-direction: row !important;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: .2rem;
    list-style: none;
}

.navbar-nav li a {
    position: relative;
    display: block;
    padding: 10px 15px !important;
    color: #fff !important;

}

@media (max-width: 991px) {
    .navbar-nav {
        margin-top: -1.8rem !important;

    }

}






.card {
    display: inline-block;
    position: relative;
    border: none !important;
    width: 100%;
    box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
    border-radius: none !important;
    color: rgba(0, 0, 0, 0.1);
    border-bottom: none !important;
}

.card .card-stats .card-header {
    float: left;
    text-align: center;

}

.card .card-header {
    padding: 0px 10px 0;
    z-index: 3;
    /* background-color: teal; */
    border-bottom: none !important;
}



.card .card-footer .stats .material-icons {
    position: relative;
    top: 4px;
    font-size: 15px;
}

.card-stats .card-header span {
    font-size: 20px;
    line-height: 56px;
    width: 56px;
    height: 56px;
}


.card .card-footer {
    padding-top: 10px;
    background-color: #FFF;
    border-top: 1px solid #eeeeee;
}

.text-info {
    color: #03A9F4 !important;
}

.text-head {
    color: #666;
}

.card-top {
    margin-top: 10rem;
}

.card-stats .card-content {
    text-align: right;
    padding-top: 10px;
}

.card-header-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header-text .fa-angle-double-right {
    cursor: pointer;
    text-decoration: none;
    color: #FFF;
}

.card .card-content {
    padding: 10px 20px;
    position: relative;
    font-size: .9rem;

}

.card .card-content .category {
    margin-bottom: 0;
}

.card .category:not([class*="text-"]) {
    color: #555555;
    font-size: 14px;
    font-weight: 400;
}

.card .card-title:not(.card-calendar .card-title) {
    margin-top: 0;
    margin-bottom: 0px;
    font-size: 1.1rem;
    color: #FFF;
}

.card-stats .card-title {
    margin: left;
    color: #fff;
}

.card .card-footer .stats {
    line-height: 22px;
    color: #555555;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
}

.card .card-footer div {
    display: inline-block;
}

.card .card-header-text h4 {
    margin-top: 0;
    margin-bottom: 3px;
    font-size: 19px;
    font-weight: 400;
    color: #222222;
    text-decoration: none;

}

.table>thead>tr>th {
    border-bottom-width: 1px;
    font-size: 16px;
    font-weight: 400;
    color: var(--table-th);
}

.table>tbody>tr {
    color: var(--table-tr);
}

.table-striped>thead>tr>th {
    border-bottom-width: 1px;
    font-size: 15px;
    font-weight: 400;
}

.table tbody tr:hover {
    background-color: #f2f2f2;
}

.card .card-content {
    position: relative;
}

section.box {

    overflow: hidden;
    -webkit-box-shadow: 0 2px 28px rgba(0, 0, 0, .1);
    box-shadow: 0 2px 28px rgba(0, 0, 0, .1);
    margin-top: -3rem;
}

section header {
    width: 100%;
    display: inline-block;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-bottom: 0px solid transparent;
    vertical-align: top;
    position: relative;
    min-height: 75px;
}

section header .title {
    margin-top: 10px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding-left: 30px;
    padding-top: 15px;
    line-height: 30px;
    color: #676767;
    font-weight: 400;
    display: inline-block;
}

section .content-body {

    border-top: 0px;
    -webkit-transition: 800ms;
    -moz-transition: 800ms;
    -o-transition: 800ms;
    transition: 800ms;
}

section.box.nobox {
    background-color: transparent;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -o-box-shadow: none;
    -ms-box-shadow: none;
}

@media (max-width: 1200px) {
    section.box.nobox {
        overflow: visible;
    }

    section.box.nohidden {
        overflow: visible;
    }
}

section.nobox header {
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom: 0px solid transparent;
}

section.nobox header .title {
    padding-left: 0px;
}

section.nobox .content-body {
    background-color: transparent;
    border: 0px solid transparent;
}

section.box .actions {
    margin: 10px 15px 0 15px;
    line-height: 50px;
    position: absolute;
    right: 0px;
    top: 0px;
}

section.box .actions a {
    color: #bcbcbc;
    font-size: 12px;
    margin-left: 0px;
    padding: 5px;
    cursor: hand;
    cursor: pointer;
    text-decoration: none;
}

section.box .actions a:hover {
    color: #999999;
    text-decoration: none;
}


.db_box {
    /* background-color: #ffffff; */
    box-shadow: 0 1px 3px rgba(33, 33, 33, .2);
    -webkit-box-shadow: 0 1px 3px rgba(33, 33, 33, .2);
    -moz-box-shadow: 0 1px 3px rgba(33, 33, 33, .2);
    -o-box-shadow: 0 1px 3px rgba(33, 33, 33, .2);
    -ms-box-shadow: 0 1px 3px rgba(33, 33, 33, .2);

}

@media (max-width: 991px) {
    .card {
        margin: 15px 0;
    }

    .mt-top {
        margin-top: 1rem;
    }

    section .content-body {
        border-top: 0px;
        -webkit-transition: 800ms;
        -moz-transition: 800ms;
        -o-transition: 800ms;
        transition: 800ms;
    }
}

/*================ Tranding =================*/

.gallery-container {
    position: relative;
    display: flex;
    justify-content: center;
}

.thumbnails {
    position: absolute;
    bottom: 8px;
    display: flex;
    flex-direction: row;
    gap: 6px;
}

.thumbnails div {
    width: 8px;
    height: 8px;
    cursor: pointer;
    background: #aaa;
    border-radius: 100%;
}

.thumbnails div.highlighted {
    background-color: #777;
}

.slides {
    margin: 0 16px;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    width: 540px;
    padding: 0 0.25rem;
    height: 720px;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.slides>div {
    scroll-snap-align: start;
}

.slides img {
    width: 540px;
    object-fit: contain;
}

.slides::-webkit-scrollbar {
    display: none;
}


.p {
    color: black !important;
}

.tranding_img {
    height: 5rem;
    width: 5rem !important;
    border-radius: 0.3rem;
}

.tranding_id {
    background: #EEEEEE;
    text-align: center;
    border-radius: 0.5rem;
}

.card .card-header {
    padding: 4px 10px;
    z-index: 3;
    /* background: #256d85 !important; */
    border-bottom: none !important;
}

.card-title {
    font-size: 20px;
    font-weight: 500 !important;
    margin-left: 1rem;
}

.arrow {
    text-decoration: none;
    color: white !important;
    position: relative;
    float: right;
    top: 0.5rem;
    right: 0.6rem;
    font-size: 1rem;
}


/*================ Tranding end =================*/
</style>