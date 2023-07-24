<template>
    <side-nav />
    <navbar />
    <div class="main-content  main-table">

        <div class="row mx-3" style="margin-top: .1rem;">

            <div class="col-lg-12 col-md-12 col-sm-12">
                <div style="margin-top: 2rem;" id="api">

                    <div class="col-lg-10 col-md-10 col-sm-12">
                        <div class="filter-table-box px-4 text-center">
                            <div class="table-slide-box">
                                <h2 class="fs-6"><span class="back " onclick="window.history.back()"
                                        style=" cursor: pointer;"><i class="fa fa-backward mx-2"></i>Back
                                    </span><span class="back text-black ms-5" onclick="window.history.forward()"
                                        style=" cursor: pointer; color: var(--text)!important;">Forword<i
                                            class="fa fa-forward mx-2"></i>
                                    </span></h2>

                            </div>

                        </div>
                    </div>

                    <div class="cardscroll">

                        <div class="row">

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <h4 class="mt-5 ps-5 text-success table-th">Api Data</h4>
                                <h6 class=" api-text">Lorem ipsum labore in duis ad commodo dolore do ut cupidatat labore
                                    occaecat
                                    deserunt commodo exercitation anim ut deserunt quis quis velit nostrud pariatur
                                    commodo
                                    dolor sit
                                    velit
                                    deserunt voluptate in in ut .</h6>

                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 px-4">
                                <div class="input-group mb-3 mdown">
                                    <p class="pe-2 mt-1 api-text">Api Key 1.</p>
                                    <p id="myInput" class="api-input py-2" style="background: white; width: 200px;">
                                        <span class="ms-3">jgvyty</span>
                                    </p>
                                    <span class="input-group-text text-light" id="copybutton"><i
                                            class="fas fa-clone text-info"></i></span>

                                    <div class="button_box">
                                        <span class="btn bg-primary text-white mx-3" id="copyButton">Update</span>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-3 col-md-12 col-sm-12 mt-1 d-md-block d-none">
                                <div class=" justify-content-center align-items-center mdown ">
                                    <h6 class="api-text">Domain -:-------example1233@gmail.com </h6>
                                    <h6>Api Docs----</h6>
                                    <!-- <br> -->
                                    <!-- <br> -->
                                    <!-- <div class="api-text">Api Docs----</div> -->
                                </div>
                                <br>
                                <!-- <div class="d-flex justify-content-center align-items-center mdown ">
                                    <h6 class="api-text">Api Docs----</h6>
                                    <span> </span>
                                </div> -->
                            </div>

                        </div>

                        <!-- <input type="text" name="" id="num"> 
                        <button class="btn bg-primary text-white" id="add"> Add</button>
                        <ul id="ul"> -->

                        <!-- </ul> -->

                        <div class="container-fluid py-5">

                            <div class="row height w-50 p-3 list_ip" style=" background: white;">

                                <div class="col-12">

                                    <h1 class="text-primary py-4">White List Ip</h1>

                                    <div class="search">
                                        <!-- <i class="fa fa-search"></i> -->
                                        <input type="text" id="num" v-model="formattedValue" @input="formatValue"
                                            maxlength="11" class="form-control input" placeholder="White List Ip">
                                        <button class="btn text-white bg-primary" id="add">Add</button>
                                    </div>
                                </div>
                                <!-- <ul id="ul"></ul> -->

                                <div class="h-screen bg-blue-300 flex justify-center items-center">
                                    <div class="container mx-auto">
                                        <div class="max-w-sm mx-auto md:max-w-lg">
                                            <div class="w-full">
                                                <ul class="px-0 py-3" id="ul">

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'
export default {
    name: 'Api_data',
    components: {
        SideNav,
        Navbar
    },

    data() {
        return {

            value: "",
            formattedValue: ""

        }
    },

    methods: {
        formatValue(event) {
            let value = event.target.value;
            let formatted = "";
            let count = 0;
            for (let i = 0; i < value.length; i++) {
                if (value[i] === ".") {
                    formatted += value[i];
                    count = 0;
                } else if (value[i].match(/\d/)) {
                    formatted += value[i];
                    count++;
                    if (count === 3 && i < value.length - 1 && value[i + 1].match(/\d/)) {
                        formatted += ".";
                        count = 0;
                    }
                }
            }
            this.formattedValue = formatted;
        }
    },

    mounted() {

        let num = document.querySelector('#num')
        let addbtn = document.querySelector('#add')
        let ul = document.querySelector('#ul')
        //    let delbtn = document.querySelector('.del')

        addbtn.addEventListener('click', () => {
            let li = document.createElement('li')
            let del = document.createElement('i')
            // del.innerText = 'X'
            del.classList.add('fa-solid', 'fa-trash', 'text-danger', 'del')
            li.classList.add('d-flex', 'justify-content-between', 'items-center', 'border', 'bg-white', 'list-none', 'rounded-sm', 'px-3', 'py-3', 'cursor-pointer', 'hover:text-white', 'hover:bg-blue-600')
            let value = num.value
            if (num.value != '') {
                li.append(value, del)
                ul.append(li)
                num.value = ''
            }
            else {

            }
            del.addEventListener('click', (e) => {
                e.target.parentElement.remove()
            })
        });


        $(document).ready(function () {
            // ========================== Copy text in input field =================

            $("#copybutton").click(function () {
                copybutton("#myInput");
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
                // alert("Text Copied to Clipboard Using jQuery");
            }

            $('.main-content').hover(() => {
                $('.bellbox').fadeOut();
                $('.menudrop-list').fadeOut();
                $('.calender').fadeOut();
                $('.lightpick').fadeOut();
            });

            $(window).on('popstate', function (event) {
            });

        });
        //Add Input Fields

    }
}

// ============= copy text ================


</script>

<style>
.list_ip {
    background: var(--card-bg) !important;
}

.back {
    color: var(--backbtn) !important;
}

.search {
    position: relative;
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);

}

.search input {

    height: 60px;
    text-indent: 25px;
    border: 2px solid #d6d4d4;
    /* background: #EEEEEE; */


}


.search input:focus {

    box-shadow: none;
    border: 2px solid blue;


}

.search .fa-search {

    position: absolute;
    top: 20px;
    left: 16px;

}

.search button {

    position: absolute;
    top: 5px;
    right: 5px;
    height: 50px;
    width: 110px;
    background: blue;

}

/* #ul{
    border-bottom: 1px solid #EEEEEE;

} */
/* 
.fa-trash {
    float: left;
} */
</style>