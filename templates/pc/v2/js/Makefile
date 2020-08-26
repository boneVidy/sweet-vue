###
 # @Descripttion: 
 # @version: 
 # @Author: 张齐
 # @Date: 2020-04-03 19:42:41
 # @LastEditors: 张齐
 # @LastEditTime: 2020-04-07 19:31:34
 ###
#! /bin/bash
dev:
	docker run -it -v ${PWD}:/projects -p 80:80 --rm --privileged=true store.linkkids.cn:8081/h5/jarvis:0.1   npm run dev
add:
	docker run -it --privileged=true --rm -v ${PWD}:/projects  store.linkkids.cn:8081/h5/jarvis:0.1 npm i -S ${name}
remove:
	docker run -it --privileged=true --rm -v ${PWD}:/projects  store.linkkids.cn:8081/h5/jarvis:0.1 npm uninstall -S ${name}
buildStage:
	docker run -it  --privileged=true --rm -v ${PWD}:/projects  store.linkkids.cn:8081/h5/jarvis:0.1  npm run build:stage
"buildProd":
	docker run -it --privileged=true --rm   -v ${PWD}:/projects  store.linkkids.cn:8081/h5/jarvis:0.1 npm run build:prod
install:
	docker run -it --privileged=true --rm -v ${PWD}:/projects  store.linkkids.cn:8081/h5/jarvis:0.1  npm install
deploy:
	docker run -it --privileged=true --rm -v ${PWD}:/projects  store.linkkids.cn:8081/h5/jarvis:0.1  npm run deploy:test
