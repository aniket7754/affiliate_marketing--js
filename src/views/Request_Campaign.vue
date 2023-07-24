<template>
    <side-nav/>
<navbar/>
    <div class="page-container row-fluid container-fluid">

        <div class="card r-card">
            <div class="request" id="request">
                <button class="btn">
                    All Request
                </button>

            </div>

        </div>

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
                                        <input type="text" class="form-control forminput"
                                            placeholder="Search Everything.." v-model="searchValue">
                                        <div class="button_search">
                                            <i class="fas fa-search"></i>
                                        </div>

                                    </div>

                                </div>

                                <div class="col-lg-7 px-3 text-start ">
                                    <div class="dropdown">
                                        <router-link to="" class="button-42 dropdown" id="offerbtn">Offer Id
                                        </router-link>

                                        <div class="dropdown-content">
                                            <a href="#" id="offerid" @click="setSelectedId('offer_id')">Offer Id</a>
                                            <a href="#" id="offername" @click="setSelectedId('offer_name')">Offer
                                                Name</a>
                                            <a href="#" id="country" @click="setSelectedId('country')">Country</a>
                                            <a href="#" id="modal" @click="setSelectedId('model')">Model</a>
                                    </div>
                                    <a class="button-42  button-15 mx-1" @click="getdata">Submit</a>

                                </div>

                            </div>
                            <div class="card-body px-0 pb-2 mt-3">
                                <div class="col-lg-9 px-3 text-start ">
                                    <div class="d-flex  ">
                                        <input type="checkbox" class="mx-2 checkall show-btn" id="check">
                                        <label for="check" class="label-text">Select All</label>
                                        <!-- <span class="label-text">Select All</span> -->
                                    </div>
                                </div>
                                <div class="table-responsive p-0 mt-2">
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
                                                        <div class="d-flex flex-column justify-content-center px-2">
                                                            <input type="checkbox" class="All_check">
                                                        </div>
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
                                                    <router-link :to="`/Tracking_2?offer_id=${item.offer_id}`"
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
                                                    <span class="btn btn-warning text-white" id="request"
                                                    @click="submitForm(item.offer_id)" :disabled="item.buttonDisabled"
                                                        >
                                                        {{ item.buttonDisabled ? 'Requested' : 'Request access' }}
                                                    </span>
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




            </div>
        </section>
    </div>

</template>

<script>
import axios from 'axios';
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'

