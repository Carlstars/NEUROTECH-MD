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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61Va4+iSBT9K5v6qjOCIA+TTgYQBVR8QfvY7IcCCih5ShUqTvzvG3R6p5Pd6e1Nlk+Vourcc+8999R3kBeYoClqwPA7KCt8hhS1S9qUCAyBWochqkAXBJBCMASunqV6J03nPFPqRgLH/NotO83kkPvJqmAyUVcQm9nsMdVfwL0LytpLsf8B4NHdj7VR3zk0bD5B7lm83iRO0vu1bdZJT81tJa86ym6ksMkLuLeIEFc4j/QyRhmqYDpFzRLi6nP0J3ZtHiwJTk4cX+LN1hOtetPXsnApWqi5nLU9y3qu6y+45HP0t9PZnsoyRe64aFhb9A/xAm2940ZNXIMV8oMp9tXFdJpzqyd9gqMcBWaAcopp8/m6z7FZec0SNTuxwoY4iKOZj2nfmu+oG6n5NLhBPF7OnVfyOeLrTLpduDM9kM4l7ZfhHKrCir2Igrq7HbQAO9cxt11grpiQ98SX1ZtWkv9S9629N22/UycWSui0PC1mDEdvrzJzjaG4deIkay75dj+Lx+bn6C+w51mnvbi2CL/kDvtZqE7ZnRhz63HVY/B2E8hRNCFEaN7Rh7SuPmIJg7nBqzPGiUgpR+uxapFYFuAS04xomxDTk6HLhT09etW+WVyLUW8zuVILzzcdydNucS8xqkIrj3tfXi0cM17JTIKVl0dGCWrMAAzZexdUKMKEVpDiIn/sSYMugMF5g/wK0Ud5geWk+Xlqnm67zJQnNDnorpFpoZQZ2qzD6WtLDterTHbDdfQCuqCsCh8RggIDE1pUzRwRAiNEwPD3R6fapCuUFRRZOABD0B/w4kAcCLLMCN/I10sMKYFl+TVHFHRBWBXZHIEhrWrUBY8LAiuIap9TeGkkKKrWVwesLKljadwXeJ4dSW2K2TOogzNEKMxKMGTFAcswstTn793/h4coc7yuarzKKpw4GgmqzKo6x0gjVWElkVc/5sGz9z+6IEdX+tRxW32O7YIQV4S6eV2mBQzeRP72E/p+Ued00+S+1i5QBYbvthGlOI9Im1mdw8qP8RlpbR5gGMKUoHsXBOiMfdTiAYXjTlHVuGulzm1BX59XXsJFbQfjIn8egQMu7PMB88ULA+kL7w/ELzKUgy8s53uBKDMhZALQluNpIe2dXyqa2Fw9kXryqzwPM4Qh7KTu2b70zE3xUOVTiqhCwVuVPegndekUCco/wL0Q48brNDpqAeePJx121ViJMV+hcfIO9ylxMPz+07a1ImjxRs7YWRvTCWi71cb5mxqG/b/rIYfZ43IRFb85MKt/01JICPZBF6QPAElmJEZiZEEURWbY/9bu3v9qVRsnQBTilIAh0OZ1kNLI0M2N2/HNyUQxI0WLFPCztW+W8RzJkSCv7AVudoyzXHCiYw6i22A1MIghXVj0qgQSHsunWNo70ss/gIAhmGv6cQ6tNML2glscdkxyqP1+Wo+sG6texgfFmd/YiBvPbG6x2QpHW/IMPdalZporhhZeyj1MZb2x3PUxDerZq9Frlkr00kZ7Sux9sKO0k+2ZMums3Gnq5YNO5Zl7GuWI+KPNbF28+rfjuBRG5MTRSPUy+UqMIHSEztIy6RpdNzo/SDcEVaEt2IzhRGEmHVdPM3uYafrjEcM/bOYpyBCjx5vwo1f/1tKfo8Hcu+8gfjwyv5Cfuuqc3ZFTkFTWbzfaYZrFft5xF2tR7c3tXboyQjMOYRFO9B64tzNfppCGRZW1M5F5EHRBVdTt4Jp5WHwQSVPclXJVlDbrFBKq/DSDf/AXlnmeWlZFaUAStwV4FcWT2+q8UcpyQyF98xagtN/UX4D7n+AOTjuGCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kijana ya Ruth",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254757569906",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by cally-stars',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'collo declined',             
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
