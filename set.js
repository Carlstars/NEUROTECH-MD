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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61UW47qRhDdStS/oIsf+IU0UkxjsDEPgw0DE+WjsdumwS/abcC+Yi35yhKyrywhMszkjnRvJhMp/mr3o+qcU6fqK0gzUmAbV6D3FeSUnBHDzZJVOQY90C/DEFPQBgFiCPTAcUAFb+sW3nbhnSaXEV3xplrIqmQQvbq2xsMLxwm+Lh647Anc2iAvdzHxPwg48YqK85WDv/MUFTG/mh9mzJ93DkV0Oey55Wwpjj3FWtje5QncmoiIUJJGRr7HCaYotnHlIEI/B1+38mmmZvxqeNQmG07cORxZuXP7vIuZatJEefZU/hzD4Hn7WfjU8Ld9yd17qlWN5gRWC25dOqHUMTp9OrAu0xVentJWrT/gFyRKcWAFOGWEVZ/WXR6FVtgpYcJn8Krv0shEM305bVWKLsgGPBeK+SIjYyyKl88BFwaCCDlY96EZatcNq6zuSvKmKzxFqTfY2q3TcRTszPhytN4Dd+ibV47/RXd/grLVeo2DkzRBWq4sk8PxOWG+PNX8YOVMXqYoFQZ5PuW6n4Ov1h66doVRVbXCCaQ8lg3qhIUQbBN+0akXrdIYT2aozpLiG3zESvoRyvBkrEfR2V219nXp6tn8OVKO3HUy389ms8WuG7+ct63J9LJz4/QoBHGgLYRDvek6itgqmQXD0yA0W/AaVnUdTrYQrfo5vDzdGR1xZQWgx9/agOKIFIwiRrL0vqe2AQrOLvYpZnd1AW/z1iEm+2hdTf1NqjjWSyLvIynLlxt56CS2c8qD8zI1+OkTaIOcZj4uChyYpGAZraa4KFCEC9D75V6ohjPFScbwmARN8aWu0pV4XuJV9efiy2WPWIHy/EuKGWiDkGbJFIMeoyVug/sDWVZ4cdhXVUkUFX7YV4cc3+c4XeI5Caq60jBMHkk9kuCCoSQHPV6ROFGQZUm9tf8fHBByhjrgodw3NAnqfHfQHegq39UMZSBzQ/FjHLJ6+7UNUnxlDxs34st8G4SEFmyVlnmcoeDN42+HyPezMmVulfqwWWAKeu+2MWMkjYqGWZki6u/JGcOGB+iFKC7w3/XGFAdvXF5nGMyCxobuRoHbgbkFDfYm0Hfa9AT5e3ni+zVekwWe1wRR4iSBk5qbzUEbpKgJBkyMKNtRjI6Y/vTnb7//0Uj0Cr7JFWCGSFw02o6fY9Hpmsa8JdeqNRrpRqTDSAffyL710MOkw+vuTBflMdWlII1XmOREx24IO4ldcjIZ27sYry5zz+GNpx8EAT2AuSHfmoXKwgpEbTx3NU9wFh1T0IIZqtfDJPNmibMhpySq1O1po8k2K7x8O+bKPDrbmwyNqeO6eT9RDNWu6704WST9xVOTLcBn4uP3yVb+FHaQ3Tf7u2UWz7HdCS2FOB19me6oV8aJ725EeeOsFwlcWlciejNon1w7W9nIZLXnX1uuiYUjjerxPFaL0bwzgdGju+/TJX6d6uS18cj9NyT4PiRf6/GvZX0Ab9zH3drvYryO3X8YXf2l/6zI3CQfX+abF2ltZqdtZB7Ty1kilM0z4ibSJp4OjrW2BLemDfIYsTCjCegBlAY0u5uGZmVjZysNsw+Swb5lQf3BPEYF07+1yI+6X3jccmiWm6jYgx4Ql9qLqDV+r/Q8dxlibx0H9OaDVxnc/gIFeTlkmwgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya sophie",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254745115188",     
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
