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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U247aSBD9lahfQQHfMdJI8Q1jMObOAKt98KVtN/hGdxuwIz4lb/myfMnKMLMZKdnZWWn91C63q06dOqe+gixHBI5hBfpfQYHR2aWwOdKqgKAP1DIMIQZtELjUBX2QGnbaxSslhaerJ06SkVaVaZ1tW3PHmXFDVZ4xrDJYD3Tz+ARubVCUXoL8dxJysyOHhdR6HgnWljFq5zAdmfnRmfLJIljuTFmZpCOvjubD9RO4NRldhFEWGUUMU4jdZAyrmYvwx+BDtfSClr6Spb10HoxSa3nJXD9WB+ZwQzbOuues/bgodfRsfAw+GRb2+WovTJHP4SU5qCLG88NlLrgCETqhNIdZ1bXV0ZbtPuATFGUwsAKYUUSrD/PeUlYe513qk1bXiy432wluPZ07s3psL4TEvkqX6147jaIl90HgsR5VldLzXCfOooWy6Q5Zyk5JNCszXxYsdmMeqME/r+ot/xb4DL9q5fhfeK8MebKytJgUB3mgGXveSf2BzstUqEinCPQeG6k0yjSTm38M/mEwksdLWKr5Zjxf88FUWMvyYqJslVbqQQUfRDtG1Lpwl+gnfJeW+D2Ul7NAC8/ftSqUXNfDshR6dqEg9TSsUpEi0Ul5mNuH6Sln3cHR0Py8UqlpjdZyXId01WElH4VTReetiBsY5oLEdaUoT/eOjrCyAtBnbm2AYYQIxS5FedbEWI5rAzc4L6GPIb3TC/aX4NylITc72YFniLHDqp3JlPHCwIrrbjLMqc+cCv6YqcoTaIMC5z4kBAZDRGiOqwkkxI0gAf0/7pNqmsYwzSkcoQD0ASvwDMMzMsMJvS/k8yV2KXGL4nMGKWiDEOfpBII+xSVsg/sPosLysiB3RcnQWYbRJcHQOE3pKeJAkDWFaVpMH0VXKIWEumkB+owkdHscJ4virf3/4BBkReKZLiPzhqwyuqFommyoPVlRDYERRPl9HBJ3+7MNMnilDx037HNMG4QIE7rOyiLJ3eBV5K8fXd/Py4wuq8zXmgPEoP8mDClFWUSazsrMxX6MzlBr+gD90E0I/HvgEMPgtZeXJablQaPDhSzbS3W1Aw32JtEv3PS5X9lJHrd4UeI4nmV5kenKQp/70sTbIHObVEB3Mwo/pX5J4acf377/+Pa9YegFe1MqgNRFCQF9oDn1lt3tdMMSWYlYpqkYkaJFCvjZ66uHHhr1mGXuzRbIDvHRK9lWPjuNKoiF82S8ti1GCA1mSKB+LK7G02+SgD6o+d2RXNOhNDlranKmZUfdQhZvFs+9Dt0fIzss7B6x0zzubXsRzczrJpvblyqasvmFJGXgZ8tFxg7nnilHPFRrZCpqY7g2COAZ+fBtsfOijvWRoz9PDfZ8tJ3tNSHdPd0zWUdLqJxoBTsa9IzzONWpb25Wx5yZqbA11nWHMMaMrMSACazEr4fuJtEl3tq3DCV6uPu+XZKXrY5efIfuryGC9yX5MpB/m+oDd6O97q39JsXL1v2HzaU+y+uTWXd3iBMFU6Lnky4iPzu1vFpLtMqB26uzkIaRMPYX4NaYoEhcGuY4BX3gZgHO76LBedmI2crC/J1immJZ2staS1xClZ8G+Y3n+N7j1gznxdAlccPBRpJO60btlVIUS+rSV78BpXlGnR64/QUvOPjcmggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya Ruth",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254114191358",     
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
