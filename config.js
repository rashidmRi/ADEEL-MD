const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUx3akpmTDZrdTU4SjZQVVlodUVsdmJyb2RiYTBlVzBmblNKY0QxcUQyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKy9jeCtvdE1aQWptNHcrWnJSTENLM1JLY0l6dW54Vk5ZNTdxRHdaM3lqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TkRLZnp1VTJ5L0R5M05LSWh0ZG9lTGR3d0o5b3hLZWd3cnBaQ1FzYjNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0T1JQS25Kc052NWNyYjl0MzRvR2ZqZ2tXUjA3NHBJN0d6RmtNV0p5amtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBTUxnemUvOWtCWFg1RkxBVUR6ZU4wNTczM0dSK1ErNVNuR2t4aXpXSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxTNjdGU2pSTmtETk5QSEswNy9adWtaUkEvOEpKcXFBZ2pIQmdIKy9RV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0N3MG1UVW9yVzVEdXRUYXoxT3NGbGV2eXVmaWthSjExdWRoRUszY0MzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWxTYmNaMGpuRW1INVJlOXBVTU9UbFU2TEliZFFWTkpJVy9VaVk3cmNUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNUamQwek5UdTV5WHU1b2RFeTZlOWl0TnU4UjBQWHBidU9oVjNyeWtBOGF0TzdUU0NyUEJZUXlSUzVBK1NpNVEwYU5wQzJsN0VMdWhmQlBpWGdBMUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6ImxTVlNBQmtRZzNnRVU0bnpFNEpCMUNiTjdPNFhSamFrbXkxclFWejZFZTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDYzNjQ2OTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NTUzNEE5NjhFNzlBRURCRDczM0Y5MTA2NUIzMUNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA3MzA4NzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ2MzY0Njk1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTdGNjc4N0IzOUIzMENDOERDOEVCMjcxMTUyNTZFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYwNzMwODc1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0NjM2NDY5NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU4Njc1OTY0Mjk1Rjk5MkIyMDM0QkIyMjFEMkI4MjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDczMDg3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiM0syS1IzWkgiLCJtZSI6eyJpZCI6IjkyMzQ2MzY0Njk1MzoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIQUNLRVIiLCJsaWQiOiIxOTUyOTcwNjE5MTY3MTg6MTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNU0o3cW9GRVBhOXlzY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTbHU3N3dxUGptZStRSGZvSngzTS95UWF3S0swVDBCeTZ1emVac2QxbEJFPSIsImFjY291bnRTaWduYXR1cmUiOiJQaEk0MVdkM2w1U3FsRS9NYlJsRnQ3TWtYcU9XclBBTURkYUdCRjYxVUJVMGJ1Vm1kbGVKRVlrZ0w0eTNleXBSUStIdjMxeXlaVFhDRkhzeXlUVmRDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMkpJQ3pYVklWWjVjZGpyRmlZTWdLNC9sNDlQNjUxQVY5Ym9pNldFQ0kzWkJSb3JXcnFQQzFKV0t0VGpRc09ycDEvWFkrWTU1TkRpN0NFMXkrUmpiQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NjM2NDY5NTM6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXBidSs4S2o0NW52a0IzNkNjZHpQOGtHc0NpdEU5QWN1cnMzbWJIZFpRUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwNzMwODczLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBpeSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hg5hj6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hg5hj6.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
