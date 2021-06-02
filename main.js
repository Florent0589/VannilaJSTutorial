var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : ''
});


connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})

//to insert record into mysql
/*connection.query('INSERT INTO `employee` (`employee_name`, `employee_salary`, `employee_age`) VALUES ("Adam", 2000 , 30)', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});*/

//to update record into mysql
/*connection.query('UPDATE `employee` SET `employee_name`="William",`employee_salary`=2500,`employee_age`=32 where `id`=1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});*/

//featch records from mysql database
connection.query('select * from customers', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
//delete record from mysql database
/*connection.query('delete from employee where id=1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});*/

//end connection
connection.end();
