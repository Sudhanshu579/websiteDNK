let button3 = document.querySelector("#button3");

let close_btn1 = document.querySelector("#close_btn1");
let pop_up2 = document.querySelector("#pop_up2");

button3.addEventListener("click", () =>{
      if(pop_up2.style.display == "none" ){
        pop_up2.style.display = "block";
        console.log("hlo");
      }else{
        pop_up2.style.display = "none";

      }
});

close_btn1.addEventListener("click", () =>{
    pop_up2.style.display = "none";
});
