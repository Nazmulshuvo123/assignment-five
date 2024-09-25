

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
 
 function goHomePage(){
  window.open('index.html', "_self");
 }
 function goBlogPage(){
  window.open('blog.html', "_self");
 }
  

