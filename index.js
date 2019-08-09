const Discord = require("discord.js");
const prefix = "!";
const client = new Discord.Client();
const botconfig = require("./config.json");

if(message.content == `${prefix}hello`){
    message.channel.sendMessage('hello')
  }

  if(message.content == `${prefix}gen spotify`){
    message.channel.sendMessage('your account here')
  }
  
  if(message.content == `${prefix}gen hulu`){
    message.channel.sendMessage('your info here')
  }

client.login(botconfig.token);
