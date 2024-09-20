
let btn=document.querySelector("#btn-login");

btn.addEventListener("click",function(event){
  event.preventDefault();
  let pin=document.getElementById("pin").value;
let phone=document.getElementById("phone").value;
 if(pin==="1234" && phone === "01733757561"){
    console.log(`${typeof(pin)} and ${typeof(phone)}`)
    window.location.href="./home.html";
 }
  
})
