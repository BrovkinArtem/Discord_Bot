const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс
const versions = config.versions;


// Команды //

function test(robot, mess, args) {
  mess.channel.send('Test!')
}

function hello(robot, mess, args) {
    mess.reply("Привет!")
  }  

function clear(robot, mess, args) { // Создание новой функции с командой

    const arggs = mess.content.split(' ').slice(1);
   
    const amount = arggs.join(' ');
    
    if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); 
   
    if (isNaN(amount)) return mess.channel.send('Это не число!'); 
   
     if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз');
     if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1');
           
           async function delete_messages() {
   
           await mess.channel.messages.fetch({ limit: amount }).then(messages => {
               mess.channel.bulkDelete(messages)
               mess.channel.send(`Удалено ${amount} сообщений!`)
           })};
           delete_messages(); 
}

function say(robot, mess, args) {

args = mess.content.split(' ');
args.shift();
args = args.join(' ');

mess.delete().catch(); // Удаление сообщения пользователя после отправки 

mess.channel.send(args)
}

function flip(robot, mess, args){
mess.channel.send('Монета подбрасывается...')

var random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

if (random === 1) { // Если вычислено число 1, то выпадает орёл.
    mess.channel.send(':full_moon: Орёл!')
} else if (random === 2) { // Если вычислено число 2, то выпадает решка.
    mess.channel.send(':new_moon: Решка!')
} else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
    mess.channel.send(':last_quarter_moon: Монета упала ребром!')
}
}

function randomProcent(robot, mess, args){
    mess.channel.send('Вероятность сдать курсач...')
    var name = [ // Объявление массива name и занесение в него большого количества имён
    '100%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '0%'
];

var RandElement = name[Math.floor(Math.random() * (name.length))]; // Выбор случайного элемента из массива
mess.channel.send(RandElement) // Отправка сообщения со случайным элементом из массива в чат
}

function Ben(robot, mess, args){
    var name = [ // Объявление массива name и занесение в него большого количества имён
    'YES', 'NO', 'HO-HO-HO', 'UHH'
];
var RandElement = name[Math.floor(Math.random() * (name.length))]; // Выбор случайного элемента из массива
mess.channel.send(RandElement) // Отправка сообщения со случайным элементом из массива в чат
}

function help(robot, mess, args){
    var lines = 'написание | вывод' + '\n' + '\n' + '-test | Test!' + '\n' + '-hello | привет!' + '\n' + '-clear [index] | Удаляет указаное кол-во сообщений' + '\n' + '-flip | Орёл и решка' + '\n' + '-Курсач | Выдаёт вероятность сдачи курсача' + '\n' + '-help | все возможные команды' + '\n' + '-Link | Вывод ссылки на бота' + '\n' + 'ping | pong' + '\n' + 'сложи | Сложение 2ух чисел' + '\n' + 'вычти | Разность 2ух чисел' + '\n' + 'умножь | произведение 2ух чисел' + '\n' + 'подели | частное 2ух чисел' + '\n' + '-Ben | Звонок Бену, ответит на любые вопросы';
    mess.channel.send(lines)
}

function Link(robot, mess, args){
    mess.channel.send('Лови');
    mess.channel.send('https://discord.com/api/oauth2/authorize?client_id=974676423363133491&permissions=8&scope=bot');
}

// Список команд //

var comms_list = [{
    name: "test",
    out: test,
    about: "Тестовая команда"
},
{
    name: "hello",
    out: hello,
    about: "Команда для приветствия!"
},
{
    name: "clear",
    out: clear,
    about: "Удаление сообщений"
},
{
    name: "say",
    out: say,
    about: "Повторение сообщений"
},
{
    name: "flip",
    out: flip,
    about: "Орёл и решка"
},
{
    name: "Курсач",
    out: randomProcent,
    about: "Выдаёт вероятность сдать курсач"
},
{
    name: "help",
    out: help,
    about: "Все возможные команды"
},
{
    name: "Link",
    out: Link,
    about: "Выводит ссылку на дискорд бота"
},
{
    name: "Ben",
    out: Ben,
    about: "Ben"
}
];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list;

