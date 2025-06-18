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
    session: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACNy0lpDi36MUAQAAG4HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGBFEhIiOGEDaO4KCChvzUECBJVerChUn*PcNusfuedid7eWpyKrIPHlOnvwJihJTtEANUH6CiuALZKg9sqZCQAFaHceIgC6IIINAAbaRGpN4pS*ShSfIMcod177tT7i3LJpm52xk*ShIi*WJO5Qv4NEFVR1kOPxDQsmz8trsC9OAqq*8INdyyUgHJexn83q6PuwLeTPqeQieJ9cX8GgzQkxwkRjVEeWIwGyBGgti8jX4zSKkmSUHhXps+P54JvYDPLUwK3s9d3Xdno9hZ1Oteafh06*B9ztzveZOq+V165BrcaZ7gwyPHiFuaaQOJ8dLY+*6s0t5G7zDpzgpUDSLUMEwa77MuzqxZuyO6fng1AI6GAszHxt+5EfWUp*6aE45F+2surpl6teAX2xed1B9F*JcP3CZqhFLMwOrjARh2QmmcVLcfH3VQ31H*R24RZ6zkv4f3uFcuggNjw98OZf2K+veQGfjLFIh9Tp3MZDLtSefTNHUOONr8DcTHKS2k6ZrNxGh6d53ZRKZpugJHf9mY*eM81PdjGPtmnzCh6wmf0K5ylai7VjGNh7d5*4tTPr1cOWwgbRde87QTC4O2aREs5fHKX+3aKguHDpacK*z0h8c6nmwsaXE1QYLYtlY54jpxAIb2y9vHaWomUVA6T+6gKAEU0Ygw2XRxnhO7gIYXbYoJIi90Qti3ZzI2tzcSWpz1s8nz4TMud3mc487XS7XsBjnvBrGQ*8YvoAuqEgZIkpRNMWUlaRZIUphgihQ*vrRBQW6sXfh2nJCvwtiTChzi7rKShg9VX1ewjAs64JtmyLU2wMiQOE+w4gxXCS05bEuIAmP+IL0I2QUKDHMKProEBEUAYWRGn24Vi+jlnhzPBa10X4AuiB*EwRHQAG8OJD6gsiJvCwownf67dpmhVX1rUAMdEH2*mrECZI8FGVJlOSBInxvw48PeG22CDGIMwoUoC*5RVJfDcPcu81oNpmoq0TVExV8tvOci3feAxTddgzrQ26kdjCPTXOqJeqmulfybjyJJRbvHbXHv64E7uUfkgAFDHLSK1KVTV6pGMYkTwZnOpK9iT+Yn*ZTwT+8DtNmap0cPzjJNdPuy*6smpT7y5J61WmYmLtwtzmmQThzxGzuJo1tBHry0laL0AWH6PdiO1F3RrxRTKETb2exteod4GLgbyNtHLiUr1BQlLdlZz1JkG3p1VyzDgF3NPI1E7bUttfxbTTdu56*mtbL2W5QSNqpeiv2dEz2a1Pht1lqhWp*Y4zejF*AVr7*FO4ddzte3KP7W4pfm+Rf3KjthSLcBV5SM0u1SlaenM3VUw0YDuOdfSs60qGfXi356JgyeDx+dEGVQRaXJG8XThGREkegC0hZt*M6K+LyD8V0bTZ7WjWDlKmfHnBwjiiDeQWUviRyvDjkee79lUXKagrpseVgJ0lntx3oRq2qLYPsaSmgtp8ZzMDjb1BLAQIUAxQAAAgIACNy0lpDi36MUAQAAG4HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Cally",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254713505293",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
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
    PM_PERMIT: process.env.PM_PERMIT || 'no',
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
