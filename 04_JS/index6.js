/*
반복문 기본 선언코드
for(변수선언(초기값); 조건식(어디까지 증감); 증감){
    반복코드
}
*/
// 1.FOR
for (let i = 0; i < 10; i++) {
    console.log('hi', i)
}

// i+=2 === i=i+2
for (let i = 0; i < 10; i += 2) {
    console.log(`hi ${i}`)
}

for (let i = 0; i < 10; i = i + 3) {
    console.log(`3씩 늘어나겠네요!! ${i}`)
}
// 1부터 5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
for (let i = 0; i < 5; i++) {
    console.log(i + 1)
}
for (let i = 1; i < 6; i++) {
    console.log(i)
}
for (let i = 5; i > 0; i--) {
    console.log(i)
}

// 1 ~ n까지의 합
let n = 11;
let sum1 = 0;
for (let i = 1; i <= n; i++) {
    // sum1 = sum1 + i; 
    sum1 += i;
}
console.log(sum1)

// 배열과 함께 쓰는 for문
let fruits = ['apple', 'mango', 'orange', 'mangosteen'];
console.log(fruits.length)

for (let i = 0; i < fruits.length; i++) {
    fruits[i];
    console.log(fruits[i])
}

let numArr = [99, 99, 98, 85, 77];
let numsSum = 0; //초기화
for (let i = 0; i < numArr.length; i++) {
    numsSum = numsSum + numArr[i];
}
console.log(numsSum / numArr.length)

/* if문과 for문 */

// 0~20까지의 짝수일 때의 합
let sum2 = 0;
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        sum2 = sum2 + i;
    }
}
console.log(sum2)

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
    n--;
}

// 1부터 10까지의 짝수 출력
n2 = 1;
while (n2 <= 10) {
    if (n2 % 2 === 0) {
        console.log(n2);
    }
    n2++;
}