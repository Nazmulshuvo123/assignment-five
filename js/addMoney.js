
document
  .getElementById("add-money-btn1")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-noakhali");

    if (addDonateMoney > 0 || addDonateMoney === isNaN) {
      const balance = getCurrentAmountValueByID("current-amount-for-noakhali");
      const donateMoney = getCurrentAmountValueByID("amount-for-donate");

      const newBalance = balance + addDonateMoney;
      const moneyAfterDonate = donateMoney - newBalance;

      document.getElementById("current-amount-for-noakhali").innerText = newBalance;

      document.getElementById("amount-for-donate").innerText = moneyAfterDonate;
      console.log("Total money for Nokhali:", newBalance);

    } else {
      alert("Fail to added money...!");
    }
  });

document
  .getElementById("add-money-btn2")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-feni");
    console.log("Donate money for Feni:", addDonateMoney);

    if (addDonateMoney > 0 || addDonateMoney === isNaN) {
     const balance = getCurrentAmountValueByID('current-amount-for-feni')
    //  console.log(balance);
     const donateMoney = getCurrentAmountValueByID("amount-for-donate");
    //  console.log(donateMoney);



    } else {
      alert("Invalid input");
    }
  });

document
  .getElementById("add-money-btn3")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-quota");
    console.log("Donate money for Quota:", addDonateMoney);

    if (addDonateMoney > 0 || addDonateMoney === isNaN) {
    } else {
      alert("Money can not be added");
    }
  });
