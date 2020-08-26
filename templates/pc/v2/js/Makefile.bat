echo off
set b=%cd%
if "%1"=="dev" docker run -it -v "%b%":/projects -p 80:80 --rm --privileged=true store.linkkids.cn:8081/h5/jarvis:0.1   npm run dev
if "%1"=="build:prod" docker run -it --privileged=true --rm   -v "%b%":/projects  store.linkkids.cn:8081/h5/jarvis:0.1 npm run build:prod
if "%1"=="build:stage" docker run -it  --privileged=true --rm -v "%b%":/projects  store.linkkids.cn:8081/h5/jarvis:0.1  npm run build:stage
if "%1"=="deploy:test" docker run -it --privileged=true --rm -v "%b%":/projects  store.linkkids.cn:8081/h5/jarvis:0.1  npm run deploy:test
if "%1"=="install" docker run -it --privileged=true --rm -v "%b%":/projects  store.linkkids.cn:8081/h5/jarvis:0.1  npm install
if "%1"=="add" docker run -it --privileged=true --rm -v "%b%":/projects  store.linkkids.cn:8081/h5/jarvis:0.1 npm i -S "%2"
if "%1"=="remove" docker run -it --privileged=true --rm -v "%b%":/projects  store.linkkids.cn:8081/h5/jarvis:0.1 npm uninstall -S "%2"