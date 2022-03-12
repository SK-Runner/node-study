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
  let fd = fs.openSync(__dirname+'/files/file1.txt','a');
  console.log('open success',fd);
} catch (error) {
  console.log('open fail',err);
}
