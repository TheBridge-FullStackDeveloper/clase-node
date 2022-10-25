// // const http = require("http");
// // const math = require("./math");
// // const fs = require("fs");
// // const url = require('url');

// // console.log(math.sum(2, 2));
// // console.log(math.resta(3, 1));


// // const adr = 'http://localhost:8080/default.html?year=2017&month=february';
// // const q = url.parse(adr, true);

// // // console.log(q.host); //'localhost:8080'
// // // console.log(q.pathname); //'/default.html'
// // // console.log(q.search); //'?year=2017&month=february'

// // const qdata = q.query; //{ year: 2017, month: 'february' }
// // console.log(qdata.year); //'february'

// // http.createServer((req, res) => {
// //     fs.readFile('test1.html', (err, data) => {
// //       res.writeHead(200, {'Content-Type': 'text/html'});
// //       res.write(data);
// //       return res.end();
// //     });
// //   }).listen(8080);


// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http.createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     const filename = "./pages" + q.pathname + ".html";
//     console.log(filename)
//     fs.readFile(filename, (err, data) => {
//       try {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       } catch (error) {
//         fs.readFile("./pages/notFound.html", (err, data) => {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         console.error(error);
//         return res.end(data);
//       })}
//     });
//   }).listen(8080);


const http = require('http');
// import http from "http"
// import {upperCase} from "upper-case"
const uc = require('upper-case');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hola The Bridge!"));
  res.end();
}).listen(8080);
