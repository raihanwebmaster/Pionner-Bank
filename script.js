window.addEventListener('DOMContentLoaded', (event) => {
    // login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea  = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositNumber = getInputNumber("deposit-amount");
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value ="";   
})
//withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1*withdrawNumber);
    document.getElementById("withdraw-amount").value =""; 

})
    function getInputNumber (id){
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;
    }

    function updateSpanText(id, addedNumber){
    const  current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount  = addedNumber+currentNumber ;
    document.getElementById(id).innerText = totalAmount;
  }
});