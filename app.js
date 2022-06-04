// // Built in Module
// // OS Module
// const os = require('os')
// const path = require('path')

// // info about current user
// const user = os.userInfo()
// console.log(user);

// // returns system uptime in sec
// console.log('uptime',os.uptime()); 

// // console.log(path.sep);

const http = require('http')

const server = http.createServer((req,res) => {
 res.write('Welcome to homepage')
 res.end()
});

server.listen(3001); 