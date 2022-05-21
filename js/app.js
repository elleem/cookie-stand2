"use-strict";
//cookie shop
//it use the variables min/max customer
//average cookies 
//location
//to provide total sales per hour
//total sales per day
//use math.random

//  function averageSpend(min, max){
  //    let 
  //  }
  
//global variables at the top

let myContainer = document.getElementById("container");

let cookiesInSeattle = document.getElementById("seattle-cookiestand"); 
let operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: "Seattle",
  maxCustomers: 65,
  minCustomers: 23,
  averageCookiesSold: 6.3,
  soldPerHour: [],
  dailySold: 0,
} 

  //min&max are inclusive mdn I should refer to the class repo instead of the mdn
  function custNumber(max, min) {
    //min = Math.ceil(min);
    //max = Math.floor (max);
    return Math.floor(Math.random()* (max-min + 1) + min);
  }
  //console.log(custNumber); 

  custNumber(seattle.maxCustomers,seattle.minCustomers); 
  let salmonCustomers = custNumber(seattle.maxCustomers,seattle.minCustomers); 
  console.log (salmonCustomers); 



  // let li = document.createElement ("li");
  // li.textContent = `Daily Total: ${this.dailySold}`;
  // cookiesInSeattle.appendChild(li); 
