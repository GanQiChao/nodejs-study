const fs = require('fs')
const { Console } = require('console')

// 断言目录是否已存在，若不存在则新建
const dir = './demo2'
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

// 输入输出日志
const output = fs.createWriteStream(`${dir}/stdout.log`)
const errorOutput = fs.createWriteStream(`${dir}/stderr.log`)
// 自定义的简单记录器。
const logger = new Console({ stdout: output, stderr: errorOutput })
// 像控制台一样使用它。
const count = 5
logger.log('count: %d', count)
// 在 stdout.log 中: count 5
