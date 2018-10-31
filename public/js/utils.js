function apiGet(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Error"));
    };
    req.send();
  });
}


/*maybe we can drop this*/
function apiPost(url, data) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onreadystatechange = function() {
        if(req.readyState == XMLHttpRequest.DONE && req.status == 200) {
          resolve(req.response);
          console.log(req.response);
      }else if(req.status != 200){
        reject(Error(req.statusText));
      }
    }
    var sendme = JSON.stringify(data);
    req.send(sendme); 
  }, data);
}