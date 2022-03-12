# Node.js学习

## 一、概述

**Node和浏览器执行环境的区别**

- 浏览器基于**V8引擎**，创造了javascript的执行环境，在环境中，存在**浏览器自定义的内置对象**：DOM、BOM、Canvas、Ajax等
- Node依然是基于**V8引擎**，创建javascript执行环境，而**Node定义的内置对象**有：fs、path、http等

## 二、Node的内置对象

### 1、fs 模块

#### （1）打开文件：fs.open（）

`fs`模块提供了`open( )`和`openSync()`两种方式获取`文件描述符`。

```ts
let fs = require('fs');

/**
 * open(路径，标志，回掉函数)
 * 标志：
 *  r+ 打开文件用于读写。
 *  w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
 *  a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
 *  a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
 * 回调函数：
 *  参数：
 *    err：文件打开失败的信息
 *    fd：文件描述符
 */
fs.open(__dirname+'/files/file1.txt','a',function(err,fd){
  if(err){
    return console.log('open fail',err);
  }
  console.log('open success',fd);
})

/**
 * openSync(路径，标志)
 * 参数描述同上，openSync直接返回文件描述符，没有回调函数，不过需要使用try-catch作异常处理。
 */
try {
  let fd = fs.openSync(__dirname+'/files/file1.txt','r');
  console.log('open success',fd);
} catch (error) {
  console.log('open fail',err);
}
```



#### （2）文件属性获取：fs.stat

```ts
const fs = require('fs');

/**
 * stat(路径，回调函数)
 * 回调函数：
 *  参数：
 *    err：错误信息
 *    stats：文件属性对象
 *      stats.isFile():文件是否为file文件
 *      stats.isDirectory：文件是否为目录
 *      stats.isSymbolicLink：文件是否为符号链接
 *      stats.size：文件大小
 */
fs.stat(__dirname+'/files/file1.txt', (err, stats)=>{
  if(err){
    return console.log('文件读取失败',err);
  }
  console.log('文件属性信息：',stats);
});

/**
 * 同步方式获取文件属性，方法直接返回文件属性，需要使用try-catch捕获异常
 */
try {
  let stats = fs.statSync(__dirname+'/files/file1.txt');
  console.log('文件属性信息：',stats);
} catch (error) {
  console.log('文件读取失败',error);
}
```



#### （3）























