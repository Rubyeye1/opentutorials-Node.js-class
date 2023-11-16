console.log('A');
var args = process.argv;
console.log(args[2]);
if(args[2] === '1'){
    console.log('B');
    console.log('C');
}
else{
    console.log('D');
    console.log('E');
}
