/**
 * Created by mayaj on 2016-06-14.
 */
const schedule = require('node-schedule');
const fs = require("fs");

/* 매일 00시에 스캐쥴러가 돈다. */
schedule.scheduleJob('0 0 0 * * *', () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
    const day = date.getDate() < 10 ? '0'+ date.getDate(): date.getDate();
    console.log(`${year}-${month}-${day} ---- mongo log파일 변경 시작`);
    const oldPath = `./logs/mongod.log`;
    if(fs.existsSync(oldPath)) {
        const newPath = `./logs/${year}-${month}-${day}.log`;

        fs.renameSync(oldPath, newPath);
        console.log(`${year}-${month}-${day} ---- mongo log파일 변경 완료`);
    }else{
        console.log(`${year}-${month}-${day} ---- 변경할 파일이 없습니다.`);
    }
});


