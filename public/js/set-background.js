
var custEl = document.getElementById("customer");
var custButtonEl = document.getElementById("customerButton");
var sendDataButtonEl = document.getElementById("sendButton");
var routeZone = document.getElementById("routeZone");
var customerexperience = document.getElementById("customerexperience");
var campaignHeader = document.getElementById("campaignHeader");


const display = new Display(custEl, routeZone, customerexperience, campaignHeader);

const program = new ClientProgam(display);
sendDataButtonEl.onclick = program.sendData;
custButtonEl.onclick = program.generateCustomerId;
program.showRoutes();


