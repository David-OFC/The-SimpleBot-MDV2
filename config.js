import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"

global.botnumber = ""
global.confirmCode = ""

//• ↳𝑷𝑶𝑵 𝑳𝑶𝑺 𝑵𝑼𝑴𝑬𝑹𝑶𝑺 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑨𝑺
global.owner = [
['595976126756', '👑 Cʀᴇᴀᴅᴏʀ', true],
['595975726335', 'Oᴡɴᴇʀ 👑', true],
['595994836199']]

//• ↳𝑨𝑮𝑹𝑬𝑮𝑨𝑻𝑬 𝑺𝑰 𝑬𝑹𝑬𝑺 𝑶𝑾𝑵𝑬𝑹
global.contactos = [
["595975726335", '𝗢𝗳𝗰 𝗗𝗮𝘃𝗶𝗱 👑', 1],
["595976126756", '𝗢𝗳𝗰 𝗔𝗱𝗿𝗶𝗮𝗻 👑', 1],
["595994836199", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 🐈', 1],
["595986224522", '𝗢𝗳𝗰 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 💻', 1],
["595994825505", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 🌺', 1]]

global.suittag = ['595994836199']
global.prems = []
global.mods = []

global.lenguajeYL = es //idioma del bot

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 
global.packname = '𝚃𝚑𝚎-𝚂𝚒𝚖𝚙𝚕𝚎𝙱𝚘𝚝-𝙼𝙳𝚅2';
global.author = 'D𝚊𝚟𝚒𝚍-𝙾𝙵𝙲';
global.wm = '𝐓𝐡𝐞-𝐒𝐢𝐦𝐩𝐥𝐞𝐁𝐨𝐭-𝐌𝐃𝐕2';
global.titulowm = '𝑻𝒉𝒆-𝑺𝒊𝒎𝒑𝒍𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2';
global.titulowm2 = `𝐃𝐚𝐯𝐢𝐝-𝐎𝐅𝐂`
global.igfg = 'David oficial';
global.sk = 'ᴛʜᴇ-sɪᴍᴘʟᴇʙᴏᴛ-ᴍᴅᴠ2';
global.team = 'ᴅᴀᴠɪᴅ-ᴏғᴄ';
global.vs = '2.0.0';

//• ↳ ◜𝑴𝑺𝑮 𝑫𝑬 𝑬𝑺𝑷𝑬𝑹𝑨◞ • 🈸
global.wait = '*𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitt = '*𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waittt = '*𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '*𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';

//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu3.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu.png');
global.imagen7 = fs.readFileSync('./Menu7.png');
global.imagen8 = fs.readFileSync('./Que.jpg');

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp1 = 'https://chat.whatsapp.com/CU3XZGoC4l3ImlrU4fbRyW' //Grupo Oficial De Yoshiko1
global.gp2 = 'https://chat.whatsapp.com/CU3XZGoC4l3ImlrU4fbRyW' //Grupo Oficial Yoshiko2
global.gp3 = 'https://chat.whatsapp.com/CU3XZGoC4l3ImlrU4fbRyW' //GataBot Y YoshikoBot
global.gp4 = 'https://chat.whatsapp.com/Cj73g1a0F9tJ8j9tBUZt81' //Curiosity Y Yoshiko
global.gp5 = 'https://chat.whatsapp.com/Cj73g1a0F9tJ8j9tBUZt81' //Nova Y Yoshiko
global.gp6 = 'https://chat.whatsapp.com/Cj73g1a0F9tJ8j9tBUZt81' //Multibots
global.channel = 'https://whatsapp.com/channel/0029VaZGrIO5EjxrJNNK9Q19' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029VaZGrIO5EjxrJNNK9Q19' //canal segundario
global.channel3 = 'https://whatsapp.com/channel/0029VaZGrIO5EjxrJNNK9Q19'
global.yt = 'https://www.youtube.com/@AdrianOficial905' //Canal De Youtube
global.md = 'https://github.com/David-OFC/The-SimpleBot-MDV2' //Github Oficial
global.fb = 'https://www.facebook.com/davidoficial?mibextid=ZbWKwL' //Facebook Del Propietario

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nThe-SimpleBot-MDV2`;
global.gt = 'The-SimpleBot-MDV2';
global.yoshiko = 'The-SimpleBot-MDV2';
global.yoshiko = 'https://github.com/David-OFC/The-SimpleBot-MDV2';
global.nomorown = '595994825505';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});