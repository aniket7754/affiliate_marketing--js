<template>
    <!-- <side-nav/>
<navbar/> -->

    <div class="page-container row-fluid container-fluid">

        <section class="main-content">
            <div class="wrapper main-wrapper main-table filter_top" style=''>


                <div class="main-bg px-2">
                    <div class="row ">
                        <div class="col-lg-8 mt-4 text-start track-top">
                            <span class="btn  bg-white text-black" onclick="window.history.back()"
                                style=""><i class="fa fa-backward mx-2"></i>Back </span>
                                <span class="btn  bg-white text-black" onclick="window.history.forward()"
                                style="">Forward <i class="fa fa-forward mx-2"></i></span>

                            <h4 v-for="item in items" class="offertext"><img src="image"> Offers/ID {{offerId}} ({{ item.country }})</h4>
                            <h6 class="mt-2 text-primary">Preview</h6>
                            <a class="btn btn-warning btn-sm text-white mt-2">Creatives</a>
                            <div class="card-header card-header-text header-card py-3 px-3">
                                <h4 class="card-title text-white fs-5">KPI</h4>
                                <a href="#" class="fas fa-arrow-down text-white" id="arrow-down"></a>
                            </div>
                            <div class="card-first-box pb-3">
                                <h6 v-for="item in items" class="px-2 mt-3">{{ item.kpi }}</h6>


                            </div>

                            <div class="row ms-5">
                                <div class="col-lg-4 ">
                                    <h6 class="mt-4">This Offer is Not Approved</h6>
                                </div>
                                <div class="col-lg-8 col-md-4 col-sm-4">
                                    <div v-for="item in items" class="input-group mt-3 mx-5">
                                        <span class="btn bg-warning text-white" id="request"
                                                    @click="submitForm(offerId)" :disabled="item.buttonDisabled"
                                                        >
                                                        {{item.buttonDisabled ? 'Requested' : 'Request access' }}
                                                    </span>
                                    </div>
                                </div>
                            </div>



                            <div class="sec-card-box pb-3" id="sec-card-box" style="display: none!important;">

                                <div class="row px-2">
                                    <div class="col-lg-3">
                                        <div class="input-group mt-3 ">
                                            <input type="text" class="form-control val" placeholder="_240*240.png"
                                                aria-label="" aria-describedby="basic-addon1">
                                        </div>
                                    </div>


                                    <div class="col-lg-3">
                                        <div class="input-group mt-3  ">
                                            <input type="text" class="form-control val " placeholder="_240*240.png"
                                                aria-label="" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="input-group mt-3 ">
                                            <input type="text" class="form-control val " placeholder="_240*240.png"
                                                aria-label="" aria-describedby="basic-addon1">

                                        </div>

                                    </div>
                                    <div class="col-lg-3 text-end mt-3 ps-2">
                                        <div class="plusbox ">
                                            <span class="input-group-text text-light  add-button ms-2"
                                                id="basic-addon1"><i class="fas fa-plus text-success"></i></span>
                                        </div>
                                    </div>

                                </div>
                                <div class="row px-2" id="addinput">

                                </div>

                            </div>





                        </div>
                        <div class="col-lg-4  pb-5 text-start float-end fixed">
                            <!-- <div class="fixed"> -->
                            <div class="card-header card-header-text  header_text_two py-3 px-3">
                                <h4 class="card-title text-white fs-5">Offer Specification</h4>
                            </div>
                            <div class="left-row-card   px-2 py-2">

                                <div class="d-flex px-2 py-1 ">
                                    <div>
                                        <span class="offer-text">Offer Id</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center px-5">
                                        <h6 class="mb-0 text-sm ">{{offerId}}</h6>

                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex px-2 py-1 ">
                                    <div>
                                        <span class="offer-text">payout</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center px-5">
                                        <h6 v-for="item in items" class="mb-0 text-sm ">${{item.payout}}</h6>

                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <span class="offer-text">Plateform</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center px-5">
                                        <h6 v-for="item in items" class="mb-0 text-sm ">{{item.platform}}</h6>

                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <span class="offer-text">Geography</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center px-5">
                                        <h6 v-for="item in items" class="mb-0 text-sm bg-danger px-2 rounded text-white py-1">{{item.country}}</h6>

                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <span class="offer-text">Daily cap</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center px-5">
                                        <h6 v-for="item in items" class="mb-0 text-sm ">{{ item.daily_cap }}</h6>

                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <span class="offer-text">Modal</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center px-5">
                                        <h6 v-for="item in items" class="mb-0 text-sm ">{{item.model}}</h6>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- </div>fixed -->
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'

export default {
    name: 'Tracking',
    components: {
    SideNav,
    Navbar
},
    data() {
        return {
            offerId: '',
            items:[]
        }
    },
  created(){
    this.getdata();
    this.items.forEach(item => {
            item.buttonDisabled = true;
        });
    this.offerId = this.$route.query.offer_id;
    // this.getdata();
  },
  methods: {
        getdata() {
            axios.get(`http://localhost:8080/api/v1/tracking?offer_id=${this.$route.query.offer_id}`)
                .then(response => {
                    console.log(response.data.response)
                    this.items = response.data.response;
                    this.items.forEach(item => {
                        item.buttonDisabled = item.applied_for_pubs.includes(this.approved);
                    });
                    console.log(this.items)
                })
                .catch(error => {
                    console.error(error);
                });
        },
        submitForm(value) {
            axios.post('http://localhost:8080/api/v1/request', {
                offer_id: value,
                publisher_name: "savatarr"
            })
                .then(response => {
                    this.items.forEach(item => {
                        item.buttonDisabled = true;
                    });
                    alert(`Success! Server responded with: ${response.data.response}`);
                })
                .catch(error => {
                    alert(`Error: ${error}`);
                });
        }
    },
    mounted() {


        let wrapper = document.querySelector('#addinput');
        let addbutton = document.querySelector('.add-button');
        let inputfield = 100;


        let x = 1;

        addbutton.addEventListener('click', function () {



            if (x < inputfield) {

                $(wrapper).append('<div class="col-lg-3"><div class="input-group mt-3 input-trash "><input type="text" class="form-control  val" placeholder="_240*240.png" aria-label="" aria-describedby="basic-addon1"></div>')
                x++;
                $('.val').on('keyup', function () {
                    let out = ''
                    $(".val").each(function () {
                        out += $(this).val() + ":";
                    });
                    $('#updateval').val(out);

                })

            }

        });


        $(document).ready(function () {

            $('.val').on('keyup', function () {
                let out = ''
                $(".val").each(function () {
                    out += $(this).val() + ":";
                });
                $('#updateval').val(out);

            })

            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();
            })



            $("#arrow-down").click(function () {
                $(".card-first-box").slideToggle("slow");
            });

            $(window).on('popstate', function (event) {
            });

        });


    }
}
</script>

<style>
.card-first-box {
    display: none;
}

/* #sec-card-box{
display: none;
} */
</style>
