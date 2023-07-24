<template>
<side-nav/>
<navbar/>
    <div class="page-container row-fluid container-fluid">

        <section class="main-content">
            <div class="wrapper main-wrapper main-table filter_top" style=''>

                <div class="row ">
                    <div class="col-lg-12 ">
                        <div class="filter-table-box px-4 text-center">
                            <div class="table-slide-box">
                                <h2 class="fs-6"><span class="back text-black" onclick="window.history.back()"
                                        style=" cursor: pointer; color: var(--text)!important;"><i class="fa fa-backward mx-2"></i>back
                                        </span><span class="back text-black ms-5" onclick="window.history.forward()"
                                        style=" cursor: pointer; color: var(--text)!important;">Forword<i class="fa fa-forward mx-2"></i>
                                        </span></h2>
                                        <!-- <h2 class="fs-6"><span class="back text-black" onclick="window.history.forward()"
                                        style=" cursor: pointer; color: var(--text)!important;"><i class="fa fa-backward mx-2"></i>Forward
                                        </span></h2> -->
                                <button class="btn bg-danger text-white mt-3 px-4 filter_btn" id="edit-btn">filter</button>

                            </div>

                            <div class="row mt-2">

                                <div class="row">
                                    <div class="col-lg-3 mt-4">
                                        <div class="grouplable">
                                            <label for="name" class="col-sm-4 control-label"
                                                style="white-space:nowrap; color: var(--text)!important;">Group
                                                By</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="form-group row mt-5 pt-3 px-2">
                                            <div class="wraper">

                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox" id="Sr_no"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Sr_no">Date</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox" id="Offerid"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Offerid">OfferId/Name</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox" id="Model"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Model">Model</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" type="checkbox" id="conversion"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="conversion">Con.. Time</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" type="checkbox" id="event"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="event">Event</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" type="checkbox" id="source"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="source">Source Id</label>
                                                </div>
                                                <div class="checkbox-inline ms-4 mt-2">
                                                    <input class="form-check-input" type="checkbox" id="location"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="location">Location</label>
                                                </div>
                                                <div class="checkbox-inline mt-2">
                                                    <input class="form-check-input" type="checkbox" id="geos"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="geos">Geos</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="grouplable">
                                            <label for="name" class="col-sm-4 control-label"
                                                style="white-space:nowrap; color: var(--text)!important;">Columns
                                            </label>

                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="form-group row mt-4 pt-3 px-4">
                                            <div class="wraper">
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" type="checkbox" id="Hour"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Hour">Hour</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" type="checkbox" id="Month"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Month">Month</label>
                                                </div>

                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox" id="Click"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Click">Click</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox"
                                                        id="conversion_2" name="severity[]" value="0">
                                                    <label class="form-check-label"
                                                        for="conversion_2">conversion</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox" id="Revenue"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Revenue">Revenue</label>
                                                </div>
                                                <div class="checkbox-inline">
                                                    <input class="form-check-input" checked type="checkbox" id="C_R"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="C_R">C.R</label>
                                                </div>
                                                <div class="checkbox-inline ms-4 mt-2">
                                                    <input class="form-check-input" type="checkbox" id="payout"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="payout">Payout</label>
                                                </div>
                                                <div class="checkbox-inline mt-2">
                                                    <input class="form-check-input" type="checkbox" id="Platform"
                                                        name="severity[]" value="0">
                                                    <label class="form-check-label" for="Platform">Platfrom</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="grouplable">
                                            <label for="name" class="col-sm-4 control-label mt-4"
                                                style="white-space:nowrap; color: var(--text)!important;">Search
                                            </label>

                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="form-group row mt-4 pt-3 px-4">
                                            <div class="wraper">

                                                <div class="col-lg-6 ms-5">
                                                    <label for="inputPassword6" class="col-form-label">offers</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" id="inputPassword6" class="bg-transparent input-text form-control"
                                                        aria-describedby="passwordHelpInline">
                                                </div>

                                                <div class="col-lg-6 ms-5">
                                                    <label for="inputPassword6" class="col-form-label">Package
                                                        Name</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" id="inputPassword6" class="bg-transparent input-text form-control"
                                                        aria-describedby="passwordHelpInline">
                                                </div>

                                                <div class="col-lg-6 ms-5">
                                                    <label for="inputPassword6" class="col-form-label">Platforms</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" id="inputPassword6" class="bg-transparent input-text form-control"
                                                        aria-describedby="passwordHelpInline">
                                                </div>

                                                <div class="col-lg-6 ms-5 mt-3">
                                                    <label for="inputPassword6" class="col-form-label">Geos</label>
                                                </div>
                                                <div class="col-auto mt-3">
                                                    <input type="text" id="inputPassword6" class="bg-transparent input-text form-control"
                                                        aria-describedby="passwordHelpInline">
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>

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

                                        <tr>
                                            <th class="Sr_no">Date</th>
                                            <th class="Hour">Hour</th>
                                            <th class="Month">Month</th>
                                            <th class="Offerid">Offerid/Name</th>
                                            <th class="Model">Model</th>
                                            <th class="Click">Click/Backtraffic</th>
                                            <th class="conversion_2">conversion</th>
                                            <th class="Revenue">Revenue</th>
                                            <th class="C_R">C.R</th>
                                            <th class="source all">Source Id</th>
                                            <th class="conversion all">Conversion Time</th>
                                            <th class="event all">Event</th>
                                            <th class="Platform">Platform</th>
                                            <th class="location all">Location</th>
                                            <th class="payout all">Payout</th>
                                            <th class="Geos all">Geos</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="Sr_no">Caesar Vance</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Pre-Sales Support</td>
                                            <td class="Model">New York</td>
                                            <td class="Click">21</td>
                                            <td class="conversion_2">2011/12/12</td>
                                            <td class="Revenue">1</td>
                                            <td class="C_R">$106,450</td>
                                            <td class="source all">Source 1</td>
                                            <td class="conversion all">c1</td>
                                            <td class="event all">e1</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location">l1</td>
                                            <td class="payout all">p1</td>
                                            <td class="Geos all">G1</td>
                                        </tr>
                                        <tr>
                                            <td class="Sr_no">Doris Wilder</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Sales Assistant</td>
                                            <td class="Model">Sidney</td>
                                            <td class="Click">23</td>
                                            <td class="conversion_2">2010/09/20</td>
                                            <td class="Revenue">2</td>
                                            <td class="C_R">$85,600</td>
                                            <td class="source all">source 2</td>
                                            <td class="conversion all">c2</td>
                                            <td class="event all">e2</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location all">l2</td>
                                            <td class="payout all">p2</td>
                                            <td class="Geos all">G2</td>
                                        </tr>
                                        <tr>
                                            <td class="Sr_no">Angelica Ramos</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Chief Executive Officer (CEO)</td>
                                            <td class="Model">London</td>
                                            <td class="Click">47</td>
                                            <td class="conversion_2">2009/10/09</td>
                                            <td class="Revenue">3</td>
                                            <td class="C_R">$1,200,000</td>
                                            <td class="source all">source 3</td>
                                            <td class="conversion all">c3</td>
                                            <td class="event all">e3</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location all">l3</td>
                                            <td class="payout all">p3</td>
                                            <td class="Geos all">G3</td>

                                        </tr>
                                        <tr>
                                            <td class="Sr_no">Gavin Joyce</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Developer</td>
                                            <td class="Model">Edinburgh</td>
                                            <td class="Click">42</td>
                                            <td class="conversion_2">2010/12/22</td>
                                            <td class="Revenue">4</td>
                                            <td class="C_R">$92,575</td>
                                            <td class="source all">source 4</td>
                                            <td class="conversion all">c4</td>
                                            <td class="event all">e4</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location all">l4</td>
                                            <td class="payout all">p4</td>
                                            <td class="Geos all">G4</td>
                                        </tr>
                                        <tr>
                                            <td class="Sr_no">Jennifer Chang</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Regional Director</td>
                                            <td class="Model">Singapore</td>
                                            <td class="Click">28</td>
                                            <td class="conversion_2">2010/11/14</td>
                                            <td class="Revenue">5</td>
                                            <td class="C_R">$357,650</td>
                                            <td class="source all">source 5</td>
                                            <td class="conversion all">c5</td>
                                            <td class="event all">e5</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location all">l5</td>
                                            <td class="payout all">p5</td>
                                            <td class="Geos all">G5</td>
                                        </tr>
                                        <tr>
                                            <td class="Sr_no">Brenden Wagner</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Software Engineer</td>
                                            <td class="Model">San Francisco</td>
                                            <td class="Click">28</td>
                                            <td class="conversion_2">2011/06/07</td>
                                            <td class="Revenue">6</td>
                                            <td class="C_R">$206,850</td>
                                            <td class="source all">source 6</td>
                                            <td class="conversion all">c6</td>
                                            <td class="event all">e6</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location all">l6</td>
                                            <td class="payout all">p6</td>
                                            <td class="Geos all">G6</td>
                                        </tr>
                                        <tr>
                                            <td class="Sr_no">Brenden Wagner</td>
                                            <td class="Hour">1:30</td>
                                            <td class="Month">March</td>
                                            <td class="Offerid">Software Engineer</td>
                                            <td class="Model">San Francisco</td>
                                            <td class="Click">28</td>
                                            <td class="conversion_2">2011/06/07</td>
                                            <td class="Revenue">7</td>
                                            <td class="C_R">$206,850</td>
                                            <td class="source all">source 7</td>
                                            <td class="conversion all">c7</td>
                                            <td class="event all">e7</td>
                                            <td class="Platform">ppp</td>
                                            <td class="location all">l7</td>
                                            <td class="payout all">p7</td>
                                            <td class="Geos all">G7</td>
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
    name: 'Reports',
    components: {
    SideNav,
    Navbar
},

    data() {
        return {

        }
    },
    mounted() {
        let filterbtn = document.querySelector('.filter_btn');
        let tablebox = document.querySelector('.filter-table-box');
        filterbtn.addEventListener('click', () => {
            tablebox.classList.toggle('active');
        });

        $(document).ready(function () {

            $(window).on('popstate', function (event) {
            });

            var table = $('#campaignsview').DataTable({
                scrollX: false,
            });

            $("#selectAll").on('click', function () {

                $("input[type=checkbox]").prop("checked", $(this).prop("checked"));


            });
            $('.check-table').on('click', function () {

                var column = table.column($(this).attr('data-column'));

                column.visible(!column.visible());

            });
            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();
            })


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


            $(".all").hide();
            $("#selectAll").click(function () {
                if ($(this).is(":checked")) {
                    $(".all").show();
                } else {
                    $(".all").hide();
                }
            });

            $(".Sr_no").show();
            $("#Sr_no").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".Sr_no").show();
                } else {
                    $(".Sr_no").hide();
                }
            });

            $(".Offerid").show();
            $("#Offerid").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".Offerid").show();
                } else {
                    $(".Offerid").hide();

                }
            });

            $(".Model").show();
            $("#Model").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".Model").show();
                } else {
                    $(".Model").hide();
                }
            });

            $(".Click").show();
            $("#Click").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".Click").show();
                } else {
                    $(".Click").hide();
                }
            });

            $(".conversion_2").show();
            $("#conversion_2").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".conversion_2").show();
                } else {
                    $(".conversion_2").hide();

                }
            });

            $(".Revenue").show();
            $("#Revenue").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".Revenue").show();
                } else {
                    $(".Revenue").hide();
                }
            });

            $(".C_R").show();
            $("#C_R").click(function () {
                if ($(this).prop('checked') == true) {
                    $(".C_R").show();
                } else {
                    $(".C_R").hide();
                }
            });


            // =============================

            $(".Hour").hide();
            $("#Hour").click(function () {
                if ($(this).is(":checked")) {
                    $(".Hour").show();
                } else {
                    $(".Hour").hide();
                }
            });

            $(".Month").hide();
            $("#Month").click(function () {
                if ($(this).is(":checked")) {
                    $(".Month").show();
                } else {
                    $(".Month").hide();
                }
            });

            $(".source").hide();
            $("#source").click(function () {
                if ($(this).is(":checked")) {
                    $(".source").show();
                } else {
                    $(".source").hide();
                }
            });

            $(".conversion").hide();
            $("#conversion").click(function () {
                if ($(this).is(":checked")) {
                    $(".conversion").show();
                } else {
                    $(".conversion").hide();
                }
            });

            $(".event").hide();
            $("#event").click(function () {
                if ($(this).is(":checked")) {
                    $(".event").show();
                } else {
                    $(".event").hide();
                }
            });


            $(".location").hide();
            $("#location").click(function () {
                if ($(this).is(":checked")) {
                    $(".location").show();
                } else {
                    $(".location").hide();
                }
            });

            $(".payout").hide();
            $("#payout").click(function () {
                if ($(this).is(":checked")) {
                    $(".payout").show();
                } else {
                    $(".payout").hide();
                }
            });

            $(".Geos").hide();
            $("#geos").click(function () {
                if ($(this).is(":checked")) {
                    $(".Geos").show();
                } else {
                    $(".Geos").hide();
                }
            });

            $(".Platform").hide();
            $("#Platform").click(function () {
                if ($(this).is(":checked")) {
                    $(".Platform").show();
                } else {
                    $(".Platform").hide();
                }
            });





        });
    }

}






</script>

<style>
/*================= Filter Table card end ==================*/

.wraper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
}

.form-check-label {
    padding: 0 .3rem;
}

.grouplable {
    margin-top: 3rem;
    padding: 0 2rem;
}

.maindiv {
    width: 100%;
    height: auto;
    background-color: #fff;
    box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
    .wraper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);

    }

    .form-check-label {
        padding: 0 .5rem;
        white-space: nowrap;
    }

}

.table-responsive {
    overflow-x: auto !important;
}

.form-check-label{
    color: var(--text)!important;
}

.col-form-label{
    color: var(--text)!important;
}

.input-text{
    color: var(--text)!important;
}

</style>