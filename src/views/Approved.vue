<template>
    <side-nav/>
<navbar/>
    <div class="page-container row-fluid container-fluid">

        <section class="main-content">
            <div class="wrapper main-wrapper " style=''>

                <div class="row ">
                    <div class="col-12">
                        <div class="card my-4">
                            <div class="card-header invoice-header p-0 position-relative mt-n4 mx-3 z-index-2 ">
                                <div class="  border-radius-lg pt-4 pb-3">
                                    <h6 class=" text-start text-white text-capitalize ps-3"
                                        onclick="window.history.back()"><i class="fa fa-backward mx-2"></i>Back
                                        <span class=" text-start text-white text-capitalize ps-3 ms-5"
                                            onclick="window.history.forward()">Forward<i class="fa fa-forward mx-2"></i>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div class="row mt-3 py-3 px-3">
                                <div class="col-lg-4  col-md-4 col-sm-4 px-4">

                                    <div class="input-group input-group-outline invoice-input-group">
                                        <input type="text" class="form-control forminput" id="search" v-model="searchValue" 
                                            placeholder="Search Everything..">
                                        <div class="button_search">
                                            <i class="fas fa-search"></i>
                                        </div>

                                    </div>

                                </div>

                                <div class="col-lg-7 px-3 text-start ">
                                    <div class="dropdown">
                                        <h6 class="button-42 dropdown text-white" id="offerbtn">Offer Id
                                        </h6>

                                        <div class="dropdown-content">
                                            <a href="#" id="offerid" @click="setSelectedId('offer_id')">Offer Id</a>
                                            <a href="#" id="offername" @click="setSelectedId('offer_name')">Offer
                                                Name</a>
                                            <a href="#" id="country" @click="setSelectedId('country')">Country</a>
                                            <a href="#" id="modal" @click="setSelectedId('model')">Model</a>
                                        </div>
                                    </div>
                                    <a class="button-42  button-15 mx-1" @click="submitForm">Submit</a>

                                </div>

                            </div>
                            <div class="card-body px-0 pb-2 mt-3">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center mb-0">
                                        <thead class="">
                                            <tr>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bold opacity-7 text-dark">
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bold opacity-7 text-dark ps-2">
                                                    Offer details</th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bold opacity-7 text-dark ps-2">
                                                    Geos</th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bold opacity-7 text-dark ps-2">
                                                    Model</th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bold opacity-7 text-dark ps-2">
                                                    Payout</th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bold opacity-7 text-dark">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr v-for="item in items" :key="item.serial">

                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/image/pic-1.png"
                                                                class="avatar avatar-sm me-3 border-radius-lg mt-2"
                                                                alt="user1">
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-3">
                                                    <router-link :to="`/Tracking?offer_id=${item.offer_id}`"
                                                        class="text">
                                                        <div class="my-3">
                                                            <p class="font-w600 mb-1 text-success">{{
                                                                item.offer_name
                                                            }}({{ item.platform }}) {{ item.traffic_type }}</p>
                                                            <a class="btn btn-light py-0">#{{ item.offer_id }}</a>
                                                            <span class="payout px-4 fas fa-eye"></span>
                                                        </div>
                                                    </router-link>
                                                </td>
                                                <td class="align-middle text-center text-sm">{{ item.country }}</td>
                                                <td class="align-middle text-center text-sm">{{ item.model }}</td>

                                                <td class="align-middle text-center text-sm">{{ item.payout }}</td>



                                                <td class="align-middle text-center text-sm">
                                                    <span class="btn btn-success">Approved</span>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
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
    name: 'Approved',
    components: {
    SideNav,
    Navbar
},

    data() {
        // console.log(window.type)
        
        return {
            selectedId: '',
      searchValue: '',
      username: "abhinav",
                approved: "savatarr",
            baseURL: 'http://localhost:8080/api/v1/',
            endpoint: 'all_offers',
            params: {
                username: "abhinav",
                approved: "savatarr"
                // window.type:document.getElementById('search').val()

            },
            items: []
        }
    },
    created() {
        this.all_offers();
    },
    methods: {
        all_offers() {
            axios.get(`${this.baseURL}${this.endpoint}`, { params: this.params })
                .then(response => {
                    console.log(response.data.response)
                    this.items = response.data.response;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        setSelectedId(id) {
      this.selectedId = id;
      this.showDropdown = false;
    },
    submitForm() {
        console.log(this.selectedId)
      axios
        .get('http://localhost:8080/api/v1/all_offers', {
          params: {
            username: this.username,
        approved: this.approved,
           
            [this.selectedId]: this.searchValue,
            
          }
        })
        .then(response => {
            this.items = response.data.response;
        })
        .catch(error => {
          console.error(error);
        });
    }
  
    },
    mounted() {

        window.type = '';


        let offerbtn = document.getElementById('offerbtn')
        let offerid = document.getElementById('offerid');
        let offername = document.getElementById('offername');
        let country = document.getElementById('country');
        let modal = document.getElementById('modal');

        offerid.onclick = () => {
            offerbtn.innerHTML = 'Offer Id'
        }

        offername.onclick = () => {
            offerbtn.innerHTML = 'Offer name'
        }

        country.onclick = () => {
            offerbtn.innerHTML = 'Country'
        }

        modal.onclick = () => {
            offerbtn.innerHTML = 'Model'
        }



        $(document).ready(function () {
            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();





            });


            $(window).on('popstate', function (event) {
            });
        })
    }
}
</script>



<style scoped>
.text a {
    background: #EEEEEE !important;
    font-size: small;
}

.text p {
    font-size: large;
}

.text {
    text-decoration: none;
}

input {
    background: none !important;
}

tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--card-bg);
    min-width: 150px;
    box-shadow: var(--popup-shadow);
    z-index: 1;
}

.dropdown-content a {
    color: var(--table-th) !important;
}

.dropdown-content a:hover {
    color: var(--table-th) !important;
    background-color: var(--drop-hover) !important;
}

.dropdown-content a {
    color: var(--table-th);
    padding: 10px 16px;
    text-decoration: none;
    display: block;
    border-bottom: .1rem solid #eee;
    font-size: .9rem;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
    /* visibility: visible; */
}
</style> 