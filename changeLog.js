/**
 * Created by mayaj on 2016-06-14.
 */
const schedule = require('node-schedule');
const fs = require("fs");

/* 매일 00시에 스캐쥴러가 돈다. */
schedule.scheduleJob('0 0 0 * * *', () => {
    const oldPath = `./logs/mongod.log`;
    if(fs.existsSync(oldPath)) {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
        const day = date.getDate() < 10 ? '0'+ date.getDate(): date.getDate();
        const newPath = `./logs/${year}-${month}-${day}.log`;

        fs.renameSync(oldPath, newPath);
    }
});


