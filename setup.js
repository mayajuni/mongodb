/**
 * Created by mayaj on 2016-06-14.
 */
const exec = require("child_process").exec;
const fs = require("fs");
const os = require('os');

if(os.platform() != 'linux') {
    console.error('리눅스 환경에서만 가능합니다.');
    return;
}
console.log(`1. directory setting`);
console.log(`  1-1. create datas`);
if(!fs.existsSync(`./datas`)) {
    fs.mkdirSync(`./datas`);
}
console.log(`  1-2. create key`);
if(!fs.existsSync(`./key`)) {
    fs.mkdirSync(`./key`);
}
console.log(`  1-3. create logs`);
if(!fs.existsSync(`./logs`)) {
    fs.mkdirSync(`./logs`);
}
console.log(`  1-4. create pid`);
if(!fs.existsSync(`./pid`)) {
    fs.mkdirSync(`./pid`);
}

console.log(`2. 권한 변경`);
exec(`chmod 777 ./datas`, (error) => {
    if(error) {
        console.error(error);
        return;
    }
});

console.log(`3. key 파일 생성`);
exec(`openssl rand -base64 741 > ./key/mongodb-keyfile`, (error) => {
    if(error) {
        console.error(error);
        return;
    }

    exec(`chmod 600 mongodb-keyfile`, (error) => {
        if(error) {
            console.error(error);
            return;
        }
    });
});
