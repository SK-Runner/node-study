const fs = require('fs');

/**
 * readFile(路径，[格式],回调函数)
 *  格式：非必传参数，默认utf8
 *  回调函数：
 *    参数：
 *      err：文件读取失败的错误信息
 *      data：文件内容
 */
fs.readFile(__dirname+'/files/file1.txt','utf8',(err,data)=>{
  if(err){
    return console.log('读取文件错误',err);
  }
  console.log('文件内容：',data);
})


try {
  /**
   * 同步方式读取文件，缺点是会阻碍后续代码执行，建议使用流读取文件内容
   */
  let data = fs.readFileSync(__dirname+'/files/file1.txt','utf8')
  console.log('文件内容：',data);
} catch (error) {
  console.log('读取文件错误',err);
}