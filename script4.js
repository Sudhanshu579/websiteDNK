let modebtn = document.querySelector("#modes");
let body = document.querySelector("body");
let bodymode = "light";

modebtn.addEventListener("click", () =>{
    if( bodymode === "light") {
        bodymode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        bodymode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});


$(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1
   });
});
      
let hide = document.querySelector("header");
let prevscrollpos = "0";
let currscrollpos = window.pageYoffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
    let currscrollpos = window.pageYoffset || document.documentElement.scrollTop;
    if( currscrollpos > prevscrollpos ){
       hide.style.top = "-50px";
       } else {
           hide.style.top = "0";
       }
});

setTimeout(function(){
    $(".loader_area").addClass('remove');
},1000);


let user_account = document.querySelector("#user_account");
let sub_menu = document.querySelector("#sub_menu");
let none = "none";

user_account.addEventListener("click", () => {
    if(sub_menu.style.display === none){
        sub_menu.style.display = "block";
    } else{
        sub_menu.style.display = "none";
    }
});

$(".dropdown_area > a").click(function(){
    $(".dropdown").slideToggle();
});

$(document).ready(function(){
  $('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
   dots: true,
   focusOnSelect: true
});
});

//contact us

function contact(){
     let msg = "";

     let name = document.getElementById('name').value;
     let phone = document.getElementById('phone').value;
     let email = document.getElementById('email').value;
     let address = document.getElementById('address').value;

     if(name == ""){
        msg = '<span class ="box"><i class="fa-solid fa-circle-exclamation"></i> please enter name</span>';
        document.getElementById('error').innerHTML = msg;
        return false;
     }else if(phone == ""){
        msg = '<span class ="box"><i class="fa-solid fa-circle-exclamation"></i> please enter phone</span>';
        document.getElementById('error').innerHTML = msg;
        return false;
     }else if(email == ""){
        msg = '<span class ="box"><i class="fa-solid fa-circle-exclamation"></i> please enter email</span>';
        document.getElementById('error').innerHTML = msg;
        return false;
     }else if(address == ""){
        msg = '<span class ="box"><i class="fa-solid fa-circle-exclamation"></i> please enter address</span>';
        document.getElementById('error').innerHTML = msg;
        return false;
     }else{
        msg = '<span class ="box2">thanks for contact us</span>';
        document.getElementById('error').innerHTML = msg;
        return false;
     }

}

//masterpage js

// ---select size option

let  option = "";

let size = [6,7,8,9,10];

for(let i = 0;i<size.length;i++){
    option += "<option>"+size[i]+"</option>"
}

document.getElementById('select_option').innerHTML = option;

//----pop_up buy now

let button2 = document.querySelector("#button2");

let close_btn = document.querySelector("#close_btn");

button2.addEventListener("click", () =>{
      if(pop_up1.style.display == none ){
        pop_up1.style.display = "block";
      }else{
        pop_up1.style.display = "none";

      }
});

close_btn.addEventListener("click", () =>{
    pop_up1.style.display = "none";
});


//change shoe color

let blue = document.querySelector("#blue");
let red = document.querySelector("#red");
let mpimg2 = document.querySelector(".mpimg2");
let mpimg1 = document.querySelector(".mpimg1");

red.addEventListener("click",() =>{
    if(mpimg2.style.display == none){
        mpimg2.style.display = "block";
    }else{
        mpimg2.style.display = "none";
    }
});

blue.addEventListener("click",() =>{
    if(mpimg1.style.display == none){
        mpimg1.style.display = "block";
    }else{
        mpimg1.style.display = "none";
    }
});

//foooter subscribe

function subscribe(){
    let email = document.querySelector("#email").value;
    let message = "";

    if(email == ""){
         message = '<span class ="subscribe_error_box"><i class="fa-solid fa-circle-exclamation"></i>Enter email</span>';
       document.getElementById('subscribe_error').innerHTML = message;
       return false;
    } else{
          message = '<span class ="subscribe_error_box2"><i class="fa-solid fa-circle-exclamation"></i>Subscribed</span>';
        document.getElementById('subscribe_error').innerHTML = message;
        return false;
    }
}










