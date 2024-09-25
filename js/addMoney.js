
document
  .getElementById("add-money-btn1")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-noakhali");
    console.log('add donate money', addDonateMoney)

    if (addDonateMoney > 0 || addDonateMoney === isNaN) {
      const balance = getCurrentAmountValueByID("current-amount-for-noakhali");
      
      const donateMoney = getCurrentAmountValueByID("amount-for-donate");
      const newBalance = balance + addDonateMoney;

      const moneyAfterDonate = donateMoney - addDonateMoney;

      document.getElementById("current-amount-for-noakhali").innerText = newBalance;

      document.getElementById("amount-for-donate").innerText = moneyAfterDonate;
      console.log("Total money for Nokhali:", newBalance);

      //Add to transition history
      const div = document.createElement('div');
      div.classList.add('shadow-md','border','rounded-md');
      div.innerHTML = `
        <p class="pb-4 pt-6 text-left text-2xl pl-5 font-semibold text-orange-500">${addDonateMoney} Taka is Donated for Flood at Noakhali, Bangladesh.</p>
      
        `
        document.getElementById('transition-container').appendChild(div);

    } else {
      alert("Fail to added money...!");
    }
  });
