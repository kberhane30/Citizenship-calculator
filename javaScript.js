

let selectDate = document.getElementById('Calender');
let button = document.getElementById('result');
let ShowResult = document.getElementById('Result');
let popup = document.querySelector('.popup');
let dur = document.querySelector('.Dur');
let apply = document.querySelector('.Apply');
window.onload = popup.classList.remove('popup');


button.addEventListener('click',()=>{

     let m = moment(selectDate.value);
     let applyingDate = m.add(5,"years");
     let cur = moment();
     let diff = applyingDate - cur;
     
     // let years = Math.floor(diff/(1000*60*60*24)/365);

     // console.log(applyingDate.format('MMMM/DD/YYYY'));

     const x= moment();
     const y = moment(selectDate.value);
     const period = moment.duration(x.diff(y));

console.log(period.get('years'));
console.log(period.get('month'));
console.log(period.get('days'));

console.log(applyingDate.format('MMM/DD/YYYY'));

dur.innerText = period.get('years') +" years " + period.get('month') + " months " + period.get('days') + " Days ";
apply.innerText = applyingDate.format('MMM/DD/YYYY');




// ShowResult.innerText = `Your best day to apply will be on: ${applyingDate.toString()}`;
//     ShowResult.innerText = `The time left until you apply to your citizenship is : ${years} years and ${months} months and ${days} days so make sure you are prepared, Good luck`;
})




