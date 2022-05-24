"use-strict";
//it use the variables min/max customer
//average cookies
//location
//to provide total sales per hour
//total sales per day
//use math.random

//global variables at the top

let myContainer = document.getElementById("table");
//console.log (myContainer);

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
let storeData = []; 
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
  storeData.push(this);
}

//create object sales per city
let store1 = new StoreLocation("Seattle", 65, 23, 6.3);
let store2 = new StoreLocation("Tokyo", 24, 3, 1.2);
let store3 = new StoreLocation("Dubai", 38, 11, 3.7);
let store4 = new StoreLocation("Paris", 38, 20, 2.3);
let store5 = new StoreLocation("Lima", 16, 2, 4.6);
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
    //console.log(salmonCookiesSold);
  }
};
//render each cookie stand
StoreLocation.prototype.render = function () {
  this.cookiesSoldPerHour();
  let trOneElem = document.createElement("tr");
  myContainer.appendChild(trOneElem); //think about where you're trying to put the element
  let dataCell = document.createElement("td");
  dataCell.textContent = this.name;
  trOneElem.appendChild(dataCell);
  for (let i = 0; i < operationHours.length; i++) {
    let dataCell = document.createElement("td");
    dataCell.textContent = this.soldPerHour[i];
    trOneElem.appendChild(dataCell);
  }
  let dataCellTotal = document.createElement('td');
  dataCellTotal.textContent = `Daily Total: ${this.dailySold}`;
  trOneElem.appendChild(dataCellTotal);
  return this.soldPerHour;
};


  function setTableHeader() {
    let newRow = document.createElement("tr");
    myContainer.appendChild(newRow);
    let thElem = document.createElement("th");
    newRow.appendChild(thElem);
    thElem.textContent = "Store Location";
    for (let i = 0; i < operationHours.length; i++) {
      let thElem = document.createElement("th");
      newRow.appendChild(thElem);
      thElem.textContent = `${operationHours[i]}`;
    }
  let thTotal = document.createElement("th");
  newRow.appendChild(thTotal);
  thTotal.textContent = "Daily Total";
}; 


function setTableFooter() {
  let footElem = document.createElement('tfoot');
  myContainer.appendChild(footElem);
  let newRow = document.createElement('tr');
  footElem.appendChild(newRow);

  let tdElem = document.createElement('td');
  tdElem.textContent = 'Totals';
  newRow.appendChild(tdElem);

let hourlyTotal = 0;
for (let i = 0; i < operationHours.length; i++) {
  let hTotal = 0;
  for (let j = 0; j < storeData.length; j++) {
    hTotal += (storeData[j].soldPerHour[i]);
    hourlyTotal += storeData[j].soldPerHour[i];
  }
  let dataCell = document.createElement('td');
  dataCell.textContent = `${hTotal}`;
  newRow.appendChild(dataCell);
}
let totalCell = document.createElement('td');
totalCell.textContent = hourlyTotal;
newRow.appendChild(totalCell);
};


  // let totalCell = document.createElement('td');
  // totalCell.textContent = grandTotal;
  // newRow.appendChild(totalCell);

//console.log(cookiesSoldPerHour);
setTableHeader();
setTableFooter();

//console.log();
store1.cookiesSoldPerHour();
store1.render();
store2.cookiesSoldPerHour();
store2.render();
store3.cookiesSoldPerHour();
store3.render();
store4.cookiesSoldPerHour();
store4.render();
store5.cookiesSoldPerHour();
store5.render();
