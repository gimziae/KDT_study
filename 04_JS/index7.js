// 2. WHILE
let n2 = 1;
while (n2 <= 5) {
    console.log(n2)
    n2++;
}

let n3 = 9;
// n3가 4보다 크다면 코드 실행
while (n3 > 4) {
    console.log(n3);
    n3--;
}

// 1부터 10까지의 짝수 출력
n2 = 1;
while (n2 <= 10) {
    if (n2 % 2 === 0) {
        console.log(n2);
    }
    n2++;
}

// 무한루프
let a = 0;
while (true) {
    console.log(a);
    a++;

    if (a > 10) {
        break;
    }
}
console.log('a');

// let b = 0;
// while (confirm('계속 띄울까요?')) {
//     b++;
//     alert(`${b}번째 alert창`);
//     if (b = 5) {
//         break;
//     }
// }

// continue (해당되는 조건 무시)
let sum3 = 0;
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; //skip의 기능
    }
    sum3 += i;
}
console.log(sum3)

// 실습
// 구구단 2~9단(for문 중첩)
for (let i = 2; i < 10; i++) {
    console.log(`===${i}단===`)
    for (let j = 1; j < 10; j++) {
        console.log(`${i}X${j}=${i * j}`);
    }
}

// 0~100 사이의 2 or 5의 배수의 합
let sum25 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        sum25 += i;
    }
}
console.log(sum25);