require('dotenv').config(); //initialize dotenv
const axios = require('axios'); //add this line at the top
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const robot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); // Объявляем, что robot - бот
const comms = require("./comms.js"); // Подключаем файл с командами для бота
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js 
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс

robot.on("ready", function() {
  /* При успешном запуске, в консоли появится сообщение «[Имя бота] запустился!» */
  console.log(robot.user.username + " запустился!");
});

robot.on('message', (msg) => { // Реагирование на сообщения
  if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
    var comm = msg.content.trim() + " ";
    var comm_name = comm.slice(0, comm.indexOf(" "));
    var messArr = comm.split(" ");
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(robot, msg, messArr);
      }
    }
  }
});

robot.on('message', async msg => {
    switch (msg.content) {
      case "ping":
        msg.reply("Pong!");
        break;
     }})

     misatch = /[, .?]/
     ///////////////////
     robot.on(`message`, msg => {
        var array = msg.content.split( misatch, 100);
     
        //разделяет строку msg.content на слова, разделитель - регулярное выражение, содержащее и пробел
     
        if (array[0] == "сложи") {
           
              var firstnum = Number(array[1]); //первое число сразу после "сложи"
              var secnum = Number(array[2]); //второе число после первого
              //Да, тут явное преобразование, но ошибка сразу
              //пойдёт в catch()
              var sum = firstnum + secnum;
                 msg.channel.send("Сумма чисел: " + sum);
        }

        if (array[0] == "вычти") {
           
            var firstnum = Number(array[1]); //первое число сразу после "сложи"
            var secnum = Number(array[2]); //второе число после первого
            //Да, тут явное преобразование, но ошибка сразу
            //пойдёт в catch()
            var sum = firstnum - secnum;
               msg.channel.send("Разность чисел: " + sum);
        }
        if (array[0] == "умножь") {
           
        var firstnum = Number(array[1]); //первое число сразу после "сложи"
        var secnum = Number(array[2]); //второе число после первого
        //Да, тут явное преобразование, но ошибка сразу
        //пойдёт в catch()
        var sum = firstnum * secnum;
           msg.channel.send("Произведение чисел: " + sum);
        }
        if (array[0] == "подели") {
           
        var firstnum = Number(array[1]); //первое число сразу после "сложи"
        var secnum = Number(array[2]); //второе число после первого
        //Да, тут явное преобразование, но ошибка сразу
        //пойдёт в catch()
        var sum = firstnum / secnum;
            msg.channel.send("Частное чисел: " + sum);
        }
     });

robot.login(token); // Авторизация бота