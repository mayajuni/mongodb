# mongodb
 - 매번 만들기 귀찮아서 그냥 심심풀이로 만든었다.
 
##설치
 사용전 mongodb와 node가 설치되어 있어야된다.
 - mongodb
     - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/ 
 - nodeJs
    - https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora

## 실행
```
1. 공통
    - npm install
2. setup
    - node ./setup.js
3. 스캐쥴러 시작
    - pm2 start changeLog.js
    - forever start changeLog.js
```

## 기능
    1. setup.js
        - 폴더 생성
        - 권한 변경(datas)
        - key 파일 생성 및 권한 변경
    2. changeLog.js
        - log file을 날짜별로 변경 하는 스캐쥴러
          (ex. mongod.log -> 2016-01-01.log)
        - 매일 0시 0분에 시작

##구조
```javascript
├── conf     <- 설정파일
        └── mongo.conf  <- 설정 파일        
├── datas     <- datas
├── key       <- 암호화 key 파일이 있는 폴더
        └── mongodb-keyfile  <- 암호화 key 파일
├── logs      <- logs 파일이 있는 폴더
└── pid       <- pid 파일이 있는 폴더
```
