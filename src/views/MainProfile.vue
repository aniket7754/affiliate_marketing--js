<template>
<side-nav/>
<navbar/>
    <section class="main-content">
        <div class="wrapper main-wrapper mt-top" style=''>
            <main id="main" class="main ">

                <!-- <div class="main-content"> -->
                <div class="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="hometext">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active breadcrumb-active">Profile</li>
                        </ol>
                    </nav>
                </div><!-- End Page Title -->

                <section class=" profile">

                    <div class="row">

                        <div class="col-lg-4">

                            <div v-for="item in items" class="card ">
                                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center mt-2">

                                    <!-- <img  alt="Profile" class="preview rounded-circle"> -->
                                    <img class="img imgdelete" alt="Profile" id="imgdelete" :src=item.thumbnail>
                                    <h2 class="mt-3">{{ item.username }}</h2>
                                    <h3 class="mt-3">{{ item.job }}</h3>
                                    <div class="social-links mt-2 ">
                                        <a href="#" class=""><i class="fab fa-twitter"></i></a>
                                        <a href="#" class=""><i class="fab fa-facebook"></i></a>
                                        <a href="#" class=""><i class="fab fa-instagram"></i></a>
                                        <a href="#" class=""><i class="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-8">

                            <div class="card">
                                <div class="card-body pt-3">
                                    <!-- Bordered Tabs -->
                                    <ul class="nav nav-tabs nav-tabs-bordered">

                                        <li class="nav-item">
                                            <a class="nav-link  active" data-bs-toggle="tab"
                                                data-bs-target="#profile-overview">Overview</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit
                                                Profile</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#profile-settings">Settings</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#profile-change-password">Change Password</a>
                                        </li>

                                    </ul>

                                    <div class="tab-content pt-3 text-start">

                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">


                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">First Name</div>
                                                <div class="col-lg-9 col-md-8 label-text" >{{ items[0].username }}</div>
                                            </div>



                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Company</div>
                                                <div class="col-lg-9 col-md-8 label-text">{{ items[0].company }}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Job</div>
                                                <div class="col-lg-9 col-md-8 label-text">{{ items[0].job }}
                                                </div>
                                            </div>

                                           
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Phone</div>
                                                <div class="col-lg-9 col-md-8 label-text">{{ items[0].phone }}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Email</div>
                                                <div class="col-lg-9 col-md-8 label-text">{{ items[0].email }}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Skype Profile</div>
                                                <div class="col-lg-9 col-md-8 label-text">{{ items[0].skype_link }}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Paypal</div>
                                                <!-- <div class="col-lg-9 col-md-8 label-text">https://facebook.com</div> -->
                                                <input type="text" class="form-control col-lg-9 col-md-8 ">
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Paypal</div>
                                                <!-- <div class="col-lg-9 col-md-8 label-text">https://instagram.com</div> -->
                                                <input type="text" class="form-control col-lg-9 col-md-8 ">
                                            </div>



                                        </div>


                                        <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                                            <!-- Profile Edit Form -->
                                            <form>
                                                <div class="row mb-3">
                                                    <label for="profileImage"
                                                        class="col-md-4 col-lg-3 col-form-label ">Profile
                                                        Image</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <img class="preview imgdelete" 
                                                            alt="Profile">
                                                        <div class="pt-2 ">
                                                            <!-- <a href="#" class="btn btn-upload btn-sm"
                                                                title="Upload new profile image"><i
                                                                    class="fas fa-upload"></i></a> -->
                                                            <input type="file" accept="image/*" id="fileInput">
                                                            <!-- <button class="addfiles text-black">Add Files</button>
                                                            <input id="fileupload" type="file" name="files[]"
                                                                accept="image/*" multiple style='opacity: 0;'> -->
                                                            <a href="#" class="btn btn-trash btn-sm ms-1"
                                                                title="Remove my profile image" id="trash">
                                                                <i class="fas fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="fullName"
                                                        class="col-md-4 col-lg-3 col-form-label">Username
                                                    </label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control"
                                                            id="firstName" v-model="username"
                                                            >
                                                    </div>
                                                </div>





                                                <div class="row mb-3">
                                                    <label for="company"
                                                        class="col-md-4 col-lg-3 col-form-label">Company</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="company" type="text" class="form-control"
                                                            id="company" v-model="company"
                                                            >
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="Job"
                                                        class="col-md-4 col-lg-3 col-form-label">Job</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="job" type="text" class="form-control" id="Job"
                                                             v-model="job">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="Country"
                                                        class="col-md-4 col-lg-3 col-form-label">Country</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="country" type="text" class="form-control"
                                                            id="Country"
                                                            v-model="country">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="Address"
                                                        class="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control"
                                                            id="Address" 
                                                            v-model="address">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="Phone"
                                                        class="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone"
                                                             v-model="phone">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="Email"
                                                        class="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="email" type="email" class="form-control" id="Email"
                                                             v-model="email">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">skype
                                                        Profile</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="twitter" type="text" class="form-control"
                                                            id="Twitter" 
                                                            v-model="skype_link">
                                                    </div>
                                                </div>



                                                <div class="text-center">
                                                    <button  class="btn bg-primary"
                                                        >Save
                                                        Changes</button>
                                                </div>
                                            </form><!-- End Profile Edit Form -->

                                        </div>

                                        <div class="tab-pane fade pt-3" id="profile-settings">

                                            <!-- Settings Form -->
                                            <form>

                                                <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email
                                                        Notifications</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="changesMade" checked>
                                                            <label class="form-check-label" for="changesMade">
                                                                Changes made to your account
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="newProducts" checked>
                                                            <label class="form-check-label" for="newProducts">
                                                                Information on new products and services
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="proOffers">
                                                            <label class="form-check-label" for="proOffers">
                                                                Marketing and promo offers
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="securityNotify" checked disabled>
                                                            <label class="form-check-label" for="securityNotify">
                                                                Security alerts
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Save
                                                        Changes</button>
                                                </div>
                                            </form>

                                        </div>

                                        <div class="tab-pane fade pt-3" id="profile-change-password">

                                            <!-- Change Password Form -->
                                            <form>

                                                <div class="row mb-3">
                                                    <label for="currentPassword"
                                                        class="col-md-4 col-lg-3 col-form-label">Current
                                                        Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="password" type="password" class="form-control"
                                                            id="currentPassword">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="newPassword"
                                                        class="col-md-4 col-lg-3 col-form-label">New
                                                        Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" class="form-control"
                                                            id="newPassword">
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="renewPassword"
                                                        class="col-md-4 col-lg-3 col-form-label">Re-enter New
                                                        Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" class="form-control"
                                                            id="renewPassword">
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Change
                                                        Password</button>
                                                </div>
                                            </form>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </div>
    </section>


