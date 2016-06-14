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
node ./setup.js
```

## 하는일
    1. 폴더 생성
    2. 권한 변경(datas)
    3. key 파일 생성 및 권한 변경

##구조
```javascript
├── conf     <- 설정파일
        └── mongo.conf  <- 설정 파일        
├── datas     <- datas
├── key       <- 암호화 key 파일이 있는 폴더
        └── mongodb-keyfile  <- 암호화 key 파일
├── logs      <- logs 파일이 있는 폴더
├── pid       <- pid 파일이 있는 폴더
```
