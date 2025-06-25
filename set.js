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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61VW47qRhDdStS/oIvfD6SR4hcYm6cNDBDlw9ht0/jRpt0GzNWsJV9ZQvaVJUSGmdyRcjN3IsVf7e521TlVdY6/ggKjCrqwAf2voCToHFDYLmlTQtAHeh3HkIAuiAIagD4YjUs+Z2JfN/fHxDrJtJAVetOW7qw40bX7jJMER1V2clPmCbx0QVnvMxR+EFB1M/Wq6WmU9TYhcx7zlnc7WsUIacpmn7jyhttOTf1wQ9fVE3hpIwaIoCKxygPMIQkyFzbzAJHPwU8cZcd0/PVNyAdIiIV9E+XLTOOCOe6tHXZqlE19HEyODrv9HPyzuYxv460uLGM8bGznJFRVkyxWx60jT7BfrGzFTDaqpRwnD/gVSgoYjSJYUESbT9cdu9kuR9trUuxXRjhIOl5PF4bPDLm46XOyEfTxfNvUF/15IHwOuKOcZvLtXJWNM8jLnArccSh4ZGSr1Z70Op7Jj+bRySOarbwHPidvs5L+l7q7ujrKknQdO9NpvTvs6Xw5z3puZEOlknDROebjUXGQy/1z8jn4w4RKUToJGW9kRgtqwWSa5Nlu3BxcRxHEqdcRr0co+pY/+gY/oDX5CKW/YexTer2E1Cyi6qKpKVW4g3SO+ROO4s16jk8p3ZbVbboQDo1rZD083/tEYqrUr7XINWZyidkyzgfr/c6bDBcKPztcnu6MUtiMItBnX7qAwARVlAQU4aLd4zixC4Lo7MOQQHovL8j51SKLtEHnuqu3R8ZeTVFR9TKfX0wl3Liz6XM5g0tTGAvaE+iCkuAQVhWMbFRRTJoJrKoggRXo/3LvVEuawBxT6KAI9AEnCrIgsqzIKsrP1ZfLIaBVUJZfCkhBF8QE5xMI+pTUsAvuH4iqoegCr4ucqOoyJyqCZMmCJA1kQRIHPNdSzB9JlyiHFQ3yEvRZWWQUkWU48aX7/+CQRMviLV1QTYlTLc0YcJzE6ZwhM6JpcYbyMQ6e/79wcKqsWAPZ5EVdk3hWFhWJsWRGVAyVl1nV+iGOX7uggFf60FM7BTzbBTEiFV0VdZnhIHoT29thEIa4LqjfFKHRLiAB/XfbkFJUJFXLrC4CEh7QGRotD9CPg6yCfw8eJDB64/JqpgaOWj1oHDuxbVcCLfY20D9q0+e/U57sfo1VJY5lVY4XGZFjxPZme9AFRdAGAzYMCN0TGKSQ/PTnb7//0ZboFXybK4I0QFkF+sBwOhk/F2xr3JFlZTQcalaiGYkGvpF9E/NDLIPr/kwWdVpoYlRkK4hKpEE/Nnq5WzMSctx9BleX2XLOWk/fCQL6wPNCqItjxxbys1IvJ/W42OH1SMNnspuc1OHMG8lYE2wnH9/0Xe/QQJQFZjKZDqKeasS2YAaQehtqDw87IUKTPIQHffHUZovgGYXwfbI8WqbRqXd0F4uNsh/7MbnWA5Xp6D1YM72BHXKZZp5UITmnOw2HrOdNF1vWvE4cx/NFulSHmSIzh8mtExsW6c1kLq7Q4mEzd5vLXn8v6NUA0P01RvDu1q/9+GFbH8Db6WNeuu9ivPr/v3io7oXPssSMS+cy2+zEtY1P28ROi8tZRITOMPJzcZNNzPSmeuCllUGZBTTGJAd9EBQRwfehIbhux3lUxPiDZIY+Ghnag3kWVFT7JpHvuRDzuDUnuLSD6gD6gPfUHa+2895oZenTgL4pDmjt40IBvPwF/IQjoSQJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya Ruth",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254745115188",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by cally-stars',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
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
