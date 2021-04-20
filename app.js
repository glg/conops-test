const express = require('express');
const app = express();
const yaml = require('js-yaml');
const fs   = require('fs');
const employeeInfo = yaml.load(fs.readFileSync('./config/employeeInfo.yml', 'utf8'))

// console.log(employeeInfo)

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/home.html', { root: __dirname });
})

app.get('/getEmployeeInfo', (req, res) => {
  let empId = req.query.empId;
  res.json(employeeInfo[empId]);
})

app.get('/getOrgInfo', (req, res) => {
  let dept = req.query.department;
  let deptInfo = yaml.load(fs.readFileSync(`./config/${dept.toLowerCase()}.yml`, 'utf8'))
  res.json(deptInfo);
})

var server = app.listen(3001, function () {
  let port = server.address().port
  
  console.log("Test app listening on port: %s", port)
})