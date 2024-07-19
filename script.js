const amountInput = document.querySelector("#money");
const custumtipInput = document.querySelector(".custumtip");
const personInput = document.querySelector(".noofpeople");
const btnsInput = document.querySelector(".btns");


const billgenratebtn = document.querySelector(".billgenrate");


//Bill Output  selector--------------*****
const totalTip = document.querySelector(".Total-tip");
const totalAmount = document.querySelector(".totalAmount");
const perpersonPrice = document.querySelector(".perpersonprice");
const resetbtn = document.querySelector(".resetbtn");


let selectTip;

billgenratebtn.addEventListener('click', () => {
    const billamount = parseInt(amountInput.value);
    const personNo = personInput.value;
    const tipamount = billamount * (selectTip / 100)
  
    const billTip = parseInt(tipamount) + parseInt(billamount);
    totalTip.innerText = "₹" + tipamount;
    totalAmount.innerText = "₹" + billTip;
    perpersonPrice.innerText = "₹" + billTip / personNo;

   
    resetbtn.disabled= false;
    
  



})



amountInput.addEventListener('input',()=>{
 
    
    if(amountInput.value){
         [...btnsInput.children].forEach((el) => el.disabled= false)
         custumtipInput.disabled=false
         personInput.disabled=false
    }
  
    else{
    
        [...btnsInput.children].forEach((el) => el.disabled= true)
        custumtipInput.disabled=true
        personInput.disabled=true

    }

   
})



btnsInput.addEventListener('click', (e) => {
    if (e.target != btnsInput) {
        selectTip = parseInt(e.target.innerText);
        custumtipInput.value = '';
        [...btnsInput.children].forEach((el) => el.classList.remove('selected'))
        e.target.classList.add('selected')


    }

    if(e.target.innerText && personInput.value){
        billgenratebtn.disabled=false;
    }

})

custumtipInput.addEventListener('input', () => {
    selectTip = parseInt(custumtipInput.value);
    [...btnsInput.children].forEach((el) => el.classList.remove('selected'));
    if(custumtipInput.value && personInput.value){
        billgenratebtn.disabled=false;
    }

    else{
        billgenratebtn.disabled=true;
    }
    


})


personInput.addEventListener('input',()=>{

    if(personInput.value && selectTip){
        billgenratebtn.disabled=false;
    }
    else{
        billgenratebtn.disabled=true;
    }


})



resetbtn.addEventListener('click', () => {
    amountInput.value = '';
    custumtipInput.value = '';
    personInput.value = '';
    personInput.value = '';
    selectTip.value = '';
    totalTip.innerText = '';
    totalAmount.innerText = '';
    perpersonPrice.innerText = '';
    [...btnsInput.children].forEach((el) => el.disabled=true);
    [...btnsInput.children].forEach((el) => el.classList.remove('selected'));
    resetbtn.classList.add('disable');
    resetbtn.disabled= true;
    billgenratebtn.disabled=true;
    custumtipInput.disabled =true;
    personInput.disabled=true;
   selectTip=undefined;

    



})