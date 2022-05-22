"use-strict";
//it use the variables min/max customer
//average cookies
//location
//to provide total sales per hour
//total sales per day
//use math.random

//global variables at the top

let myContainer = document.getElementById("container");

let cookiesInSeattle = document.getElementById("seattle-cookiestand");
let operationHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
//min&max are inclusive mdn I should refer to the class repo instead of the mdn
function custNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//constructor
function StoreLocation(name, maxCustomers, minCustomers, averageCookiesSold) {
  this.name = name;
  this.maxCustomers = maxCustomers;
  this.minCustomers = minCustomers;
  this.averageCookiesSold = averageCookiesSold;
  this.soldPerHour = [];
  this.dailySold = 0;
}

//instantiate sales per city
new StoreLocation("Seattle", 65, 23, 6.3);
new StoreLocation("Tokyo", 24, 3, 1.2);
new StoreLocation("Dubai", 38, 11, 3.7);
new StoreLocation("Paris", 38, 20, 2.3);
new StoreLocation("Lima", 16, 2, 4.6);
//console.log(StoreLocation5);

//method for finding total cookies sold per hour and tallies daily total sold

StoreLocation.prototype.cookiesSoldPerHour = function () {
  for (let i = 0; i < operationHours.length; i++) {
    let salmonCustomers = custNumber(this.maxCustomers, this.minCustomers);
    let salmonCookiesSold = Math.ceil(
      salmonCustomers * this.averageCookiesSold
    );
    this.soldPerHour.push(salmonCookiesSold);
    this.dailySold += salmonCookiesSold;
    console.log(salmonCookiesSold);
  }
};
//render each cookie stand
StoreLocation.prototype.render = function () {
  //seattle.cookiesSoldPerHour();
  let containerElem = document.getElementById("stores");
  let rowElem = document.createElement("tr");
  for (let i = 0; i < this.operationHours.length; i++) {
    dataElem.innerText = this.rowInformation[i];
    rowElem.appendChild(dataElem);
  }
  containerElem.apprendChild(rowElem);
};

// let li = document.createElement("li");
// li.textContent = `Daily Total: ${this.dailySold}`;
// cookiesInSeattle.appendChild(li);

// function StoreLocation (name, maxCustomers, minCustomers, averageCookiesSold){
//   this.name = name;
//   this.maxCustomers= maxCustomers;
//   this.minCustomers = minCustomers;
//   this.averageCookiesSold =averageCookiesSold;
// }

//console.log(cookiesSoldPerHour);
cookiesSoldPerHour();
newStoreLocation.render();
