var nodeCmd = require('node-cmd')

function runCmdTest() {
  nodeCmd.get('ipconfig.exe', function(err, data, stderr) {
    console.log(data)
  })

  // nodeCmd.run('ipconfig')
}

runCmdTest()
