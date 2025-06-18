const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61UW46jRhTdS/3amgZsXpZaGgpo/LbxC7ujfGAooGxerirAeGQpC4iyhfnOBqIsa5YQYXdnWplk0pHCV3Ep7j3n3HPvJ5BmmKIRqkHvE8gJLl2GmiOrcwR6ABZBgAhoA99lLugBOoGho2HaNxeWNxILspildGN5A2aE9Xw1HW6L2UwJBJwcH8G1DfJiH2PvOwknJ6GM612SlRGkDw9b2hWwmrtx//JsWEfcktSxvenD9KkfPoJrk9HFBKehmUcoQcSNR6ieu5i8D34yfujvk9ViGVjWwNiGznbPbek6Ner6LG2PB+jBQhjsOonzTvgeJoQfGIeho29pH5pnxdxb8aa2p56SwlOQug9dOtOVcLm7w6c4TJE/8FHKMKvfrXuitfqzldZ6LgW4Otinw9CAQyGP6svambQOz+Ea0wwJXaXTfR/wbXWMD6PhesjQBD1N+CooOKejP5dL5WSP7K4nrJXUWvrcuXoLfE5evXL8L7rb0NyECz0czDvJdNq1vMtZDHc5H0+J6a2gGVVQ1K16kwvK++Dnu6pLzZlmR4Uolto4vziRHx14wQ+qzpBHYd+Zrte6CZ3uV/guK8j3UHYcyzlidMZkD8V5lEID+QE8PWFBmG4n7tGjpO7DjVIaUTlaToaThT3P4rIo5zsn5S4IVqsxsWfnIMlsL/TsCUwGevh4Y3RE9cAHPf7aBgSFmDLiMpylt5gotYHrl0vkEcRu8oLh8eRT8Sgqi7EzIMtoj0/VUq7LBbJR0Y/mY3+vHNdyUfjcI2iDnGQeohT5fUxZRuoJotQNEQW9H26dakgTlGQMDbEPekAQuzLfETlRUDsf6Ycqchl18/xDihhog4BkyQSBHiMFaoPbD1xHEgRT5HhTVUVB06CmdTXY0SCUOE0ypYZici+6wgmizE1y0ONlkRMknhP4a/v/wSFCGcpdVVAUqD4JqiSahqLKsmqqKjQ51fgXHNL1xzZI0ZndfdyoL/FtEGBC2Tot8jhz/VeTv350PS8rUrasU09vDoiA3pswYgynIW2YFalLvAiXSG943HH/2W9EkP9K5WWH6Znf2HDXH42m4+cxaKA3eb6Rptf9Vpz4fkvhOrIqiaosymq31/3YhNsgdZtM4MvnX3768vnX3758/vn3RpkXzE0NHzEXxxT0gD4WRmFRmebAkmplYFmaHWp6qIGvHF9n5+7NPfLPG4Z1iVO0FhbwdNqHobbIL7m6MaxAZoGz0h6Ep0nn5s2/JgE9oDjn+WWRPnDZocKkdPbnjvXcKs5RXvpVma4hVLfYQQNpNTq4mr7QeWipo9bhcDZoh7mnnaengXIo9mFZ2WhJXZSF0H5sqvmoxB56W4xfxsrKLBW5xiMJnuqYSJbzvB3O0d43RkG+lsd7r8z5zWxbbfmYbsK6HxvKtFQu0ZBUJr9zzXBzUZKNf6FGqqfcCkLtPtW3rRK/bHP8Mm/49hpgdFuOL634t3becTee467tNyletu0/bCzodFJvs9+FBZtr84xlh9Wi2mmm60nBxj6nLXnLH6u5Gq2mKrg25s9jlwUZSUAPuKlPsptdSFY0Jh6kQfadYjocDAz7Tjx2KdO+DsbfzBon3W/NSZb3XRo1Gmxk+bRubF5reb5kLnudM6A1z3Q/ANc/ALJcGd6SCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya sophie",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254713505293",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by neurotech',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://www.whatsapp.com/channel/0029VbAGDcU2f3ETH93NUd3o",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'kijana ya_sophie',
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
