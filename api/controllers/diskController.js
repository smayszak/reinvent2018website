var request = require('request');


//https://iewb59hu23.execute-api.us-west-2.amazonaws.com/Prod/
exports.campaigns = function(req, res) {
    invokeLambdaCampaignsGet(function(err, result){
    if(err || !result){
      res.send(500, { error: 'it didnt work' });
    } else {
        var result = JSON.parse(result);
      res.json({ campaignList: result.campaignList });
    }
  });
};

var invokeLambdaCampaignsGet = function(callback){
  request('https://iewb59hu23.execute-api.us-west-2.amazonaws.com/Prod/', function (error, response, body) {

    if (!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback(error);
    }
  })
}

exports.mapcampaign = function(req, res) {
    invokeLambdaMapCampaign(req, function(err, result){
    if(err || !result){
      res.send(500, { error: 'it didnt work' });
    } else {
      var data = result.campaign;
      res.json({ campaign: data });
    }
  });
};

function invokeLambdaMapCampaign(req, callback){
    var jsonRequest = req.body;
    var options = {
          uri: 'https://iewb59hu23.execute-api.us-west-2.amazonaws.com/Prod/',
          method: 'POST',
          json: jsonRequest};
          
  request.post(options, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback(error);
    }
  })
};


