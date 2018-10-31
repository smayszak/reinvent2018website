// config.js
const environment = process.env.NODE_ENV || 'dev'; // 'dev' or 'production'
console.log("it is: " + environment);
const dev = {
 app: {
   port: 8080,
   env:  environment
 },
 lambda:{
  route: "https://iewb59hu23.execute-api.us-west-2.amazonaws.com/Prod/"
 }
};

const production = {
 app: {
   port: 80,
   env:  environment
 },
 lambda:{
  route: "https://iewb59hu23.execute-api.us-west-2.amazonaws.com/Prod/"
 }
};

const config = {
 dev,
 production
};

module.exports = config[environment];