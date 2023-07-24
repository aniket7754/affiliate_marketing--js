<template>
    <section class="vh-100" style=" margin-top: 5rem;">
        <div class="container h-80">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-2">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <form class="mx-1 mx-md-4" id="formValidation" name="formValidation">

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>

                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error " for="name"></label>
                                                <span class="text-danger ms-5" id="text-all"></span>
                                                <span><input type="text" id="name" v-model="name" name="name" class="form-control"
                                                        placeholder="Name" /></span>
                                                <span class="text-danger" id="text-name"></span>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-regular fa-lg me-3 fa-envelope"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="email"></label>
                                                <input type="text" id="email" v-model="email" name="email" class="form-control"
                                                    placeholder="Email">
                                                <span class="text-danger" id="text-email"></span>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="pass"></label>
                                                <input type="password" id="password" v-model="password" name="pass" class="form-control"
                                                    placeholder="Password" minlength="8">
                                                <span class="text-danger" id="text-pass"></span>
                                                <span class="fa-solid fa-eye-slash toggle-eye" id="eye-toggle"
                                                    toggle="#password"></span>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="pass"></label>
                                                <input type="password" id="conformpass" name="pass" class="form-control"
                                                    placeholder="Password" minlength="8">
                                                <span class="text-danger" id="text-pass"></span>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-duotone fa-lg me-3 fa-phone"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="phone"></label>
                                                <input type="text" id="phone" v-model="phone" name="phone" class="form-control"
                                                    placeholder="Phone No.">
                                                <span class="text-danger" id="text-phone"></span>
                                            </div>
                                        </div>




                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-regular fa-lg me-3 fa-building"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="company"></label>
                                                <input type="text" id="company" v-model="company" name="company" class="form-control"
                                                    placeholder="Company">
                                                <span class="text-danger" id="text-com"></span>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="website"></label>
                                                <input type="text" id="website" v-model="website" name="website" class="form-control"
                                                    placeholder="Website">
                                                <span class="text-danger" id="text-web"></span>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-brands fa-skype fa-lg me-3"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label error" for="skypelink"></label>
                                                <input type="text" id="skypelink" v-model="skypelink" name="skypelink" class="form-control"
                                                    placeholder="Skypelink" />
                                                <span class="text-danger" id="text-sky"></span>
                                            </div>
                                        </div>



                                        <div class="form-check d-flex justify-content-center mb-5">
                                            <input class="form-check-input mx-2" name="checkbox" type="checkbox"
                                                id="checkbox" data-column="4">
                                            <label class="form-check-label " for="checkbox">
                                                I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                        </div>

                                        <div class="form-check d-flex justify-content-center mb-3"
                                            style="margin-top: -1rem;">
                                            <!-- <input class="form-check-input mx-2" name="checkbox" type="checkbox" id="checkbox" data-column="4" > -->
                                            <label class="form-check-label " for="checkbox">
                                                Already have an account? <a href="Login">Login</a>
                                            </label>
                                        </div>

                                        <div id="Register" class="d-flex  justify-content-center mx-4 mb-3 mb-lg-4">
                                            <span type="submit" class="text-black" @click="register">submit</span>
                                        </div>

                                    </form>

                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        class="img-fluid im" alt="Sample image">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import axios from 'axios';

