<template>

<!-- v-if="!$route.meta.hideNavbar" -->
    <div class='page-topbar ' >
        <div class='logo-area'>
     
        
        </div>
        <nav class="navbar navbar-expand-lg " data-scroll="true" id="navbar" >

            <div class="container-fluid">

                <button type="button" id="sidebarCollapse"
                    class="d-xl-block  d-lg-block d-block  ml-auto d-md-block d-inline-block mt-2 sidebar_toggle ">
          
                    <span class="fa fa-bars m-bars"></span>
                    <!-- <span class="fs-5 text-white ms-5">Dashboard</span> -->


                </button>
                <div class="me-5 ">
                    <h5 class="text-white sidebar_text" id="side_text" :title=title></h5>
                  </div>
       
                <div class="collapse navbar-collapse d-inline-block d-lg-none  d-xl-block d-flex justify-content-end"
                    id="navbarSupportedContent">

                    <ul class="nav navbar-nav ml-auto text-center mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link icon tolink">
                                <span class="change today" id="today">Today <i class="fas fa-angle-down "></i></span>

                            </a>
                        </li>
                        <li class="dropbell nav-item active">
                            <a href="#" class="nav-link">

                                <span class="fa-solid fa-bell notifiction change"></span>

                                <!-- <span class="notification">3</span> -->
                                <span class="badge redbadge badge-danger">3</span>
                            </a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link icon ">
                                <!-- <span class="fa-solid fa-sun change" id="sun"></span> -->
                                <span class="bi bi-brightness-high-fill change" id="sun"></span>
                                
                            </a>
                        </li>

                        <li class="nav-item alpha-text">
                            <a class="nav-link" href="#">

                                <span class="fas fa-light fa-font change alpha"></span>
                            </a>
                        </li>

                    </ul>
        
                </div>

            </div>


        </nav>


        <!-- ------------------------ Calender Popup Box ---------------------- -->

        <div class="calender drop-menu-arrow">

            <a class="dropdown-menu-title menu-select" href="" id="today">
                <i class="calendar-icon ic_view_day" value="1"></i>Today
            </a>

            <a class="dropdown-menu-title menu-select" href="" id="yesterday">
                <i class="calendar-icon ic_view_week" value="2"></i>Yesterday
            </a>
            <a class="dropdown-menu-title menu-select" href="" id="thisweek">
                <i class="calendar-icon ic_view_month" value="3"></i>This Week
            </a>
            <a class="dropdown-menu-title menu-select" href="" id="lastweek">
                <i class="calendar-icon ic_view_month" value="4"></i>Last Week
            </a>
            <a class="dropdown-menu-title menu-select" href="" id="thismonth">
                <i class="calendar-icon ic_view_week" value="5"></i>This Month
            </a>
            <a class="dropdown-menu-title menu-select" href="" id="lastmonth">
                <i class="calendar-icon ic_view_week" value="6"></i>Last Month
            </a>
            <a class="dropdown-menu-title custom" href="#" id="custom">
                custom <i class="fas fa-angle-right rightangle"></i>
            </a>
            <div class="inputcalender">
                <input type="text" name="daterange" id="demo-2" autocomplete="off">
            </div>
        </div>


        <!-- ------------------------ Notification Popup Box ----------------------->


        <div class="bellbox drop-menu-arrow ">


            <ul class="bell-menu px-4">
                <li class="notifications-list">
                    <i class="fa fa-exclamation-circle text-primary"></i>
                    <a href="#">You have 5 new messages </a>
                    <i class="fa fa-times cart-btn"></i>
                    <h6>New message</h6>
                    <p>30 min. ago</p>
                </li>
                <li class="notifications-list">
                    <i class="fa fa-exclamation-circle text-success"></i>
                    <a href="#">You have 5 new messages </a>
                    <i class="fa fa-times cart-btn "></i>

                    <h6>New message</h6>
                    <p>30 min. ago</p>
                </li>
                <li class="notifications-list">
                    <i class="fa fa-exclamation-circle text-danger"></i>
                    <a href="#">You have 5 new messages </a>
                    <i class="fa fa-times cart-btn "></i>
                    <h6>New message</h6>
                    <p>30 min. ago</p>
                </li>
                <hr>
                <li class="list-foot">
                    You have 3 new notifications
                    <a href="#"><span class="badge rounded-pill bg-primary ">View all</span></a>
                </li>
            </ul>
        </div>


        <!-- ------------------------ Profile Popup Box ----------------------->


        <div class="menudrop-list drop-menu-arrow">
            <div class="text-center">
                <a href="#" class="dropdown-item text-center font-weight-sembold user mt-2">
                    <img src="../assets/image/pic-2.png" alt="Profile" class="rounded-circle" style="width: 2.5rem;">
                </a>
                <span class="text-center user-semi-title my-1 textdark">web designer</span>
                <div class="dropdown-divider"></div>
            </div>

            <router-link to="/Mainprofile" class="drop-list " >
                <i class="fas fa-user" id="profile"></i> Profile
            </router-link>
            <a class="drop-list setting_open" href="#">
                <i class="fas fa-gear"></i> Settings
            </a>


            <a class="drop-list" href="#">
                <i class="fas fa-question-circle"></i> Need help?
            </a>
            <div class="dropdown-divider"></div>

            <router-link to="/" class="drop-list" id="signbtn">
                <i class="fas fa-angle-right"></i> Sign out
            </router-link>
        </div>

    </div>


