<template>
 <side-nav/>
<navbar/> 
  <div class="page-container row-fluid container-fluid">

    <section class="main-content">
      <div class="wrapper main-wrapper main-table filter_top" style=''>

        <div class="main-bg px-2">
          <div class="row ">
            <div class="col-lg-8 mt-4 text-start track-top">
              <span class="btn bg-white text-black" onclick="window.history.back()" style=""><i
                  class="fa fa-backward mx-2"></i>Back
              </span>
              <span class="btn bg-white text-black" onclick="window.history.forward()" style="">Forward<i
                  class="fa fa-forward mx-2"></i>
              </span>

              <h4 v-for="item in items" class="offertext"><img src="image"> Offers/ID {{ offerId }} ({{ item.country }})
              </h4>
              <h6 class="mt-2 text-primary">Preview</h6>
              <a class="btn btn-warning btn-sm text-white mt-2">Creatives</a>
              <div class="card-header card-header-text header-card py-3 px-3">
                <h4 class="card-title text-white fs-5">KPI</h4>
                <a href="#" class="fas fa-arrow-down text-white" id="arrow-down"></a>
              </div>
              <div class="card-first-box pb-3">
                <h6 v-for="item in items" class="px-2 mt-3">
                  <p>{{ item.kpi }}</p>
                </h6>


              </div>
              <div class="row">
                <div class="col-lg-4 ">
                  <h6 class="mt-4">Tracking link:</h6>
                  <h6 class="mt-4 ">Impression link:</h6>
                </div>
                <div  class="col-lg-8 ">
                  <div    class="input-group mt-3 ">
                    <input  type="text" class="form-control myInput bg-transparent px-5" 
                      aria-label="" aria-describedby="basic-addon1" id="updateval" readonly v-bind:value="items[0].tracking_link">
                    <span class="input-group-text copybutton" id="basic-addon1"><i class="fas fa-clone"></i></span>
                  </div>
                  <div class="input-group mt-3 ">
                    <input type="text" class="form-control myInput bg-transparent px-5" 
                      aria-label="" aria-describedby="basic-addon1" readonly v-bind:value="items[0].preview_link">
                    <span class="input-group-text copybutton" id="basic-addon1"><i class="fas fa-clone"></i></span>
                  </div>
                </div>
              </div>

              <div class="card-header card-header-text header-card py-3 px-3">
                <h4 class="card-title text-white fs-5">Add Parameter</h4>
                <a href="#" class="fas fa-arrow-down text-white" id="arrow-down-two"></a>
              </div>
              <div class="sec-card-box pb-3" id="sec-card-box" style="display: none!important;">

                <div class="row px-2">
                  <div class="col-lg-3">
                    <div class="input-group mt-3 ">
                      <input type="text" class="form-control val" placeholder="$_Subaff" aria-label=""
                        aria-describedby="basic-addon1">
                    </div>
                  </div>


                  <div class="col-lg-3">
                    <div class="input-group mt-3 ">
                      <input type="text" class="form-control val " placeholder="$_Subaff" aria-label=""
                        aria-describedby="basic-addon1">
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="input-group mt-3 ">
                      <input type="text" class="form-control val " placeholder="$_Subaff" aria-label=""
                        aria-describedby="basic-addon1">

                    </div>

                  </div>

                  <div class="col-lg-3 text-end mt-3 ps-2">
                    <div class="plusbox ">
                      <span class="input-group-text text-light  add-button ms-2" id="basic-addon1"><i
                          class="fas fa-plus text-success"></i></span>
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
                    <h6 class="mb-0 text-sm ">{{ offerId }}</h6>

                  </div>
                </div>
                <hr>
                <div class="d-flex px-2 py-1 ">
                  <div>
                    <span class="offer-text">payout</span>
                  </div>
                  <div class="d-flex flex-column justify-content-center px-5">
                    <h6 v-for="item in items" class="mb-0 text-sm ">${{ item.payout }}</h6>

                  </div>
                </div>
                <hr>
                <div class="d-flex px-2 py-1">
                  <div>
                    <span class="offer-text">Plateform</span>
                  </div>
                  <div class="d-flex flex-column justify-content-center px-5">
                    <h6 v-for="item in items" class="mb-0 text-sm ">{{ item.platform }}</h6>

                  </div>
                </div>
                <hr>
                <div class="d-flex px-2 py-1">
                  <div>
                    <span class="offer-text">Geography</span>
                  </div>
                  <div class="d-flex flex-column justify-content-center px-5">
                    <h6 v-for="item in items" class="mb-0 text-sm bg-danger px-2 rounded text-white py-1">
                      {{ item.country }}</h6>

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
                    <h6 v-for="item in items" class="mb-0 text-sm ">{{ item.model }}</h6>

                  </div>
                </div>

              </div>
            </div>
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
      // window.type:document.getElementById('search').val()


      items: []

    }
  },
  methods: {
    all_offers() {
      axios.get(`http://localhost:8080/api/v1/tracking?offer_id=${this.$route.query.offer_id}`)
        .then(response => {
          console.log(response.data.response)
          this.items = response.data.response;
          console.log(this.items)
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    this.offerId = this.$route.query.offer_id;
    this.all_offers();
  },
  mounted() {


    let wrapper = document.querySelector('#addinput');
    let addbutton = document.querySelector('.add-button');
    let main = document.querySelector('#updateval');
    let inputfield = 100;
    let val=main.value


    let x = 1;

    addbutton.addEventListener('click', function () {

      if (x < inputfield) {
        $(wrapper).append('<div class="col-lg-3"><div class="input-group mt-3 input-trash "><input type="text" class="form-control  val" placeholder="&_subaff" aria-label="" aria-describedby="basic-addon1"></div>')
        x++;
        multi();
      }

    });

    function multi() {
      let inputs = document.querySelectorAll('.val');
      inputs.forEach((e, index) => {
        e.addEventListener('keyup', () => {
          let out = ''
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
              continue;
            } else {
              out += ` &_subaff${i + 1}=` + inputs[i].value
            }
          }
          main.value =val+ out
        })
      })
    }

    multi()

    $(".copybutton").click(function () {
      copybutton(".myInput");
    });

    function copybutton(element_id) {
      $(element_id).attr("contenteditable", true)
        .select()
        .on("focus", function () {
          document.execCommand('selectAll', false, null)
        })
        .focus()
      document.execCommand("Copy");
      $(element_id).removeAttr("contenteditable");
    }

    $("#arrow-down").click(function () {
      $(".card-first-box").slideToggle("slow");
    });

    $("#arrow-down-two").click(function () {
      $("#sec-card-box").slideToggle("slow");
    });

    $(window).on('popstate', function (event) {
    });




  }
}
</script>

<style>
.card-first-box {
  display: none;
}

#sec-card-box {
  display: none;
}
</style>
