/*
𝗦𝗼𝗰𝗶𝗮𝗹𝘀 :: IG - _mate666 | STEAM - id/o7b | DISCORD - mate#1337 | GITHUB - matehashtag1337
*/

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate: false});
const private_config = require('./configs/private.json')
const fs = require('fs')

client.on('ready', () => {
    console.log(`[INFO] Logged in as: ${client.user.tag}`);
	if(!private_config.profile_id || private_config.profile_id == "")
	{
		return console.log(`ENG: Hey! U don't added ID in the config list. Please add your profile ID!\nHUN: Hé! Nem adtál hozzá profil ID-t a konfig listába! Kérlek tedd meg`)
	}
});

var channelid = ["0", "989944084447772675"] //chabnnel id that u want to log
var logchannel = ["0", "992068700171669625"] //channel to log the messages if you don't want it, please put 0 on the second array item
let isrunning = 0
client.on('messageCreate', async message => {
	if(channelid[1] == "0") return
	if(channelid[1] == logchannel[1]) return console.log("Please don't log the channel, where u want to send the logs.")
 	if(message.author.id == private_config.profile_id && message.content.startsWith(private_config.start_command) && isrunning == 1)
	{
		return console.log("The program currently logging  `" + channelid[1] + "` channel!")
	}
	else if(message.author.id == private_config.profile_id && message.content.startsWith(private_config.start_command) && isrunning == 0)
	{
		isrunning = 1
		return console.log("Started logging `" + channelid[1] + "` channel!")
	}
	else if(message.author.id == private_config.profile_id && message.content.startsWith(private_config.stop_command) && isrunning == 0)
	{
		return console.log("The program currently not logging `" + channelid[1] + "` channel!")
	}
	else if(message.author.id == private_config.profile_id && message.content.startsWith(private_config.stop_command) && isrunning == 1)
	{
		isrunning = 0
		return console.log("Stopped logging `" + channelid[1] + "` channel!")
	}
	if(isrunning == 1)
	{
		if(message.channel.id != "0" && message.channel.id == channelid[1])
		{
			if(logchannel[1] == "0")
			{
				console.log("Message sent by: " + message.author.tag + " | Message: " + message.content)
			}
			else
			{
				client.channels.cache.get(logchannel[1]).send("Message sent by: " + message.author.tag + " | Message: " + message.content)
				console.log("Message sent by: " + message.author.tag + " | Message: " + message.content)
			}
		}
	}
})




client.login(private_config.profile_token);
