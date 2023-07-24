<template>
<side-nav/>
<navbar/>
    <div class="main-content">

        <div class="row ">
            <div class="col-lg-11 mx-5">
                <div class="filter-table-box px-4 text-center">
                    <div class="table-slide-box">
                        <h2 class="fs-6"><span class="back text-black" onclick="window.history.back()"
                                style=" cursor: pointer; color: var(--text)!important;;"><i class="fa fa-backward mx-2"></i>Back
                                Page</span></h2>
                    </div>

                </div>
            </div>
        </div>
        {{ exist_name }}
        <div class="row mx-3">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div style="margin-top: 4rem;" id="api">

                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <form>
                            <div class="form-group">
                                <!-- <label for="input">Name</label> -->
                                <input type="text" class="form-control bg-transparent  my-2" placeholder="Name" v-model="input">
                            </div>
                            <div class="form-group mt-5">
                                <!-- <label for="Password">Type</label> -->
                                <input type="text" class="form-control bg-transparent  my-2" v-model="Password" placeholder="Type">
                            </div>

                            <div class="form-group mt-5">
                                <!-- <label for="PostBack">Post Back</label> -->
                                <input type="text" class="form-control bg-transparent  my-2" v-model="PostBack" placeholder="Postback">
                            </div>

                            <div class="form-group mt-5">
                                <!-- <label for="Parameters">Parameters</label> -->
                                <textarea class="Parameters form-control bg-transparent " v-model="parameter" placeholder="Parameters"></textarea>
                            </div>
                            <span class="btn btn-primary mt-5" @click="submitForm">Submit</span>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'
export default {
    name: 'Postback_edit',
    components: {
    SideNav,
    Navbar
},
    data() {
        return {
            exist_name:'',
            items: []

        }
    },
    created() {
    this.exist_name = this.$route.query.exist_name;

        // this.all_offers();
    },
    methods: {
        
        submitForm() {
            axios.post('http://localhost:8080/api/v1/update_post', {
                exist_name:this.$route.query.exist_name,
                name:this.input,
                type:this.Password,
                postback:this.PostBack,
                parameters:this.parameter,
            })
                .then(response => {
                    alert(`Success! Server responded with: ${response.data.response}`);
                    window.history.back()
                })
                .catch(error => {
                    alert(`Error: ${error}`);
                });
        }
    }
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

});
</script>

<style>

</style>