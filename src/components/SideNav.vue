<template>
    <div class="page-sidebar fixedscroll  ">

        <div class="page-sidebar-wrapper" id="main-menu-wrapper">

            <ul class='wraplist mt-5'>
                <!-- <li class='menusection'>Main</li> -->
                <li class="list_hover">

                    <router-link to="/Dashboard" class="dashboard side-menu">
                        <i class="fa fa-th-large"></i>
                        <span class="title">Dashboard</span>
                    </router-link>
                </li>

                <li class="Rpt list_hover">

                    <router-link to="/Reports" class="">
                        <i class="fa fa-user"></i>
                        <span class="title">Reports</span>
                    </router-link>
                </li>

                <li class="">
                    <a href="#">
                        <i class="fa fa-bookmark"></i>
                        <span class="title">Campaigns</span>
                        <!-- <span class="arrow "></span> -->
                    </a>
                    <ul class="sub-menu">
                        <li class="R_cam ">
                            <router-link to="/Request_Campaign" id="trackall">Request Campaigns
                                <span class="hoverarrow"></span>
                            </router-link>
                        </li>
                        <li class="A_cam ">
                            <router-link to="/Approved" id="aproved">Approved Campaigns
                                <span class="hoverarrow"></span>
                            </router-link>
                        </li>

                    </ul>
                </li>

                <li class="invoice list_hover">

                    <router-link to="/Invoice" class="">
                        <i class="fa-solid fa-file-invoice"></i>
                        <span class="title">Invoice</span>
                    </router-link>
                </li>

                <li class="">
                    <a href="#">
                        <i class="fa fa-sitemap"></i>
                        <span class="title">Other</span>
                        <!-- <span class="arrow"></span> -->

                    </a>
                    <ul class="sub-menu">
                        <li class="Api ">
                            <router-link to="/Api_data" id="net">Api Data
                                <span class="hoverarrow"></span>
                            </router-link>
                        </li>
                        <li class="pback ">
                            <router-link to="/Postback" id="pub">Postback
                                <span class="hoverarrow"></span>
                            </router-link>

                        </li>
                    </ul>
                </li>
            </ul>

        </div>
        <!-- MAIN MENU - END -->

        <div class="time" id="time"
            style=" position : absolute; bottom:60px; width: 100%; background: black;">
            <div class="profile-content mt-3">
                <div class="profileimg">
                    <a href="#">
                        <img src="../assets/image/pic-1.png" class="" style="width: 60px;">
                    </a>
                </div>
                <div class="profile-text text-center">
                    <span  class="text-white">Name: Xyzname</span><br>
                    <span  class="text-white">Email Id: Xyz@gmail.com</span><br>
                    <span class="text-white" >Skyp Id: 349u303-045739</span>
                </div>
            <div id='clock'></div>
            </div>
        </div>

        <!-- <div class="time" id="time">
            <div class="card border py-4">
                <img src="../assets/image/pic-1.png" style="width: 60px;" class="d-block mx-auto card-img-top"
                    alt="../assets/image/pic-1.png">
                <div class="card-body">
                    <span class="text-black">Name: Xyzname</span><br>
                    <span class="text-black">Email Id: Xyz@gmail.com</span><br>
                    <span class="text-black">Skyp Id: 349u303-045739</span>
                    <div class="text-black" id='clock'></div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>
