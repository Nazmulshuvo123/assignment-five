document
  .getElementById("add-money-btn2")
  .addEventListener("click", function () {
    const addDonateMoney = getDonateInputValueById("add-money-for-feni");
    console.log(addDonateMoney);
    if(addDonateMoney > 0 || addDonateMoney === isNaN){
        const balance = getCurrentAmountValueByID('current-amount-for-feni');
        const donateMoney = getCurrentAmountValueByID("amount-for-donate");

        const newBalance = balance + addDonateMoney;
        

        const moneyAfterDonate = donateMoney - addDonateMoney;
        
        document.getElementById('current-amount-for-feni').innerText = newBalance;
        document.getElementById("amount-for-donate").innerText = moneyAfterDonate;

        console.log("Total money for Feni:", newBalance);

      //Add to transition history
      const div = document.createElement('div');
      div.classList.add('shadow-md','border','rounded-md');
      div.innerHTML = `
        <h4 class="text-2xl font-semibold  text-green-400 pt-3 pb-2">Donate money for Feni</h4>
        <p class="pb-3  text-orange-500">Donation : ${addDonateMoney} TK. Balance: ${newBalance}</p>
      
        `
        document.getElementById('transition-container').appendChild(div);



    }
    else{
        alert('Invalid Input..!')
    }
    
  });