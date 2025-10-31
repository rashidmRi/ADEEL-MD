const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhDajdwbzlrOXRWeEVienlJVFdFQTUxSTl6UTJWZDFnODJlRTNJL05GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzRkL09JZUwvNGFCQ2dieHB3dUV2QnplOTJ0VUJEYUdocWQyWEJILzNVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS24wcGJNdC9aSmFQdXBUSGI0Zk9MSEJEekN2dTUrSmpxeFA4SnYxZ1dNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKTkxEUTR6c2ZkeS9VRHlCRE92TGh5bDZOSXpWU3hGRTkyRStQOW9FZEI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBNmsyRXlldkFILytvZzlWRmViaDVYcFAyNUZrZHpmNjZaUEMzU2RTbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZCRzVBWDFjanZrSDBGQkNXVWxmVjNNMmhnNmFHZWt4OTJSMGNaUFMvaWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBrTmNWQWxpZS9NU2llR2FERHdUUHdFdVYvdTRMM3A1dXpUV0dVTWNsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG5KaGdiZzJtb0dnOXFRMFZKcjY3WnhXS1luaUZ1SkVQckYrRUp6RGZDcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRmTUQ0UzNqMjVCSDNxV21JT3VYZXdMcDNhdzg0d1NzcnduZ0xlUUpXQUNCaklqd3RYVXhTQlNoNjRlbktLTld3MTIvYldkNWZ0OVVpZVFLTFJZcEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiK0JOWDY4ZUlxeCtQc2x0Qk1zOVlNcW1pM2VyMnFOTEMwejkva0hrUEpldz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI3Nzc4MDA3MzA3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTBEQTgyOTJCRUFFNzJCNjgzNTU2NTI3QUQ1RENCRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxOTIyOTA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI3Nzc4MDA3MzA3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTg5RDBCMDJEQzE2MUU4RkQzQkZCRUM0NUYwMDdFNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxOTIyOTExfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiNzc3ODAwNzMwNzc6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2LHYp9i02YDZgNmA2YDZgNmA2K8g2KjZgNmE2YDZiNqG8J2fr/Cdn6zwnZ+uIiwibGlkIjoiMzExODYzMjg0NTQ2NjoxMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ015RisvVURFTTJlazhnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdnMzR6WUdzNVRWMlVmWUMzeGU2c3VNTTdzMzNXUmpJSEJtYWdFZGhteUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikk1bitFY0hwQlBVMXRXUHZIdkN4WGc0cE43bzRSR0pQT3p1aVBlcTc0ckQ4OGl1SGpzVWVqcVBudklRdWovZW5RcHYySnBKMzJuY1VoTzdwTFVZQkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRbzBXMmJvSU1KRzdYd2JaWERBeks5SytHaE9XazFJbS9ZNkhnbW5UVDI4QWlVUjk4YWxiazVzeWhkcEVCRWFBSkJoZy94L1lhL2dYUnZzMVRhemxCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijc3NzgwMDczMDc3OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllJTitNMkJyT1UxZGxIMkF0OFh1ckxqRE83Tjkxa1l5QndabW9CSFlac2kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTkyMjkwNywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKL2UifQ==+v8J2frPCdn64ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3SHlYd1E5cStTeUFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjcrZ0VSSUxNeUJidTdTZEQ2djZkM2ROQUxmU2xyakN1RVJpL2RXbHh3QW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFDR1lZUWZIZFpJL3VzcFlZaEFNdXB6QVVZNnRBR0hsM2UrWldzS05HdnArL2ZrcTU2ejgvZEhtMm1rencvMkttWnl6aHN0NGljQ3lqWHExQzNvWUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkbHFoMlJjdmJIRUVnSi9ubndLSzJhek4ydXJ0UGlWeUZGS0JNZzZ1VWRibEFaazc2cUpMb25XUGVwUzNUeUlvZ05GRVZyKzZ4QzNESHR2bVR3bkZCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk4OTE1MTc4MjMwMjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUvb0JFU0N6TWdXN3UwblErcituZDNUUUMzMHBhNHdyaEVZdjNWcGNjQUsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTkwODc0MCwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDZXcifQ==",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
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
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
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
