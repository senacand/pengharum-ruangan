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
    const bauRegex = /(^| |\"|\')bau( |$|\.|\,|!|\?|\:|\;|\"|\')/i

    if(bauRegex.test(content)) {
        const arkaRegex = /(^| |\"|\')arka( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(arkaRegex.test(content) || content.includes("796773828059201616")) { // Easter egg for Arka Zelaphiel.
            message.reply("Arka bau.\n\nPsssssttt... 🌼\nPsssssttt... 🌼\nPsssssttt... 🌼\nPsssssttt... 🌼\nPsssssttt... 🌼");
            return;
        }

        const senRegex = /(^| |\"|\')(sen{1,}a?)( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(senRegex.test(content) || content.toLowerCase().includes("mentega") || content.includes("349956953252036622")) {
            message.reply("Udah wangy, ga perlu pssst. ❤️");
            return;
        }

        const randomNumber =  Math.floor(Math.random() * 30);
        if(randomNumber == 5) {
            message.reply('Bentar, refill dulu bentar... 😵');
        } else {
            message.reply('Psssssttt... 🌼');
        }
    }
});

// semprot per jam ke satu room random di tiap server
(function psstHourly() {
	setTimeout(() => {
		client.guilds.forEach(guild => {
			let psstChannel = Math.floor(Math.random() * guild.channels.filter(c => c.type === "GUILD_TEXT").size);
			guild.channels.filter(c => c.type === "GUILD_TEXT").forEach((channel, i) => {
				if(i == psstChannel) {
					setTimeout(() => {
						channel.send("Psssssttt... 🌼").catch(console.error);
					}, Math.floor(Math.random() * 5001));
				}
			});
		});
		psstHourly();
	}, 3600000 - ((new Date()).getTime() % 3600000) + (
		// random offset antara -2.5 ke 2.5 detik
		Math.ceil(Math.random() * 5001) - 2500
	));
})();