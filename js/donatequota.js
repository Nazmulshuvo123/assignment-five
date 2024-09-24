document
  .getElementById("add-money-btn3")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-quota");
    console.log("Donate money for Quota:", addDonateMoney);

    if (addDonateMoney > 0 || addDonateMoney === isNaN) {
        const balance = getCurrentAmountValueByID('current-amount-for-quota');
        const donateMoney = getCurrentAmountValueByID("amount-for-donate");

        const newBalance = balance + addDonateMoney;
        
        const moneyAfterDonate = donateMoney - newBalance;
        
        document.getElementById("current-amount-for-quota").innerText = newBalance;
        document.getElementById("amount-for-donate").innerText = moneyAfterDonate;

        console.log("Total money for Nokhali:", newBalance);
    } 
    else {
      alert("Money can not be added");
    }
  });