</template>


<script>
export default {
    name: 'Navbar',

    data(){
        return{

        }
    },
    mounted (){


      
        // ------------------- Dark and light mode ------------------------


let sunbtn = document.querySelector('#sun');

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}


let localData = localStorage.getItem("theme");

if (localData == "light") {
    sunbtn.classList.add("bi-brightness-high-fill");
    document.body.classList.remove("dark-theme");

}
else if (localData == "dark") {
    sunbtn.classList.add("bi-moon");
    document.body.classList.add("dark-theme");
}


sunbtn.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        sunbtn.classList.add("bi-moon");
        localStorage.setItem("theme", "dark");

    }
    else {
        sunbtn.classList.add("bi-brightness-high-fill");
        sunbtn.classList.remove("bi-moon");
        localStorage.setItem("theme", "light");
    }
})





    
        //    let sidemenu = document.querySelector('.side-menu');
        // //   let tolink = document.querySelector('.tolink');

        //    sidemenu.addEventListener('click', function(){
        //     document.querySelector('.tolink').innerHTML = 'Today';
        //    })
       
// new Lightpick({
// field: document.getElementById('demo-2'),
// singleDate: false,
// onSelect: function(start, end){
// document.getElementById('result-2').innerHTML = rangeText(start, end);
// }
// });

let custom = document.querySelector('#custom');
  let inputBox = document.querySelector('input');
  let rightAngle = document.querySelector('.rightangle');
     custom.addEventListener('click', ()=>{
         inputBox.classList.toggle('active');
         rightAngle.classList.toggle('active');

     });

 

     new Lightpick({
    field: document.getElementById('demo-2'),
    singleDate: false,
    onSelect: function(start, end){
        var str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
        document.getElementById('result-2').innerHTML = str;
    }
});


$(document).ready(function () {

$('.dropbell').hover(() => {
    $('.bellbox').css('display', 'block');
    $('.menudrop-list').css('display', 'none');
    $('.calender').css('display', 'none');

});
$('.bellbox').mouseleave(() => {
    $('.bellbox').addClass('active');
    $('.bellbox').fadeOut();
});

$(".cart-btn").click(function () {
    $(this).parents(".notifications-list").fadeOut();
});
$('.today').hover(() => {
    $('.calender').css('display', 'block');
    $('.menudrop-list').css('display', 'none');
    $('.bellbox').css('display', 'none');

});



$('.alpha-text').hover(() => {
    $('.menudrop-list').css('display', 'block');
    $('.bellbox').css('display', 'none');
    $('.calender').css('display', 'none');


});
$('.menudrop-list').mouseleave(() => {
    $('.menudrop-list').addClass('active');
    $('.menudrop-list').fadeOut();

});
$('.wrapper').hover(() => {
    $('.bellbox').fadeOut();
    $('.menudrop-list').fadeOut();
    $('.calender').fadeOut();


});

$('.box-button').click(() => {
    $('.filter_table_card').slideToggle('slow');
});
$('.drop-list').click(() => {
    $('.menudrop-list').css('display', 'none');
})

$('#today').click(function () {
    $('.tolink').text('Today');
    $('.calender').fadeOut();
    return false;
})
$('#yesterday').click(function () {
    $('.tolink').text('Yesterday');
    $('.calender').fadeOut();
    return false;
})
$('#thisweek').click(function () {
    $('.tolink').text('This week');
    $('.calender').fadeOut();
    return false;
})
$('#lastweek').click(function () {
    $('.tolink').text('Last week');
    $('.calender').fadeOut();
    return false;
})
$('#thismonth').click(function () {
    $('.tolink').text('This month');
    $('.calender').fadeOut();
    return false;
})
$('#lastmonth').click(function () {
    $('.tolink').text('Last month');
    $('.calender').fadeOut();
    return false;
})
$('.custom').click(function () {
    $('.tolink').text('Custom');
})

$('.tolink').hover(() => {
    $('.calender').css('display', 'block');
    $('.bellbox').css('display','none');
});


});
    }
}




</script>


<style>

.bi-brightness-high-fill{
    font-size: 1rem;
}
.sidebar_text{
    margin-top: .9rem;
    margin-left: -9rem;
}
.nav-item {
    cursor: pointer;
}
.redbadge {
    position: absolute;
    top: -.1rem;
    left: 1.2rem;
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    /* padding: 3px 6px; */
    border-radius: 50% !important;
    border: 1px solid transparent;
    min-width: 6px !important;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 99999px;
}

.badge.badge-danger {
    background-color: #ef1c1c !important;
}

.fas{
    margin-top: 0rem!important;
}

</style>