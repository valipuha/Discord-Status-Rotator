const Discord = require('discord.js');
const {  token } = require('./settings.json');
const {  status } = require('./settings.json');
const {  status1 } = require('./settings.json');
const {  status2 } = require('./settings.json');
const {  delay } = require('./settings.json');
const {  statustype } = require('./settings.json');
const client = new Discord.Client();



client.once('ready', () => {
    function myFunction() {
        for (i=0;i<=100000000000000000000000000000000000000;i++) {
            setInterval(function(){client.user.setActivity(status, {type: statustype})}, delay);
            setInterval(function(){client.user.setActivity(status1, {type: statustype})}, delay);
	    setInterval(function(){client.user.setActivity(status2, {type: statustype})}, delay);
        }
    }
    myFunction()
    //{type: WATCHING} {type: STREAMING} {type: LISENING}  {type: WATCHING}
    //delay is in miliseconds 1000 ms = 1 second
   console.log('Status Rotator')
console.log(`----------------------\nLogged in as ${client.user.username}#${client.user.discriminator}\n----------------------`);

})



client.login(token);n);