export default {
    name: 'Signin',

    data() {
        return {
            email:'',
            password:'',
            name:'',
            skypelink:'',
            website:'',
            company:'',
            phone:'',


        }
    },
    methods:{
        register(){
            axios.post('http://localhost:8080/api/v1/signup', {
                username:this.name,
                email:this.email,
                password:this.password,
                phone:this.phone,
                company_name:this.company,
                website:this.website,
                skype_link:this.skypelink

                
            })
                .then(response => {
                    alert(`Success! Server responded with: ${response.data.response}`);
                    this.$router.push('/');
                    // window.history.back()
                })
                .catch(error => {
                    alert(`Error: ${error.response.data.response}`);
                    // this.$router.push('/');

                });
        }
        
    },
    mounted() {

        $(document).ready(function () {
            $("#eye-toggle").click(function () {
                $(this).toggleClass(" fa-eye");
                var signupeyepass = $($(this).attr("toggle"));
                if (signupeyepass.attr("type") == "password") {
                    signupeyepass.attr("type", "text");
                } else {
                    signupeyepass.attr("type", "password")
                }
            });
            function isNameValid() {
                const nameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,32}/gi;
                return nameRegex.test($('#name').val());
            }
            function isEmailValid() {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test($('#email').val());
            }
            function isPasswordValid() {
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
                return passwordRegex.test($('#password').val());
            }
            function isConformpassValid() {
                const confirmpassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
                return confirmpassRegex.test($('#conformpass').val());
            }
            function isCompanyValid() {
                const companyRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
                return companyRegex.test($('#company').val());
            }
            function isWebsiteValid() {
                const websiteRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
                return websiteRegex.test($('#website').val());
            }
            // function isCountryValid() {
            //     const contryRegex = /^[a-zA-Z][a-zA-Z0-9]{5,32}/gi;
            //     return contryRegex.test($('#country').val());
            // }
            function isSkypelinkValid() {
                const addressRegex = /^[a-zA-Z][a-zA-Z0-9]{3,130}/gi;
                return addressRegex.test($('#skypelink').val());
            }
            $('#name').on('input', function () {
                if (!isNameValid()) {
                    $('#name').css('border-color', '#FE2E22');
                    $('#name').css('background', '#FFC2C2');
                } else {
                    $('#name').css('border-color', '#34BD34');
                    $('#name').css('background', '#C2FFC2');
                }
            })
            $('#email').on('input', function () {
                if (!isEmailValid()) {
                    $('#email').css('border-color', '#FE2E22');
                    $('#email').css('background', '#FFC2C2');
                } else {
                    $('#email').css('border-color', '#34BD34');
                    $('#email').css('background', '#C2FFC2');
                }
            })
            $('#password').on('input', function () {
                if (!isPasswordValid()) {
                    $('#password').css('border-color', '#FE2E22');
                    $('#password').css('background', '#FFC2C2');
                } else {
                    $('#password').css('border-color', '#34BD34');
                    $('#password').css('background', '#C2FFC2');
                }
            })
            $('#conformpass').on('input', function () {
                if (!isConformpassValid()) {
                    $('#conformpass').css('border-color', '#FE2E22');
                    $('#conformpass').css('background', '#FFC2C2');
                }
                // else if (password != confirmpass) {
                //     $('.errormsg').text('**confirm password not match');
                //     }
                else {
                    $('#conformpass').css('border-color', '#34BD34');
                    $('#conformpass').css('background', '#C2FFC2');
                }
            })
            $('#company').on('input', function () {
                if (!isCompanyValid()) {
                    $('#company').css('border-color', '#FE2E22');
                    $('#company').css('background', '#FFC2C2');
                }
                else {
                    $('#company').css('border-color', '#34BD34');
                    $('#company').css('background', '#C2FFC2');
                }
            })
            $('#website').on('input', function () {
                if (!isWebsiteValid()) {
                    $('#website').css('border-color', '#FE2E22');
                    $('#website').css('background', '#FFC2C2');
                } else {
                    $('#website').css('border-color', '#34BD34');
                    $('#website').css('background', '#C2FFC2');
                }
            })
            $('#skypelink').on('input', function () {
                if (!isSkypelinkValid()) {
                    $('#skypelink').css('border-color', '#FE2E22');
                    $('#skypelink').css('background', '#FFC2C2');
                } else {
                    $('#skypelink').css('border-color', '#34BD34');
                    $('#skypelink').css('background', '#C2FFC2');
                }
            })
            $('#signup-btn').on('mouseover', () => {
                if (!isNameValid() || !isEmailValid || !isPasswordValid() || !isConformpassValid() || !isCompanyValid() ||
                    !isWebsiteValid() || !isSkypelinkValid()) {
                    let signupcontainerRect = $(".container")[0].getBoundingClientRect();
                    let signupbtnRect = $('#signup-btn')[0].getBoundingClientRect();
                    let signupoffset = signupbtnRect.left - signupcontainerRect.left;
                    if (signupoffset <= 200) {
                        $('#signup-btn').text("Fill Up!");
                        $('#signup-btn').css('transform', 'translateX(8rem)');
                        $('#signup-btn').css('transition', '0.3s linear');
                    }
                    //Vice versa
                    else {
                        $('#signup-btn').css('transform', 'translateX(-8rem)');
                        $('#signup-btn').css('transition', '0.3s linear');
                    }
                }
            });
            $('#signup-btn').click(() => {
                $('#signup-btn').text("Thank you!");
            });
            function errormsg() {
                var password = $("#password").val();
                var confirmpass = $("#conformpass").val();
                if (password != confirmpass) {
                    // $("#errormsg").html("Passwords does not match!");
                    $('#conformpass').css('border-color', '#FE2E22');
                    $('#conformpass').css('background', '#FFC2C2');
                }
                else {
                    // $("#errormsg").html("Passwords match.");
                    $('#conformpass').css('border-color', '#34BD34');
                    $('#conformpass').css('background', '#C2FFC2');
                }
            }
            $(document).ready(function () {
                $("#conformpass").keyup(errormsg);
            });
        });
    }
}




$(document).ready(function () {

    $('#formValidation').validate({
        rules: {
            name: 'required',
            email: {
                required: false,
                email: true,
            },
            pass: {
                required: true,
                minlength: 8,
            },
            phone: {
                required: false,
            },
            website: {
                required: true,
            },
            company: {
                required: true,
            },
            address: {
                required: true,
            },
            country: {
                required: true,
            },
            skypelink: {
                required: true,
            },
            checkbox: {
                required: true,
            }
        },
        messages: {
            name: '**Please enter a name',
            email: '**Please enter a valid email',
            website: '**Please enter a website name',
            company: '**Please enter a company name',
            address: '**Please enter a full address',
            country: '**Please enter a country name',
            skypelink: '**Please enter a skypelink',
            pass: {
                minlength: 'Password must be at least 8 characters long'
            },


        },
        submitHandler: function (form) {
            form.submit();
        }
    });


    $(document).on('keyup', '#phone', function () {
        $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
        if ($(this).val().indexOf('.') == 0) {
            $(this).val('');
        }
        if ($(this).val().length == 10) {
            return false;
        }
    })

});

</script>

<style>
.fas {
    margin-top: 1.5rem;
}

.error {
    color: red !important;

}

.fa-eye-slash {
    float: right;
    margin-right: 13px;
    margin-top: -25.4px;
    position: relative;
    z-index: 2;
    color: #000;
    font-size: 14px;
    cursor: pointer;
}

.im{
    height: 50%!important;
    width: 80%!important;
}
</style>