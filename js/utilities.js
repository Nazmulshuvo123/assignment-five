

  //Common function
  function getDonateInputValueById(id){
      const addDonateMoney = parseFloat(document.getElementById(id).value);
      return addDonateMoney;
  }
//Common function
  function getCurrentAmountValueByID(id){
      const currentAmount = parseFloat(document.getElementById(id).innerText);
      return currentAmount; 
  }
 