</template>


<script>
import axios from 'axios';
import Navbar from '/src/components/Navbar.vue'
import SideNav from '/src/components/SideNav.vue'
export default {
    name: 'MainProfile',
    components: {
    SideNav,
    Navbar
},

    data() {
        return {
            existname:'',
                username: '',
                company: '',
                job: '',
                country: '',
                address: '',
                phone: '',
                email: '',
                skype_link: '',
                thumbnail: '',
            
            baseURL: 'http://localhost:8080/api/v1/',
            endpoint: 'profile',
            params: {
                username: "abhinav"

                // window.type:document.getElementById('search').val()

            },
            items: []

        }
    }, created() {
        this.all_offers();
    },
    
  
    methods: {
        all_offers() {
            axios.get(`${this.baseURL}${this.endpoint}`, { params: this.params })
                .then(response => {
                    console.log(response.data.response)
                    this.items = response.data.response;
                    this.existname=this.items[0].username
                })
                .catch(error => {
                    console.error(error);
                });
        },
        // s
    },
    mounted() {
        var Node1 = document.querySelectorAll('.imgdelete');
        var trash = document.querySelector('#trash');

        trash.onclick = () => {
            Node1[0].src = '';
            Node1[1].src = '';
        }

        var fileInput = document.getElementById("fileInput");
        var preview = document.querySelector(".preview");
        var img = document.querySelector(".img");
        fileInput.addEventListener("change", function (e) {
            var file = fileInput.files[0];
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                preview.src = reader.result;
                img.src = reader.result;
                preview.style.display = "block";
            }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        });

        // $(document).ready(function () {
        // $('.addfiles').on('click', function () { $('#fileupload').click(); });
        // });

    },
}
$(document).ready(function () {
    $('.main-content').hover(() => {
        $('.bellbox').fadeOut();
        $('.menudrop-list').fadeOut();
        $('.calender').fadeOut();
        $('.lightpick').fadeOut();
    })
});
</script>

<style>
/* input[type = file]: */
</style>


