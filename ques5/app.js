// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

var readlineSync= require('readline-sync');

var sname;
var unitTest;
var preFinals;
var finals;
var totalMarks;
var classTotalMrks=0;

for(var i=0; i<5; i++){
  console.log('\nRoll No. :'+(i+1))
  sname= readlineSync.question('Please enter your name: ');
  unitTest=readlineSync.question('Enter your unit test marks: ');
  preFinals=readlineSync.question('Enter your pre final marks: ')
  finals=readlineSync.question('Enter your final marks: ');
  totalMarks=Number(unitTest)+Number(preFinals)+Number(finals)
  classTotalMrks=classTotalMrks+totalMarks;
  console.log(`TOTAL MARKS: ${totalMarks} \nAVERAGE MARKS: ${totalMarks/3}`)

}

console.log(`\nCLASS AGERAGE MARKS ARE ${classTotalMrks/5}`)