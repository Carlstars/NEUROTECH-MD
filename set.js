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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U2Y6jRhT9lahebY3ZDZZaCpttvDR4XALPHA;;;H4sIAAAAAAAAA62VWY7qRhSGtxLVK+jieUBqKR4xBpqpDYYoD8YuTOGhTFUZMFe9ljxlCdlXlhCZ7s5t6d50OlL8ZJfL53z/qXN+fwUlRhSOYAP6X0FF0DlisL1lTQVBH5j1fg8J6IIkYhHoAzrsmYF2YU8Hyd9eS1R6ecGKDMlVgCVfWXd4eSXFxYx3Nw/guQuqepej+IOAOa9JlsctN8VjMNxWcEtUb53DHloM07W3miTBYrfwPSqn8wfw3EaMEEFl6lQHWEAS5SPYzCJEPocfOPKYhCl6usri/Fiix+tAWCzzy22fdKbHkmWPriME4kxYcZ/D93E9XzXa7eYWq9FZWo8SRdgMNG+Hqb63OT/H5i63pPP8iF/wKUpLmAwTWDLEmk/XvTGMOqixJLn5RtkR2mh1fEo7c5dL1euGFfxuOEYU8ldX+hy4Ki+OcxadR+rOkWfz3B0EGp963PoY3mymhKE5OvN42xyt4D34jLz1SvZf6r4cpOUtEVZD41yI+zhezAPP42aSneX+VgtIPp6f7HUixMXlc/iJ4cIkmVw3vhZhakgz2274cHRK7Tz0hpuMJqcNxWjgWdk3/IjV5CNKgY21uCokeVML+wBZnEWumYVnT+L2sbPE2co+ytr4pE1qyddIE/qZzsblSR6ObvL52uPWJR4eTIYre9xTJ+NssKCZeXm4K8pgM0xAn3/uAgJTRBmJGMLlfU2QuyBKzksYE8ju5QWbxsc7jleNhTb1/XOkZ0qvM1jdRGs/tF25EzqUzivY2+7TB9AFFcExpBQmHqIMk2YCKY1SSEH/l/tJtaIJLDCDPkpapbKkSjLPy7ym/Uy/XA4Ro1FVfSkhA12wJ7iYQNBnpIZdcP/AsUVe123TEl3LUmxHVjjesDjNcnjFNgSplVi8JH1CBaQsKirQ51VZ4BVF59Xn7v/DIYqOpHGO6Ug8r9umzSuCbmuGwmuWobmC/DGHIP9fHJKruYpqiqakarbkio7lqq4tSqLqqoauqx9ziPzzr11Qwit7mae2C0S+C/aIUBaUdZXjKHkbtreXURzjumTLpoyt9gYS0H+3DBlDZUpbZXUZkfiAztBqdYD+Psop/LvxIIHJm5ZXM7Vw0s7DWBo7irwwQMveBvquNn2F+748+X0brysCz+uCKHOywMntzvZFF5RRGwx4MCJsR2CUQfLTn7/9/kdbolf4NlcCWYRyCvrAGp1ycSZ5zsw7nrXJYGA4qWGlLdab2LdhfhkW97o7k3mdlYaclHkAUYUMuNxbvWJUcwryR7scBpfp04x3Hn4QBPRBqva4lZJt66fZKTm6NNfHa7JJStXcTjcdjp7cNPSqzu5kzIPQKRO4XHMXZB/mSciMXQpvcSUVa6u5sXG4vtaLYzi9melDmy2BZxTD98kuEjRWp85t2kAouMtEN4ZjHuIzM6tDdsjWZUInJ00vDv4jt1GNcXOcPa0sBYdbe45l4So4F+p48aM08cnR1G9CGfQM48Vm7jaXv/5e0KsBoPvjHsG7W7+ex78e6wt4233cc/ddjFf//wcPNRfxWlW4ceVfpuFWXnn4tEm9rLycZUTYFKNlIYf5xM5u+gI8t2NQ5RHbY1KAPojKhOB70xBct+08LPf4g2SWORxar8rziDLj24j8yIW4l10zgisvoofWThb6VtTbfm+MqlqyiL1NHDDaa9B5BM9/AX5e2X4kCQAA',
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