export default {
    name: 'SideNav',

    data() {
        return {

        }
    },
    mounted() {
        let sidemenu = document.querySelector('.side-menu');
        let Reports = document.querySelector('.Rpt');
        let Request = document.querySelector('.R_cam');
        let Approved = document.querySelector('.A_cam');
        let invoice = document.querySelector('.invoice');
        let Api = document.querySelector('.Api');
        let Pback = document.querySelector('.pback');
        let sidetext = document.querySelector('.sidebar_text');


        sidemenu.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Dashboard';
        });

        Reports.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Reports';
        });

        Request.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Request Campaigns';

        });

        Approved.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Approved Campaigns';

        });

        invoice.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Invoice';

        });

        Api.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Api Data';

        });

        Pback.addEventListener('click', function () {
            document.querySelector('.tolink').innerHTML = 'Today';
            sidetext.innerHTML = 'Postback';

        });

        function updateClock() {
            var now = new Date();
            var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
            var clock = document.getElementById("clock");
            clock.innerHTML = utc.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
        }
        setInterval(updateClock, 1000);






        $(document).ready(function () {

            "use strict";

            var _SETTINGS = window._SETTINGS || {};

            /*--------------------------------
                 Window Based Layout
             --------------------------------*/
            _SETTINGS.windowBasedLayout = function () {
                var width = window.innerWidth;
                //console.log(width);

                if ($("body").hasClass("chat-open") || $("body").hasClass("sidebar-collapse")) {

                    _SETTINGS.mainmenuCollapsed();

                } else if (width < 767) {

                    // small window
                    $(".page-topbar").addClass("sidebar_shift").removeClass("chat_shift");
                    $(".page-sidebar").addClass("collapseit").removeClass("expandit");
                    $(".main-content").addClass("sidebar_shift").removeClass("chat_shift");
                    $(".page-chatapi").removeClass("showit").addClass("hideit");
                    $(".chatapi-windows").removeClass("showit").addClass("hideit");
                    // _SETTINGS.mainmenuCollapsed();

                } else {

                    // large window
                    $(".page-topbar").removeClass("sidebar_shift chat_shift");
                    $(".page-sidebar").removeClass("collapseit chat_shift");
                    $(".main-content").removeClass("sidebar_shift chat_shift");
                }

            }

            /*--------------------------------
             Window Based Layout
            --------------------------------*/
            _SETTINGS.onLoadTopBar = function () {

                $(".page-topbar .message-toggle-wrapper").addClass("showopacity");
                $(".page-topbar .notify-toggle-wrapper").addClass("showopacity");
                $(".page-topbar .searchform").addClass("showopacity");
                $(".page-topbar li.profile").addClass("showopacity");
            }


            $('.page-topbar .sidebar_toggle').on('click', function () {
                var chatarea = $(".page-chatapi");
                var chatwindow = $(".chatapi-windows");
                var topbar = $(".page-topbar");
                var mainarea = $(".main-content");
                var menuarea = $(".page-sidebar");
                var submenu = $('.sub-menu');
                // var sidebartext = $('.sidebar_text');

                if (menuarea.hasClass("collapseit") || menuarea.hasClass("chat_shift")) {
                    menuarea.addClass("expandit").removeClass("collapseit").removeClass("chat_shift");
                    topbar.removeClass("sidebar_shift").removeClass("chat_shift");
                    mainarea.removeClass("sidebar_shift").removeClass("chat_shift");
                    chatarea.addClass("hideit").removeClass("showit");
                    chatwindow.addClass("hideit").removeClass("showit");
                    submenu.addClass('active').removeClass("collapseit").removeClass("chat_shift");
                    _SETTINGS.mainmenuScroll();
                } else {
                    menuarea.addClass("collapseit").removeClass("expandit").removeClass("chat_shift");
                    topbar.addClass("sidebar_shift").removeClass("chat_shift");
                    mainarea.addClass("sidebar_shift").removeClass("chat_shift");
                    // chatarea.removeClasss("hideit").removeClass("showit");
                    // chatwindow.removeClasss("hideit").removeClass("showit");

                    // $('.fa-bars').css('transform', 'translateX(10%)')

                    _SETTINGS.mainmenuCollapsed();
                }
            });

            $('.sub-menu a').click(() => {
                var topbar = $(".page-topbar");
                var mainarea = $(".main-content");
                var menuarea = $(".page-sidebar");
                $('.sub-menu').hide()

                menuarea.addClass("expandit").removeClass("collapseit").removeClass("chat_shift");
                topbar.removeClass("sidebar_shift").removeClass("chat_shift");
                mainarea.removeClass("sidebar_shift").removeClass("chat_shift");

            })


            $('.dashboard').click(() => {
                var topbar = $(".page-topbar");
                var mainarea = $(".main-content");
                var menuarea = $(".page-sidebar");
                $('.sub-menu').hide()

                menuarea.addClass("expandit").removeClass("collapseit").removeClass("chat_shift");
                topbar.removeClass("sidebar_shift").removeClass("chat_shift");
                mainarea.removeClass("sidebar_shift").removeClass("chat_shift");

            })

            /*--------------------------------
                 Collapsed Main Menu
             --------------------------------*/
            _SETTINGS.mainmenuCollapsed = function () {

                if ($(".page-sidebar.chat_shift #main-menu-wrapper").length > 0 || $(".page-sidebar.collapseit #main-menu-wrapper").length > 0) {
                    //console.log("collapse menu");
                    var topbar = $(".page-topbar").height();
                    var windowheight = window.innerHeight;
                    var minheight = windowheight - topbar;
                    var fullheight = $(".page-container .main-content .wrapper").height();

                    var height = fullheight;

                    if (fullheight < minheight) {
                        height = minheight;
                    }

                    // $('.fixedscroll #main-menu-wrapper').perfectScrollbar('destroy');

                    $('.page-sidebar.chat_shift #main-menu-wrapper .wraplist, .page-sidebar.collapseit #main-menu-wrapper .wraplist').height(height);

                    /*hide sub menu of open menu item*/
                    $("li.open .sub-menu").attr("style", "");

                }

            };

            /*--------------------------------
                  Main Menu
              --------------------------------*/

            $(".list_hover").click(function () {
                $(".list_hover").removeClass("active");
                $(this).addClass("active");
            });

            // $(".Rpt").click(function () {
            //     $(".Rpt").removeClass("active");
            //     $(".Rpt").addClass("active");
            // });


        });

        $(document).ready(function () {
            // _SETTINGS.mainMenu = function() {
            $('#main-menu-wrapper li a').on('click', function (e) {

                if ($(this).next().hasClass('sub-menu') === false) {
                    return;
                }

                var parent = $(this).parent().parent();
                var sub = $(this).next();

                parent.children('li.open').children('.sub-menu').slideUp(200);
                parent.children('li.open').children('a').children('.arrow').removeClass('open');
                parent.children('li').removeClass('open');

                if (sub.is(":visible")) {
                    $(this).find(".arrow").removeClass("open");
                    sub.slideUp(200);
                } else {
                    $(this).parent().addClass("open");
                    $(this).find(".arrow").addClass("open");
                    sub.slideDown(200);
                }

            });

            $("body").on('click', function (e) {
                $(".page-sidebar.collapseit .wraplist li.open .sub-menu").attr("style", "");
                $(".page-sidebar.collapseit .wraplist li.open").removeClass("open");
                $(".page-sidebar.chat_shift .wraplist li.open .sub-menu").attr("style", "");
                $(".page-sidebar.chat_shift .wraplist li.open").removeClass("open");
            });

            // $(document).ready(function() {

            // });

            _SETTINGS.windowBasedLayout();
            _SETTINGS.mainMenu();
            _SETTINGS.mainmenuCollapsed();
            _SETTINGS.pageTopBar();

            $(window).resize(function () {
                _SETTINGS.windowBasedLayout();
                _SETTINGS.mainMenu();
                _SETTINGS.mainmenuCollapsed();
                _SETTINGS.pageTopBar();

            });


        });


        /******************************
         initialize respective scripts 
         *****************************/
        $(document).ready(function () {
            _SETTINGS.windowBasedLayout();
            _SETTINGS.mainmenuScroll();
            _SETTINGS.mainMenu();
            _SETTINGS.chatAPI();
            _SETTINGS.mainmenuCollapsed();
            _SETTINGS.chatApiScroll();
            _SETTINGS.chatApiWindow();

            // _SETTINGS.onLoadTopBar();
        });

        $(window).resize(function () {
            _SETTINGS.windowBasedLayout();
            _SETTINGS.mainmenuScroll();

        });

    }
}
</script>

<style>
#clock {
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    /* bottom: 0px; */
    /* transform: translateX(-50%) translateY(-50%); */
    color: white;
    font-size: 25px;
    font-family: Orbitron;
    letter-spacing: 2px;
}

.list_hover.active {
    background: #D8D8D8 !important;
}

.testimonial-card .card-up {
    height: 120px;
    overflow: hidden;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}

.aqua-gradient {
    background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
}

.testimonial-card .avatar {
    width: 120px;
    margin-top: -60px;
    overflow: hidden;
    border: 5px solid #fff;
    border-radius: 50%;
}
</style>
