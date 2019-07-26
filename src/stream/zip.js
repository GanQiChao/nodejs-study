/**
 * 链式流
 * 管道和链式实现压缩和解压
 */

var fs = require('fs')
var zlib = require('zlib')
// compress
function compress() {
  // 压缩 input.txt 文件为 input.txt.gz
  fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))

  console.log('文件压缩完成。')
}

// decompress
function decompress() {
  // 解压 input.txt.gz 文件为 input.txt
  fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'))

  console.log('文件解压完成。')
}

compress()

setTimeout(decompress, 200)
