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
                                        Page</span></h2>
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
                                            <th class="wd-15p text-center">Sr.</th>
                                            <th class="wd-15p text-center">Campaigns Name</th>
                                            <th class="wd-15p text-center">Conversion</th>
                                            <th class="wd-15p text-center">Revenue</th>



                                        </tr>
                                    </thead>
                                    <tbody class="text-center border-bottom-1">
                                        <tr v-for="(item,index) in items" :key="index">
                                            <td>{{ index+1 }}</td>
                                            <td><router-link to="/Reports" class="linkbtn">
                                                    {{item._id}}</router-link></td>
                                                    <td>{{ item.conversions }}</td>
                                            <td>{{ (item.conversions * item.payout).toFixed(3) }}</td>

                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </section>


    </div>

</template>

<script>
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'
export default {
    name: 'Campaigns_table.vue',
    components: {
    SideNav,
    Navbar
},

    data() {
        return {
            items: []
        }
    },
    mounted() {
        post(`http://localhost:8080/api/v1/top_5_campaigns?start_date=2023-01-01&end_date=2023-01-03&pub_name=savtarr`)
            .then((response) => response.json())
            .then((data) => {
                this.items = data.response;
                setTimeout(() => {
                    $("#campaignsview").DataTable({
                        lengthMenu: [
                            [10, 15, 30, -1],
                            [10, 15, 30, "All"],
                        ],
                scrollX: false,

                        pageLength:10,
                    });
                });
            });


        $(document).ready(function () {

            // $('#campaignsview').DataTable({
            //     scrollX: false,
            // });

            $("#selectAll").on('click', function () {

                $("input[type=checkbox]").prop("checked", $(this).prop("checked"));


            });


            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();

                $(window).on('popstate', function (event) {
                });

            });

            var availableTags = [
                "Alphsoft",
                "AppleScript",
                "Asp",
                "BASIC",
                "Chetu",
                "",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Exelsoft",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Moneyfiy",
                "Python",
                "Robotics",
                "Savatarr",
                "Software tech",
                "Tech hire",
                "Tcs"
            ];
            $(".form-control").autocomplete({
                source: availableTags
            });

        });
    }
}




</script>


<style>

</style>