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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61Va4+iSBT9K5v6qhlB3iadDJTyEFF8N272QwkFlCJgUfia+N83aPdMJ7M705ssn4qi6t5zzj338g3kBamwi6+g9w2UlJwQw82SXUsMesCo4xhT0AYRYgj0wFTH401rxpQxeq2nFscbE13f4HM0y8/DMdsvt0XgcRzvmcsXcG+Dst5mJPxFwOEICfuTHw0nVbhcuLLFuJxXvNGNkfHcbCmLoZqePLGkGfcC7k1ERCjJk0GZ4gOmKHPx1UeEfg6+aIit43BVblbH3aDP2Qg6M8xtlxuBP7vD20V5XZ3MTZgqefA5+MdwnbSkVFsbPLQRWR8tW3j1fBqoxnUgtqaD/vXqkhtMBe8JvyJJjiMnwjkj7Ppp3a1xQsKxp4q5uRlbkMvmi85rlJtTf77H2iFNR7tWLOuzitt/DnjV18tzoSa0cPm1zb/ieTDbXLrdU7JqOZesbCnDK8nMy+28/Ajcp+9e2f8X3dcj72BbFI/W86Hjbm5biQW1PxquBQNGqrqaW3tJleV6Z39Sdwdqi1OIAzKy7TCCWcvkL0EQtLLEP/j91XjudHfOschXefUDPmI1/aU7xmwqMWEf564uV+vjPEn8NLO6w50i26RcRMpF6rgkrffWfohVZrnp9RId/Fs+H01jOa0VbuRPNy3MuZfDmJUxvo3I+eXBaI+vTgR6/L0NKE5IxShipMibva7WBig6zXFIMXuoC4i13JepwCmdkFM7Bh97Zrkl8GKkQ28hqfYMylGq9QfUcl5AG5S0CHFV4cgmFSvo1cNVhRJcgd6fj0I1nCk+FAwPSQR6oCuJiiTzmiAp0tfqyzlFrEJl+SXHDLRBTIuDh0GP0Rq3wePCQOrKBicpomgqCs9B2TB5xexKfagKIuSlhuHhmXRBDrhi6FCCHq9InCp0RU64t/8fHJyh9UVF1jlJ00UoQkOGQl+FKj8w4GAgD36DQ7r/1QY5vrCnjRvxBb4NYkIrtszrMitQ9O7x948oDIs6Z/NrHsJmgSnofdjGjJE8qRpmdY5omJIThg0P0ItRVuHv9cYUR+9c3mYYLKLGhoqs+JtxwIMGexPoJ2162s/q5Kg5DHxaxH/oVUoIAW2QPa7KkiTyiiTKYleUlZ72tdm+f8fcpIgwQySrQA/AoXuSqsQcOPCoVI5l6YNEh4kOfnB8b52nN3eJlOqomBSSXpzDvJ8GWosxUo+j6dnNfbbdmH1YuTu8G7z8QxDQA5nYUXhvQLi+qJrV4rxwMA/rTdWVNo5aCVQ8j8mImCKTKeY1b0Z9uyXX4dZz18I0Q3ZhRiKewLO5J0ENW12/7E/h9KXJFuETCfHHZPulsdsHZlcx63wv7OKZu9E7SX/dV4R0qYfJQlo5R9XwXhc3dVPOxgpehOqIYxZaTPhY60yC9VKrL7waOOY6kFX5XHfI9NnUj6GSvQ1z8tZv5PEaE/yYjW9l+l01n7gbz3H39ocQb8P2XwaWEYiTYGod+8fJ1PXs4Vlc+zHdBnT3uvRgeVPW3dn0TGEhFBdwb8xfZojFBT00f4DDFoE2oEXdONjJ4+IXmaDOOcYb6wxVTP/RFT83mqCpz1M+LUobVSnoAd4VU1tsLH7Vy3LOEHtvMqA3jy/x4P43Za6OvI4IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya Ruth",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254756193575",     
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
