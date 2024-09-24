document
  .getElementById("add-money-btn2")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-feni");
    console.log(addDonateMoney);
    if(addDonateMoney > 0 || addDonateMoney === isNaN){
        const balance = getCurrentAmountValueByID('current-amount-for-feni');
        const donateMoney = getCurrentAmountValueByID("amount-for-donate");

        const newBalance = balance + addDonateMoney;
        

        const moneyAfterDonate = donateMoney - newBalance;
        
        document.getElementById('current-amount-for-feni').innerText = newBalance;
        document.getElementById("amount-for-donate").innerText = moneyAfterDonate;

        console.log("Total money for Feni:", newBalance);
    }
    else{
        alert('Invalid Input..!')
    }
    
  });