


let selectDate = document.getElementById('inpt');
let button = document.getElementById('result');
let ShowResult = document.getElementById('Result');
let popup = document.querySelector('.popup');
let dur = document.querySelector('.TheResult');
let apply = document.querySelector('.Apply');
let RemainingTime = document.querySelector('.RemainingTime');


button.addEventListener('click',()=>{

     let m = moment(selectDate.value);
     let applyingDate = m.add(5,"years");
     let cur = moment();
     let diff = applyingDate - cur;
     
     const x= moment();
     const y = moment(selectDate.value);
     const period = moment.duration(x.diff(y));

     

console.log(period.get('years'));
console.log(period.get('month'));
console.log(period.get('days'));

console.log(applyingDate.format('MMM/DD/YYYY'));

dur.innerText = period.get('years') +" years " + period.get('month') + " months " + period.get('days') + " Days ";
dur.innerText = "You can submit your application by : " + applyingDate.format(' MMMM / DD/ YYYY');



   let dayse = Math.floor(diff/(1000*60*60*24));
   let monthse = Math.floor(diff/(1000*60*60*24)/30);
   let yearse = Math.floor(diff/(1000*60*60*24)/365);

   dayse%=30;
   monthse%=12;
   yearse%=365;


   RemainingTime.innerText ="Your remaining Time is : " +  yearse + " years " + monthse + " months " + " " +  dayse + " " + " Days ";

// ShowResult.innerText = `Your best day to apply will be on: ${applyingDate.toString()}`;
//     ShowResult.innerText = `The time left until you apply to your citizenship is : ${years} years and ${months} months and ${days} days so make sure you are prepared, Good luck`;
})


