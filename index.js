const { Client, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
    disableMentions: "everyone",
    restTimeOffset: 0,
    intents: [ Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS ],
});

client.login(process.env.TOKEN);

client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    const content = message.content;
    const bauRegex = /(^| )bau( |$|\.|\,|!|\?|\:|\;)/i

    if(bauRegex.test(content)) {
        const randomNumber =  Math.floor(Math.random() * 30);
        if(randomNumber == 5) {
            message.reply('Bentar, refill dulu bentar... 😵');
        } else {
            message.reply('Psssssttt... 🌼');
        }
    }
});