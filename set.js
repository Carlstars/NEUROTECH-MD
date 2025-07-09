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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U2Y6jRhT9lahebY3ZDZZaCpttvDR4XALPHA;;;H4sIAAAAAAAAA61V246rNhT9lcqviU64hACRRiq3AEmYIbfJpeqDARMcrrFNSHKUb+lTP6H/1U+oyMx0RjrtOVOpPBnb7L322mttvoKixBRN0AUMv4KK4BNkqF2yS4XAEOh1HCMCuiCCDIIhQJ7q5/p6IMhNIufa/NE0p6tEHmh8cj1kdL6O3ZG4t1JjrTyAWxdUdZDh8DsBoZvwahj2Z4JpyyreKuvdKFfFSDxPHX0eJKkV7Ae6w1TOegC3NiLEBBd7q0pQjgjMJujiQ0w+Cd9hm+2kyWeOOtuFllpITAvStaxSM1hNJtZ5MrXPnrv20vBz8KduulpzUbA7e6PJci1kB7JMT8QoMufKy5NYsVIYeuw01bkX+BTvCxS5ESoYZpdP895xiqfjY2T3ceNzbCOVqT2zDbXeIH0s9Qo/fardaNqP1bz5HPC9sRsHiqQhP73KfV/tr8ZbXjcOm/kjzLabUj3xc7tK+02ifQTukzetpP+Fdzq2m/rA444yE56W0rgnxDPjUTyhnr4a76d0NPLNOpmtl6vyc/BppPVj3d/OCm82hSfhUTnS6/G6ndJws1VW2jVvOCMq58hO3+FDVpPvoQzkEp/zvhjoSBrpa3YuQ79z9RdORtn06NU9GEvcgZ7tpXViMneoT6zUn5cQefLhWYA7KbmU3vFSK9S8HlbhKec7PN4/3CtK0cWNwJC/dQFBe0wZgQyXRbuncl0Ao9MChQSxO7tAoUGno+2Ifnw+u40UXjs4fE5EZ5ZseZiKlThllm6Xh3LTPIAuqEgZIkpR5GDKSnLxEKVwjygY/nJvVFszQXnJ0BhHYAgEqS/3JZ6XeEX5mX5pEsgorKovBWKgC2JS5h4CQ0Zq1AX3D2TDEAaSPOLl0UgZacpowIv6wLK4vsSrgqi0FeYvSZc4R5TBvAJDXpYErq8qvHTr/j84VFkyTE0wec6SLcXkeJ5TlL5pKiLXt0yD+wGOwe3XLijQmb3IuCVf5LsgxoSyVVFXWQmjN42/HcIwLOuCLS5FaLQLRMDwwzZiDBd72lZWF5CECT4ho60DDGOYUfR3vxFB0VstrzPMKKNWhoK/2EjOfAda7G2gb7gZSoNv6cnu13h1IPBtDyROEjipvdkedEEB22DAQZCwgCCYIvLTn7/9/kdL0Sv4NleEGMQZBUNgTFAm+n3HerrOas+zbc3aa8ZeA+/FvnnoRaSjc3AiszotNCkqshXCFdbQIjZ6+aTmBng8CTK0ap6WPm89/EOQdqqxQXGZZJl82oXjqkqsLA1sc99Ix4OkdZaLqHL9eiBHj9WBPtrRoGNqTWbLCWe7Tic4jJJSjelo68xlp8cuQtSDcGpoD222CJ1wiD4mS9zOiDc2y4kPXWXHB0T19F7HFQ3uaFZbqsarLEv3MBLqJi24XarMF7tjJUjzI82m1sRbpwtteRaiymh6oeBA60DM5NXd9+mSvU51/Go8fH+NMboPydd+/LCtL8Bb9XG37ocYr2P3X0aXPg/X8oCbVuPmabOTnp3yuN07adGcJEzYU4kXubTJPDO9qnNwa21QZZDFJcnbf3ARkfIuGlLWrZzdIi6/k8zQXfdO860LMkiZ9m6Rb10nK4OXWz4pKwfSBAyBOFd3otrq/aJV1YJB9uY4oLXPWCHg9hcb4E5emwgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya Ruth",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254745115188",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by cally-stars',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'My owner cally stars cant receive your call please avoid calling',             
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
