const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="syssolutions.reload@gmail.com"
global.location="Ate,Lima,Peru"


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://Suhailx:Suhailx@suhailmd.fwrr4.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "true" || "mongodb+srv://Suhailx:Suhailx@suhailmd.fwrr4.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Lima";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©CyberPsycho" 


global.devs = "51978194933" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "51978194933";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "51978194933";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_16_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwOGpMelVhVWJXdWZHM2dWcG14T3prYnBETDV1UjFVVGY1cHRwVFZaNXZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNzdBNkNCM0MzQ0NENjg4RkFGNzM2NkFENUI4MkM5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyMzA5NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MTk3ODE5NDkzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTMzMjZFNEMwMERERERCM0M3MjI0NTIwNEM4Njc5QjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMjMwOTY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImk3a0c2Rm5NU002YXV5WmwxTHlESFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Y3ZWU3YTgtYTdiYS00Yzk5LTk3YTAtZDRlZjc1YzBhZDkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTY3LFxuICAgICAgODYsXG4gICAgICAxNDUsXG4gICAgICAxMDQsXG4gICAgICAzMSxcbiAgICAgIDI1LFxuICAgICAgMTcyLFxuICAgICAgNzQsXG4gICAgICAyNDgsXG4gICAgICAyMDgsXG4gICAgICAxMTAsXG4gICAgICA3LFxuICAgICAgMjgsXG4gICAgICA4NixcbiAgICAgIDE5NCxcbiAgICAgIDgsXG4gICAgICAxMDEsXG4gICAgICAxNjgsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxNTAsXG4gICAgICAyMjYsXG4gICAgICAyMjIsXG4gICAgICAxMTQsXG4gICAgICA1LFxuICAgICAgMTI0LFxuICAgICAgMTA1LFxuICAgICAgMjU0LFxuICAgICAgMTMwLFxuICAgICAgMTI0LFxuICAgICAgNTUsXG4gICAgICAxNzEsXG4gICAgICAxMjgsXG4gICAgICAxMDgsXG4gICAgICAxMTYsXG4gICAgICAyMTYsXG4gICAgICAxNzMsXG4gICAgICAxNDQsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUOFlINFFSNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTE5NzgxOTQ5MzM6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTeXNzb2x1dGlvbnNcIixcbiAgICBcImxpZFwiOiBcIjg5ODk4MzYzMTg3MjYxOjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05PUWx2VUdFTEgrL3JrR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejRuUVJmTEZiSFpRanNWU0FhVG5FejJ6RDFuWis4OStEY3dPTzVwTzVSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlUTdYMVlyTkVnNTRaRDBtY3BhYnFxZGc4YVJmMFkraDltVC9nTU80RHl2YkFwRStaTjlIRE5JeUMwNHE0NU8xM3h6dGZveDB1L1pkV3lPSFFwNUFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWdzJ4cFVpZWZEbnFLNnhOakxDcDU3ajJ2R3B2Q2V6OHBXNVVtSHRQNCtvbGNicFA2cVY3b1RiOXgzZmFSSTBuOVhwUGR6YUhPRWlNbEhsUUtkbzBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MTk3ODE5NDkzMzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyMzA5NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMkhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUySC5qc29uIjogIntcImtleURhdGFcIjpcIlVkOVVuQmxEZi9nMlZub2g5VTBadjJPdzJ0L21qeWhZalNMQ1k5RFpCa1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NjM0MjA5NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "@CyberPsycho" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "@CyberPsycho",
  packname: process.env.PACK_NAME || "@CyberPsycho",
  botname : process.env.BOT_NAME  || "@SysSolutions",
  ownername:process.env.OWNER_NAME|| "@CyberPsycho",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
