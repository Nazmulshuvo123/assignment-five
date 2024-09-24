

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
 
  //common function
//   function showSectionById(){
//       document.getElementById('donate-section').classList.add('hidden');
//       document.getElementById('transition- history').classList.add('hidden', 'bg-[#B4F461]');

//       document.getElementById(id).classList.remove('hidden');
      
//   }