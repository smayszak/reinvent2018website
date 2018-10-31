class ClientProgam {
  constructor(display) {
    this.display = display;
  }
  
  //makes the http request to the lambda function
  sendData(){
    var data = {};
    data.customerId = display.customerField.value;
    
    apiPost('/api/mapcampaign', data).then(function(response) {
        program.writeToPage(response);
      })
    .catch(function (err) {
        console.log(err);
    });
  }
  
  //call back function to render results
  writeToPage(response){
    //update history
   var campaignObject = JSON.parse(response);
   console.log(campaignObject);
   var data = {};
   data.customerId = display.customerField.value;
   var currentDateTime = new Date();
   var newLine = "<div class='customerExperienceLayout'>"+
                    "<div class='customerExperienceMeta'>"+
                         "<p>" + currentDateTime.toUTCString() + "</p>" +
                         "<h3>CustomerID: " + data.customerId + "</h3>" +
                         "<h4>Selection: Campaign "+campaignObject.campaign.id + "</h4>" + 
                         "<h4>Description:"+campaignObject.campaign.description + "</h4>" + 
                     "</div>"+
                     "<div class='customerExperienceImage'>"+
                        "<img src='"+ campaignObject.campaign.path+"' style='max-height: 150px; max-width: 150px;'>"+ 
                     "</div>"+
                  "</div>" ;
   var oldLines = display.customerexperience.innerHTML;
   display.customerexperience.innerHTML = newLine  + oldLines;
  }
  
  //generates a random customer id
  generateCustomerId(){
    var generatedArray = new Array(10); 
    for (let index = 0; index < 10; index++) { 
         var randCharIndex = "";
         var randAlphaNum = Math.random() < 0.5;
         randCharIndex = (Math.random() * (57 - 48) + 48);//in ascii  numeric range
        var thisChar = String.fromCharCode(randCharIndex);
        generatedArray[index] = thisChar;
    }
    var stringPayload = generatedArray.toString().replace(/,/g , "");
    /*global display*/
    display.customerField.value = stringPayload;  
  }
  
  //this shows all campaigns on page load
  showRoutes(){
    /*global get*/
    apiGet('/api/campaigns').then(function(response) {
      var campaign = JSON.parse(response).campaignList;
      display.campaignHeader.innerHTML = "<h2>Campaign Title: " + campaign.CampaignTitle + "</h2>";
      var info = "<div >";
      var campaignArray = campaign.Treatments;
     campaignArray.forEach(function(element) {
        var htmlString = "<div class='campaignimage'>" 
        + "<h3>Campaign " + element.id + "</h3>"
        + "<img src='"+ element.path+"' style='max-height: 100px; max-width: 100px;'>"
        + "</div>" ;
        info += htmlString;
      });
      info +="</div>";
      console.log(info);
      display.routeZone.innerHTML = info;
    }, function(error) {
      console.error("error:", error);
    });
  }
}