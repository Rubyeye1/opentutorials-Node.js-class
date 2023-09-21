var name = 'k8805';
//var letter = 'Dear ' + name + '\n\nasdfijvpoija apwoiefjpo ija a' + name + 'wiojef.'; // 중복을 제거하면 좋은일이 생긴다
//console.log(letter);

var a = 1;
var letter = `Dear ${name}  

asdfijvpoija apwoiefjpo ija a ${name}${1+1} wiojef.`; // 달러를 쓰고 괄호안에 변수명을 넣어주면 그 자리에 자동으로 변수가 오게 된다. 줄바꿈도 \n을 넣어줄 필요가없다
console.log(a)
console.log(letter)
// 중복을 제거하면 좋은일이 생긴다
