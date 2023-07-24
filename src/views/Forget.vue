<template>

    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span class="login100-form-title">
                        Forgot password
                    </span>
                    <div class="inputwrap ">
                        <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter email ">
                        <i class="fas fa-user"></i>
                        <input class="input100" type="text" name="username" placeholder="Email" autocomplete="off" id="email">
                        <span class="focus-input100"></span>
                    </div>
                
                    </div>
                   
                    <div class="container-login100-form-btn pt-3">
                        <button class="login100-form-btn w-50 m-auto" id="forget-btn">
                           Send
                        </button>
                    </div>
                    <div class="flex-col-c p-t-60 p-b-40">
                        <span class="txt1 p-b-9">
                            Forget it,
                        </span>
                        <!-- <a href="#" class="txt3 px-2">
                            send me back <span>to the sign in.</span>
                        </a> -->
                        <router-link to="/Signin" class="txt3 px-2">
                            send me back <span>to the sign in.</span>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>



$(document).ready(function () {


   
function isEmailValid() {
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{3})?$/;
return emailRegex.test($('#email').val());
}
// $('#email').val().length > 5



$('#email').on('input', function () {
 if (!isEmailValid()) {
    $('#email').css('border-color' ,'#fe2e22');
    $('#email').css('background' ,'#ffc2c2');
} else {
    $('#email').css('border-color', '#34bd34');
    $('#email').css('background' ,'#c2ffc2');
}
})



$('#forget-btn').click(()=>{
 $('#forget-btn').text("Thank you!");
});



});

</script>

<style scoped>
body,
html {
    height: 100%;
    font-family: Ubuntu-Regular, sans-serif
}

a {
    font-family: Ubuntu-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666;
    margin: 0;
    transition: all .4s;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s
}

a:focus {
    outline: none !important
}

a:hover {
    text-decoration: none;
    color: #1b3815
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0
}
.p-l-55{
    padding-left: 55px;
}
.p-r-55{
    padding-right: 55px;
}
.p-t-178{
    padding-top: 55px;
}
.p-t-16{
    padding-top: 16px;
} 
.p-b-23{
    padding-bottom: 23px;
}
.p-t-60{
    padding-top: 60px;
}
.p-b-40{
    padding-bottom: 40px;
}
.p-b-9{
    padding-bottom: 9px;
}
.m-b-16{
    margin-bottom: 16px;
} 
 .inputwrap{
    margin-top: 8rem;
}

p {
    font-family: Ubuntu-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666;
    margin: 0
}

ul,
li {
    margin: 0;
    list-style-type: none
}

input {
    outline: none;
    border: none
}

input[type=number] {
    -moz-appearance: textfield;
    appearance: none;
    -webkit-appearance: none
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none
}

textarea {
    outline: none;
    border: none
}

textarea:focus,
input:focus {
    border-color: transparent !important
}

input::-webkit-input-placeholder {
    color: #1b3815
}

input:-moz-placeholder {
    color: #1b3815
}

input::-moz-placeholder {
    color: #1b3815
}

input:-ms-input-placeholder {
    color: #1b3815
}

textarea::-webkit-input-placeholder {
    color: #1b3815
}

textarea:-moz-placeholder {
    color: #1b3815
}

textarea::-moz-placeholder {
    color: #1b3815
}

textarea:-ms-input-placeholder {
    color: #1b3815
}

button {
    outline: none !important;
    border: none;
    background: 0 0
}

button:hover {
    cursor: pointer
}

iframe {
    border: none !important
}

.txt1 {
    font-family: Ubuntu-Regular;
    font-size: 15px;
    color: #999;
    line-height: 1.4
}

.txt2 {
    font-family: Ubuntu-Regular;
    font-size: 15px;
    /* color: #57b846; */
    color: teal;
    line-height: 1.4
}

.txt3 {
    font-family: Ubuntu-Bold;
    font-size: 15px;
    /* color: #57b846; */
    color: teal;
    line-height: 1.4;
    text-transform: uppercase
}

.limiter {
    width: 100%;
    margin: 0 auto;
}

.container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: relative;
    background-color: #fff;
    /* background: #1b3815; */
    margin-top: -4rem;
}

.wrap-login100 {
    width: 500px;
    /* height: 500px; */
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
    -moz-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
    -o-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
    -ms-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1)
}

.login100-form .wrap-input100 i {
    position: absolute;
    top: 20px;
    left: 1rem;
    color: #111;
    z-index: 999;
    font-size: 14px;
    border-radius: 5px 0 0 5px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.login100-form {
    width: 100%;
    position: relative;
}

.login100-form-title {
    font-family: JosefinSans-Bold;
    font-size: 25px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    /* background-color: #57b846; */
    background-color: teal;
    padding-top: 50px;
    padding-bottom: 39px
}

.wrap-input100 {
    width: 100%;
    background-color: #fff;
    border-radius: 27px;
    position: relative;
    z-index: 1
}

.input100 {
    font-family: Ubuntu-Bold;
    font-size: 15px;
    color: #1b3815;
    line-height: 1.2;
    position: relative;
    display: block;
    width: 100%;
    height: 55px;
    background: #ebebeb;
    border-radius: 27px;
    padding: 0 35px
}

.focus-input100 {
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 31px;
    background-color: #ebebeb;
    pointer-events: none;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s
}

.input100:focus+.focus-input100 {
    width: calc(100% + 20px)
}

.container-login100-form-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center
}

.login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    background-color: teal!important;
    border-radius: 25px;
    font-family: Ubuntu-Bold;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s
}

.login100-form-btn:hover {
    background-color: #1b3815!important;
}

.validate-input {
    position: relative
}

.alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    z-index: 1000;
    max-width: 70%;
    background-color: #fff;
    border: 1px solid #c80000;
    border-radius: 14px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 10px;
    pointer-events: none;
    font-family: Ubuntu-Bold;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .4s;
    -o-transition: opacity .4s;
    -moz-transition: opacity .4s;
    transition: opacity .4s
}

.alert-validate::after {
    content: "\f06a";
    font-family: FontAwesome;
    display: block;
    position: absolute;
    z-index: 1100;
    color: #c80000;
    font-size: 16px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 16px
}

.alert-validate:hover:before {
    visibility: visible;
    opacity: 1
}

@media(max-width:992px) {
    .alert-validate::before {
        visibility: visible;
        opacity: 1
    }
}

@media(max-width:576px) {
    .login100-form {
        padding-left: 15px;
        padding-right: 15px
    }
}
</style>




