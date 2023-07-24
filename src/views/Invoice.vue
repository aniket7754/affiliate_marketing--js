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
                                <table id="campaignsview"
                                    class="table table-striped table-bordered border-top-0 border-bottom-0 mt-2"
                                    style="width:100%">
                                    <thead class="table-bg text-center ">

                                        <tr class=" border-bottom-0">
                                            <th> Sr.No</th>
                                            <th> Month </th>
                                            <th> Approved </th>
                                            <th> Revenue </th>
                                            <th> Invoice Status </th>
                                            <th> Payment Status </th>
                                            <th> Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr v-for="(item, index) in items" :key="index">
                                            <td>{{ index+ 1}}</td>
                                            <td>{{ item.month }}</td>
                                            <td>{{ item.approved }}</td>
                                            <td>{{ item.revenue }}</td>
                                            <td>
                                                <span class="btn btn-danger"
                                                    v-if="item.invoice_status == 0">Pending</span>
                                                <span class="btn btn-success" v-else>Uploaded</span>
                                            </td>

                                            <td><span class="btn btn-danger"
                                                    v-if="item.payment_status == 0">Unpaid</span>
                                                <span class="btn btn-success" v-else>Paid</span>
                                            </td>
                                            <td><i id="icon-size" class="fa-solid fa-eye" title="view"></i>
                                                <i id="icon-size" title="Upload" class='mx-4 bx bx-upload'></i>
                                                <a href="#">
                                                    <i id="icon-size" title="report"
                                                        class="fa-solid fa-bug text-black"></i>
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
    name: 'Invoive',
    components: {
    SideNav,
    Navbar
},
    // data() {
    //     return {
    //         publisher_name: 'lokesh',
    //         items: [],
    //     }
    // },
    // created() {
    //     this.fetchData();
    // },
    // methods: {
    //     fetchData() {
    //         const url = `http://localhost/api/v1/invoice?publisher_name=${this.publisher_name}`;
    //         axios.get(url)
    //             .then(response => {
    //                 console.log(response.data.response)
    //                 this.items = response.data.response;
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });
    //     }
    // },


    mounted() {
        fetch(`http://localhost:8080/api/v1/invoice?publisher_name=${this.publisher_name}`)
            .then((response) => response.json())
            .then((data) => {
                this.items = data.response;
                setTimeout(() => {
                    $("#campaignsview").DataTable({
                        lengthMenu: [
                            [10, 15, 30, -1],
                            [10, 15, 30, "All"],
                        ],
                        pageLength:10,
                    });
                });
            });
        $(document).ready(function () {

            // $('#campaignsview').DataTable({
            //     scrollX: false,
            // });

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
            publisher_name: "lokesh",
            items: [],
        };
    },





}





</script>

<style>

</style>