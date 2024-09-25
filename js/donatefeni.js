document
  .getElementById("add-money-btn2")
  .addEventListener("click", function () {
    const date = new Date();
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
        <p class="pb-4 pt-6 text-left text-2xl pl-5 font-semibold text-pink-500">${addDonateMoney} Taka is Donated for Flood at Feni, Bangladesh.</p>
        <p class= "pb-3 text-left text-xl pl-5 font-semibold text-sky-400">${date}</p>
        `
        document.getElementById('transition-container').appendChild(div);



    }
    else{
        alert('Invalid Input..!')
    }
    
  });