// 함수 선언문
function helloWorld1() {
    console.log('helloworld 1');
}

helloWorld1();

function helloWorld2() {
    return 'helloworld 2';
}

console.log(helloWorld2());

let sayHello = function (text) {
    console.log(`안녕 ${text}`);
}

sayHello('지애');

// 화살표 함수
let sayHello2 = (text) => {
    return `hi, ${text}`
}

console.log(sayHello2('Jiae'));

function add(a, b) {
    return a + b;
}
console.log(add(56, 3));


// 실습 1 제곱
function square(a) {
    console.log(a ** 2);
}
square(5);


// 실습 2 
function multifly(a, b) {
    return a * b;
}
// = 위와 같은 함수 
// let mutifly = (a, b) => {
//     return a * b;
// }
console.log(multifly(3, 7));