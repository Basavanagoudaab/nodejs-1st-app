
const moment = require('moment');
const {version} =require('./package.json')
var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path'),
    open = require('open');
const time = moment().format('YYYY-MM-DD')
const v = version
var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir:`D:\\report/${time}/${v}`,
      reportName: 'report',
    }
});
var dir=['./test/demo2','./test/demo','./test/demo2']
const dirlen =dir.length
for(let i=-0; i<dirlen ; i++){

var testDir = dir[i]


fs.readdirSync(testDir).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});
}
mocha.run(function(failures){

  open(__dirname + '/report/report.html', 'chrome');

  process.on('exit', function () {
    process.exit(failures);
  });
});


//     fs.writeFile("D:/tmp", mocha, function(err) {
//       if(err) {
//           return console.log(err);
//       }
//       console.log("The file was saved!");
//     }); 
    
// });



// var path = "D:\\report/report";
// fs.open(__dirname, 'a+', function(error, fd) {
//   if (error) {
//     console.error("open error:  " + error.message);
//   } else {
//     console.log("Successfully opened " + path);
//   }
// });





// File destination.txt will be created or overwritten by default.
// fs.copyFile(open(__dirname + '/report/report.html', 'chrome'), 'D:\\report/report.html"', (err) => {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
// });
