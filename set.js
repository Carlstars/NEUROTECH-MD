const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });}}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U2Y6jRhT9lahebY3ZDZZaCpttvDR4X6I8FFBAtaHARdkYj/wt85RPyH/lEyLc7kxLM5npSOGpqOXec849934GJMclGqMa9D6DguIzZKhZsrpAoAeMUxQhCtoghAyCHphNSLibaSgyhIMb+0du0TmeRHdBDxB7oSMqbLkjcfbSEZwncGuD4uSnOPhBQBVfEnUUBdbVtlsmk/UYDrfZjsz6RaqkEhuZ0/MxsSGMpSdwayJCTDGJ7SJBGaIwHaPag5h+DL7u1EJadJ0NW+CNKWmwsoqWXlkWL7XgmRBt7gTzhaKXq9nH4G/SXXXahO6LsCzdbP1Mg4upJnwcO96RU2yClEsHa9Fhb3Kv8EscExQ6ISIMs/rDug8c5wXmwTIMxF343IpX3MJeT7NnvCtWeDJabrPN+FkYTY6D1ceAG9nVEBRnNsbT4wa6Kx/LcWhtxuKBG+5qq4/7lxUsWpG4Kt8D9+ibVw7/Rfdq3C0DdDWt/iqInd1c9bk+kjcDP3l2eXeeGmw5ZYUqtPjpx+B7pF+LErcwBx2YXN2R6CWGcEm33VJ1nFF/f/TUKVvywvyuxwM+ZCf6I5T1snvdLeX58JK66gyWySyTUJWKR69gghz7PlzaUddcr6jJE3efkf16vUKJupVcas0tfRsd/BLN+heNlypei1WLX+DZ053RAdVOCHr8rQ0oinHJKGQ4J82ewAltAMPzAgUUsbu8YOXBSYtPRtmx4jrUqF/MYK8Ol6uRPor3i1H2MvTnFbosd8f8CbRBQfMAlSUKh7hkOa2nqCxhjErQ++1eqYY0RVnO0AiHoAcEWepKMs/LvKr+Wn6qEshKWBSfCGKgDSKaZ1MEeoyeUBvcH1hW11K6mqoYmqFZpqVomqGYpsR1Zd2SJaOhmL0mXeIMlQxmBejxXZkXFEGSuFv7/8GhyYYp27oiWJLYNRSDsyXdNHlR7KoKLyraT3AIt9/bgKALe/Vxo77It0GEaclW5FSkOQzfTP52CIMgPxG2qElgNgtEQe/dNmIMk7hsmJ0IpEGCz8hseIBeBNMS/VNwRFH4xuUxxMw8bHy4sZWNJBgiaLA3gb7Rpicp38qT3q/xmiLwvCaIMicLnNzcbA7agMAmGBgiSJlPETwg+stfX/74s5HoAb7JFSIGcVqCHjDHbip60tCeTkZ4Oh0MdDvWzVgHX8m+NdGrSfsX/0xnpwPR5ZCkK4QLrKNFZHay8YlT8Gjsp2hVuUuPt5++E6SZ/nFFZEc5Q+k5FGeXw3VHVKnvhH1BmQ6r+QwN5tosHF6Yo04Tz2WC6A4TSfP4Sojio2PZcbJWW52xLWj0aG+jyM+ZVT012UJ0xgF6n+ylP+kM8I6PsDIx0yHxt0KBOAvB7aS1hfu603dJ1allvLS4rne4yEE142VlNpE10U/X6jXXLhehQu48XG7tEd86jtfxo73v4yV9jHX8aDx8/40wuk/JRz1+WtZX4I37uFv7XYzH3P23eT4PNl2FmxSjyt3u5fUwP+7i4YFUZxlT5uZ4kcnbdGodrtoc3Jo2KFLIopxmoAcgCWl+Nw3NT42dHRLlP0hmGo5j6q/MU1gy/WuLfKfreOX1lkfzYgjLBPSAONf2otb4vdaLYsEge+s4oDefne3A7W8vIJECnAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya Ruth",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254745115188",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by cally-stars',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'Cally declined',             
    GURL: process.env.GURL || "https://www.whatsapp.com/channel/0029VbAGDcU2f3ETH93NUd3o",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'kijana ya_ruth',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
