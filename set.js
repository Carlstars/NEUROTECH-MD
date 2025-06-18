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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61V266iSBT9lUm9alqKi4DJSQYQFBX0qHibzEMJhZZcLQoRO37LPM0nzH/NJ0zwnDN9ku7pPpM0T0VVsfdae6+1+QzSjBR4jGvQ+wxySi6I4WbJ6hyDHtDLMMQUtEGAGAI94GvJaihCwZ2vmHtVqU/qhKXz/ubYrZQMLjvT42hp2MdLIj6Bexvk5T4m/vcCrgVsOV5gXFrraMkPbJIQRNi2hcozIp3cnlRdpGhHhXBP4N5ERISS9GDmR5xgiuIxrmeI0I/BH9ukPMHAb+mu3dGs2eAYK9FimWxKY+V6jja397J1E1WWOh+DH09X0TN1Eh+LTFF2Z20ae+7N6fCyaZsLdwFPmnI+H/b8ZvsCvyCHFAd2gFNGWP3hurcmrSyl+fR2Q7djsclmI93r19g0r63bhqeyIdym5SQd9s3njwF3WvNhPrhOLBbldBddb+dy4S4jrhWhfqsbsdDYSmofX/dp9R74jL5pJfo/dd+OxNFq61rifqJz++KojhOscFZ4deVWOF7L16Sc8Luhxrjtx+B3NUud5GVr3JmdUI0uYxM6p8D0YsdL+DW5nmZlPUkccoCHL/ARK+n3UNpQvGaBLGZ1la9l2ajOeja+qfURkrWYa3urXi1lBakllc+rTedZPM0vdeipHV0jisvtXSlxVDcJh97sVnDj6c49VLr29GAU4doOQA/e24DiAykYRYxkabMndNsABZcF9ilmj+qCG5udEyMdeu4WnewCjS7XZXwW6ri/zATheOyLG6eseRhbz0+gDXKa+bgocDAkBcto7eCiQAdcgN5vj0Y1nClOMoZHJAA9wEuiLEoQSlBRfi0+VUfECpTnn1LMQBuENEscDHqMlrgNHh+YlsoJsCtKpsaLXVHQZIVT+6pgSaIGZaXfMExeki5JgguGkhz0oCxxvMjJKndv/xwcAqeaMoSqqSiwK2iSxZuaCaGmw76l8Kr+Axzqz8LBQ5OHumXwoqiKUDOhBnnFkmUR8lCSVPG7OBQo3X9vgxRf2YudHiKAbRASWjAvLfM4Q8Gb194Oke9nZcoWdeobzQJT0Hu3jRkj6aFomJUpov6RXLDR8AC9EMUF/ld3mOLgjcvrLDWyoLGD0HXNobqdgQZ7E+ir2vR4+HV54sc1qHZ5CFVekDiJ56TmZnPQBilqgoEhRpTtKUYRpr/8/ceffzUlegXf5AowQyQuQA8YIyMWZuLQtAd+XdiDgWYfNOOggS9k37z8Yhbrur/Q5zJKNSlIYw+TnGh4ERqdZFxyXTIa72PsVdPlDJpP3wgCeoBGpmvXenUqxetgfdh2t5uhM0rXmzrcLEaTiBtnz1I84Iejll8sllw6JiP5MudHcb3fOXKIhcu4peTeRSyv/nJcGdoqMRrjt0GAL8TH75NVXJTohLd4LfC2m+coTcTOyCyKFq9hcVfS82AqerewGns3CUP9dr0VeNidoYW4c2Ynu9JqC478Q0I3KL5UE33qVPu3KfOYcvHr34W8DgDyeA0Jfgzr1378sK0vwBv1cff2uxiv4/8/Rqg+99dyl5vko2q62UmrYXbeHoZRWl0kQtk0I4tE2sROP7qpc3BvbJDHiIUZTUAPoDSg2UM0NCsbOdtpmH0nmaHbtvHKPEYF075Y5BvuV/iXWzOa5UNUHBvFz9WdoDZ6r7U8XzDE3hwHtOYxrhW4/wOupMx3IwkAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Cally",
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
    BOT: process.env.BOT_NAME || 'NEUROTECH_MD',
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
