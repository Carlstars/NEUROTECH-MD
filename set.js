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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U3W6jRhR+lWpuba1hABssRSpgY2OcGEwwcapejGHAY349M2A7qzzLXvUR+l59hAon6Uba7W4qlathfr7znXO+73wGZUUYdvAFjD+DmpIWcdwt+aXGYAyMJkkwBX0QI47AGDSG01sOHaTAdrsfaPXsKQ1XSFFaX9ALWmXmdJsYwmR7mGU34LkP6maXk+gHgKPl46KBPCzMBZ7lM3GhHdAhhz0kElata2nZ6rDhK6kQOsAOERFKynRa73GBKcodfHERoR+jL5jhoJ1z+bZy09VAV0/zc1CGo1guHk+r2qPGepaK8FgdN/bH6AvB3Qqutq5vTQZF5vC7h7CRe9ByldJckxDyXsAvd6cgIN4LfUbSEsd2jEtO+OXDdVfN7eYJBrI3wslen6vRpLdEmVM6dhZKcHtI95K81bQdnakfI46HhnzZkmgxTe21WRywern4Turt7+cVv80TDIPFVoPmch+9J+7SN61k/6Xuuv4UZgO4XwpLT+2ZEmYPBR2ZTxfvND9axRBa6+kyjCN3fvoY/TjM6uOiTfAwTFLLS3OhcMJHy1cyCxvMXvY2Rmbemct1qX+lj3hDf8SyJ3hZmZVi2bhLOCpt+bgLleHstl2c9On2wScuZMPj5OnE5G3ijFLpoai92TGbBvbZC9eJHaxQTyFTf+brVn2QD/GG6frNNaMMX+wYjMXnPqA4JYxTxElVdntQEfsAxa2PI4r5tbygVSb5nbu/2yRytCFJnuB9s+AqW+WRf8wjVurO2t5lgitWN6APalpFmDEczwnjFb3cYsZQihkY/3btVJc0xUXF8YLEYAygIo9kRRQVUVV/ZZ9Oe8QZqutPJeagDxJaFbcYjDltcB9cHxhTKA1lyTAFOBQFOBlqkiwZuiZbE2tqGGqXYvES9J4UmHFU1GAsjhRRECVJE577/w8PSzNEUVd1UTEn0NJECQqCMjGtiSZNNFW3fsJDef69D0p85i867qoviX2QEMp4UDZ1XqH4TeRvhyiKqqbk/qWMzG6BKRi/28ackzJlXWZNiWi0Jy02uzzAOEE5w/80HFMcv+XyOsTMKu50CH1JUyUrBB33Duib2owl7dvy5NdrojaEoqhBSREUKCjdze6gD0rUgYE5RpTvKEYZpr/89eWPP7sSvZLvYsWYI5IzMAamY+aSK8+n7qztRfZspk9T3Ux18DXZNxO9iNQ671rqNVmpK3GZB5jURMd+Yg4KpxGGZOHschycVveuOL35DggYgyoRBoVkDuJmcDnLcnhSGhjKzs5tV2lkiJo/Q4qEJ9v91LtHU9vZDlIzyA/0eFQaVpomDE6Z590/mBdGME4H1PGVq+P6IMYtifD7YDjA/mBlZ4e5EBtSeJ6cs8y1zvDkPVqqsrwrXcMprXBzy/xUlYfze8W2EuEcThaaSonpWsLjCtpMGeA2WIaHs1CnTPde7H0dL/nrWCevxiPX34Tg65R87cdP2/pCvFOf8Nx/h/E6d/9ldhnrKBwNhWW9OK0eHpXNvDpu03lWnlqFUL6qiF8oD/ntJHvS1uC5s0GdI55UtABjgMqYVlfR0Krp5GyXSfWDYKZh2+brYMsR4/pXi3zHdSP55ZZLq3qO2B6MgbTWHiWt0/tFr2ufI/7mOKB3n4OH4Plv2DfP65wIAAA=',
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
