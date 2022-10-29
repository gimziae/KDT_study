// if 문
if (5 === 3) {
    console.log('마자요')
} else {
    console.log('땡')
}

let number = Number('숫자를 입력해 주세요');
console.log(typeof number);

if (number > 10) {
    console.log('10보다 큰 수 입니다.')
} else {
    console.log('입력하신 수가 10보다 같거나 작습니다.')
}

if (number > 10) {
    console.log('10보다 큰 수입니다.')
} else if (number === 10) {
    console.log('10 입니다.')
} else {
    console.log('10보다 작은 수 입니다.')
}

if (number > 100) {
    console.log('잘못된 점수입니다.')
} else if (number >= 90) {
    console.log('A')
} else if (number >= 80) {
    console.log('B')
} else if (number >= 70) {
    console.log('C')
} else if (number >= 60) {
    console.log('D')
} else {
    console.log('F')
}

let age = Number('나이를 입력해 주세요.');

if (age >= 20) {
    console.log('성인 입니다.')
} else if (age >= 17) {
    console.log('고등학생 입니다.')
} else if (age >= 14) {
    console.log('중학생 입니다.')
} else if (age >= 8) {
    console.log('초등학생 입니다.')
} else if (age >= 0) {
    console.log('유아 입니다.')
} else {
    console.log('인간이 아닙니다.')
}


// if 문 중첩
let userId = "user01";
let userPw = "1234qwer";

function loginUser() {
    let inputId = prompt('ID를 입력해 주세요');
    let inputPw = prompt('PW를 입력해 주세요.');

    if (userId === inputId) {
        if (userPw === inputPw) {
            console.log('로그인 성공!')
            alert(`안녕하세요 ${userId}님 환영합니다.`)
        } else {
            alert('비밀번호가 일치하지 않습니다.')
        }
    } else if (inputId = '') {
        alert('아이디를 입력해 주세요.')
    } else {
        alert('없는 아이디 입니다.')
    }
}

// loginUser();

// switch > 제한이 있다
let a = 4;
switch (a) {
    case 3:
        console.log('입력값이 4보다 작슴니다.');
        break;
    case 4:
        console.log('4입니다');
        break;
    case 5:
        console.log('5입니다');
        break;
    default:
        console.log('어느 수인지 파악이 안돼요');
        break;
}

switch (parseInt(number / 10)) {
    case 10:
        console.log('A')
        break
    case 9:
        console.log("B")
    case 8:
        console.log("C")
        break
    case 7:
        console.log("D")
        break
    default:
        console.log("F")
        break;
}

// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
    console.log('홀수');
} else {
    console.log('짝수');
}

let result = num % 2 === 1 ? '홀수' : '짝수';
console.log(result);

let fruit = 'banana';
console.log(fruit === 'banana' ? '바나나' : '바나나가 아님');

let now = new Date().getHours();
console.log(now);
console.log(now >= 12 ? '오후' : '오전');

console.log(3 !== '3')