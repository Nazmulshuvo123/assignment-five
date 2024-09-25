
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
        <h4 class="text-2xl font-semibold pt-3 pb-2 text-green-400">Donate money for Noakhali</h4>
        <p class="pb-3 font-semibold text-orange-500">Donation : ${addDonateMoney} TK. Balance: ${newBalance}</p>
      
        `
        document.getElementById('transition-container').appendChild(div);

    } else {
      alert("Fail to added money...!");
    }
  });
