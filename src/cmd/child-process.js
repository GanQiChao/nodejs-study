const { execFile } = require('child_process')

execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error
  }
  console.log(stdout)
})

// encoding 解决中文乱码
execFile('ipconfig', { encoding: 'buffer' }, (error, stdout, stderr) => {
  if (error) {
    throw error
  }

  // iconv.decode cp936 适用于 window 系统
  const iconv = require('iconv-lite')
  console.log(iconv.decode(stdout, 'cp936'))
})
