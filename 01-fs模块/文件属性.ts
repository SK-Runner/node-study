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