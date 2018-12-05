const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('ready', async() => {
var server = "518486318200913920"; // ايدي السررفر
var channel = "519931794011848717";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Hi , Hi , Hi , Hi ,Hi ,Hi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,Hi Dreaaam ,[PRIME]CAM**')
    },305);
})

client.on('message', message => {
    if(message.content === '-dd'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '!cc'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-cc'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '!c'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { 
if (message.content === 'y!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Spam  Spammingggggggggg, Spaam, Spaaaam , Farmingg  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { 
if (message.content === 'y!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`** Spam Bot , Spamming, Credit Pro Bot , Credit Farming, Keep Spamminggggg,[PRIME]Cam Spaaaaaaaaaaaaaam,Prime Spaamming ssssssssssssssss **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);