export default {
    name: 'AprovedCampaign',
    components: {
    SideNav,
    Navbar
},

    data() {

        return {
            selectedId: '',
      searchValue: '',
      username: "abhinav",
            approved: "savatarr",
            baseURL: 'http://localhost:8080/api/v1/',
            endpoint: 'all_offers_1',
            params: {
                username: "abhinav",
                approved: "savatarr"
                // window.type:document.getElementById('search').val()

            },
            items: []

        }
    },
    created() {
        this.items.forEach(item => {
            item.buttonDisabled = true;
        });
        this.all_offers();
    },
    methods: {
        all_offers() {

            axios.get(`${this.baseURL}${this.endpoint}`, { params: this.params })
                .then(response => {
                    console.log(response.data.response)
                    this.items = response.data.response;
                    this.items.forEach(item => {
                        item.buttonDisabled = item.applied_for_pubs.includes(this.approved);
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        },
        setSelectedId(id) {
      this.selectedId = id;
      this.showDropdown = false;
    },
    getdata() {
        console.log(this.selectedId)
      axios
        .get('http://localhost:8080/api/v1/all_offers_1', {
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


        let offerbtn = document.getElementById('offerbtn')
        let offerid = document.getElementById('offerid');
        let offername = document.getElementById('offername');
        let country = document.getElementById('country');
        let modal = document.getElementById('modal');
        // let request = document.getElementById('request');
        // let allCheck = document.querySelectorAll('.All_check');

        // allCheck.forEach(element => {
        //     element.addEventListener( 'click' , ()=>{
        //         if (element.checked === false) {
        //             request.classList.remove('active')
        //         }
        //     })
        // });

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
            offerbtn.innerHTML = 'Modal'
        }

        // var alert = document.querySelector('.checkall');
        // var x = document.getElementById("toast")
        // var y = document.getElementById("close-alert")

        // alert.addEventListener('click', function () {
        //     x.className = "show";

        //     y.onclick = () => {
        //         x.classList.toggle('remove');

        //     }
        //     setTimeout(function () {
        //         x.className = x.className.replace("show", "");
        //     }, 8000);

        // })


        // $(".checkall").click(function () {
        //     $("input[type=checkbox]").prop("checked", $(this).prop("checked"));
        // });


        $(document).ready(function () {
            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();
            });

            $(window).on('popstate', function (event) {
            });

            let check = document.querySelectorAll('.All_check')
            let div = document.querySelector('#request')
            let checkall = document.querySelector('.checkall')

            // check.forEach((e) => {
            //     e.addEventListener('click', (i) => {
            //         for (let index = 0; index < check.length; index++) {
            //             if (check[index].checked == true) {
            //                 div.classList.add('active')
            //                 break;
            //             } else {
            //                 div.classList.remove('active')
            //             }
            //         }
            //     })
            // });

            checkall.addEventListener('click', () => {
                if (checkall.checked == true) {
                    check.forEach(e => e.checked = true)
                    div.classList.add('active')
                } else if (checkall.checked == false) {
                    check.forEach(e => e.checked = false)
                    div.classList.remove('active')
                }
            })

            check.forEach((e) => {
                e.addEventListener('click', (i) => {
                    for (let index = 0; index < check.length; index++) {
                        if (check[index].checked == true) {
                            for (let index = 0; index < check.length; index++) {
                                if (check[index].checked == false) {
                                    checkall.checked = false
                                    break;
                                } else {
                                    checkall.checked = true
                                }
                            }
                            div.classList.add('active')
                            break;
                        } else {
                            div.classList.remove('active')
                            check.forEach(e => e.checked == true ? checkall.checked = true : checkall.checked = false)
                        }
                    }
                })
            });

        });
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

input {
    background: none !important;
}

tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

#toast {
    visibility: hidden;
    max-width: 50px;
    height: 65px;
    margin: auto;
    /* background-color: #dc3545 !important; */
    background-color: teal;
    color: #fff;
    text-align: center;
    border-radius: 2px;

    position: fixed;
    z-index: 1;
    left: 16rem;
    right: 0;
    bottom: 30px;
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
}

#toast .rightimg {
    width: 50px;
    height: 65px;

    float: left;

    padding-bottom: 16px;
    padding-top: 20px;

    box-sizing: border-box;


    /* background-color: #c20518; */
    background-color: rgb(5, 107, 107);
    color: #fff;
}

#toast #desc {
    color: #fff;
    padding: 16px;
    overflow: hidden;
    white-space: nowrap;
}

#toast.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s, fadeout 0.5s 4.5s;
}

#toast.remove {
    visibility: hidden;
}

.text {
    text-decoration: none;
}

@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes expand {
    from {
        min-width: 50px
    }

    to {
        min-width: 1565px
    }
}

@keyframes expand {
    from {
        min-width: 50px
    }

    to {
        min-width: 1565px
    }
}

@-webkit-keyframes stay {
    from {
        min-width: 1565px
    }

    to {
        min-width: 1565px
    }
}

@keyframes stay {
    from {
        min-width: 1565px
    }

    to {
        min-width: 1565px
    }
}

@-webkit-keyframes shrink {
    from {
        min-width: 1565px;
    }

    to {
        min-width: 50px;
    }
}

@keyframes shrink {
    from {
        min-width: 1565px;
    }

    to {
        min-width: 50px;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 30px;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 30px;
        opacity: 0;
    }
}

#close-alert {
    cursor: pointer;
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

/* ------------------------------ Success box  ========================= */



#closesecalert {
    cursor: pointer;
}


/* ============  request ========= */

.request {
    height: 100px;
    width: 100%;
    background: #256d85;
    position: absolute;
    bottom: -3.2rem;
    left: 0;
    right: 0;
    z-index: 1099 !important;
    padding: 0 2rem;
    text-align: center;
    display: none;

}

.request button {
    margin-top: 1.7rem !important;
    background: #4B56D2 !important;
    color: white;
}

#request.active {
    display: block;
}

.r-card {
    position: fixed;
    bottom: 5% !important;
    z-index: 99 !important;

}

/* ============ request end ========== */
</style> 