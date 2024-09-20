// add money the account
let addmoney=document.getElementById("addMoney");
let add_money_login=document.getElementById("add-money-login");
let cash_money_login=document.getElementById("cash-money-login");
addmoney.addEventListener("click",function(event){
    event.preventDefault();
    let inputText=document.getElementById("inputText").value;
    let inputPin =document.getElementById("inputPin").value;
    let balances=document.getElementById('balances').innerText;
    
   if(inputPin==="1234"){
   let inputNum=parseFloat(inputText);
   let total=inputNum + parseFloat(balances);
    document.getElementById("balances").innerText=total;
   }
 
   add_money_login.classList.remove("hidden");
   cash_money_login.classList.add("hidden");
})

// cash out money the account
let cashOut=document.getElementById("cashOut");
cashOut.addEventListener("click",function(event){
    
  event.preventDefault();
  let inputCash=document.getElementById("inputCash").value;
  let CashPin=document.getElementById("inputCashPin").value;
  let cash_out_balances=document.getElementById('balances').innerText; 

//  this is not valid coding system

  if(CashPin==="1234"){
    let cashNum=parseFloat(inputCash);
    let minimise=parseFloat(cash_out_balances)-cashNum;
    document.getElementById("balances").innerText=minimise;
  }

  add_money_login.classList.add("hidden");
   cash_money_login.classList.remove("hidden");
})

