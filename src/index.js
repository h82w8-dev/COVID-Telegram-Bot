const Telegraf = require('telegraf');
const covidService = require('./services/covid');
const formatCountryMsg = require('./messages/country');

const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);

// commands
// start, help
bot.start(ctx => ctx.reply(`
Welcome to COVID BOT!
You need to send a name of country where you need to get COVID data
`));
bot.help(ctx=>ctx.reply(`
Example:
Ukraine
Russia
China
`
));
// handlers
bot.hears(/.*/, async ctx => {
  const {data} = await covidService.getByCountry(ctx.message.text);
  
  if(data && data.results === 0){
    return ctx.reply('Country not found. Try another');
  }

  return ctx.replyWithMarkdown(formatCountryMsg(data.response[0]))
});

bot.launch()
.then(res=>{
  const date = new Date();
  console.log(`Bot launched at ${date}`);
}).catch(err=>console.log(err));
// launch
