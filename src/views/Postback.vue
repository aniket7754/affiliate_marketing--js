<template>
    <side-nav/>
<navbar/>
    <div class="page-container row-fluid container-fluid">
        <section class="main-content">
            <div class="wrapper main-wrapper main-table filter_top">

                <div class="row ">
                    <div class="col-lg-12 ">
                        <div class="filter-table-box px-4 text-center">
                            <div class="table-slide-box">
                                <h2 class="fs-6"><span class="back text-black" onclick="window.history.back()"
                                        style=" cursor: pointer;"><i class="fa fa-backward mx-2"></i>Back
                                        Page</span><span class="back text-black ms-5" onclick="window.history.forward()"
                                        style=" cursor: pointer; color: var(--text)!important;">Forword<i class="fa fa-forward mx-2"></i>
                                        </span></h2>
                                        
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="data_table card-stats card-top mt-3" style="min-height: 450px">
                            <div class="row">
                                <div class="col-lg-6 text-start">
                                    <div class="table_heading mt-2 ">
                                        <h6 class="mx-3">Report</h6>
                                    </div>
                                </div>

                            </div>
                            <div class="table-responsive border-bottom-1">
                                <table id="example"
                                    class="table table-striped table-bordered border-top-0 border-bottom-0 mt-2"
                                    style="width:100%" >
                                    <thead class="table-bg text-center ">

                                        <tr class=" border-bottom-0">
                                            <th class="text-center"> Sr.No </th>
                                            <th class="text-center"> Name </th>
                                            <th class="text-center"> Type </th>
                                            <th class="text-center"> Event </th>
                                            <th class="text-center"> Status </th>
                                            <th class="text-center"> Global Postback </th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in items" :key="index" class="text=center">

                                            <td>{{ index+1 }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.type }}</td>
                                            <td>{{ item.event }}</td>
                                            <td>
                                                <span class="btn btn-danger" v-if="item.status == 0">Pending</span>
                                                <span class="btn btn-success" v-else>Uploaded</span>
                                            </td>
                                            <td style="display:flex; text-align:center!important;">
                                                <b-button v-b-tooltip.hover title="Tooltip content"
                                                    class="text-black ">{{ item.global_postback }}<i
                                                        class="mx-3 fa-solid fa-eye-slash"></i></b-button>
                                            </td>

                                            <td>
                                                <router-link :to="`/Postback_edit?exist_name=${item.name}`" class="postedit">
                                                    <i id="icon-size" title="Edit"
                                                        class='mx-4 fa-solid fa-edit text-black'></i>
                                                </router-link>

                                                <a href="#">
                                                    <i id="icon-size" title="Delete"
                                                        class="delete fa-solid fa-trash text-black"></i>
                                                </a>
                                            </td>
                                        </tr>



                                    </tbody>
                                </table>
                                <!-- <p v-else>No data available.</p> -->
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
    name: 'Postback',
    components: {
    SideNav,
    Navbar
},
    
    
    mounted() {
        fetch(`http://localhost:8080/api/v1/postback?publisher_name=${this.publisher_name}`)
            .then((response) => response.json())
            .then((data) => {
                this.items = data.response;
                setTimeout(() => {
                    $("#example").DataTable({
                        lengthMenu: [
                            [10, 15, 30, -1],
                            [10, 15, 30, "All"],
                        ],
                        pageLength:10,
                    });
                });
            });

        $(document).ready(function () {

            // var table = $('#example').DataTable();

            $('#example tbody').on('click', '.delete', function () {
                $('#example').DataTable().row($(this).parents('tr')).remove().draw();
            });

            

            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();
            });

            $(window).on('popstate', function (event) {
            });


        });

    },
    
    data: function () {
        return {
            baseURL: 'http://localhost:8080/api/v1/',
            endpoint: 'postback',
            
            publisher_name: "mediafeverr",

            
            items: []
        };
    },

}


</script>

<style>

</style>




