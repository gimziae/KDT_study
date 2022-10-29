let now = new Date();
console.log(now)
console.log(now.getFullYear() + '년')
console.log(now.getMonth() + 1 + '월') //월은 0부터 시작해서 +1을 해줘야한다.
console.log(now.getDate() + '일')
console.log(now.getHours() + '시')
console.log(now.getMinutes() + '분')
console.log(now.getSeconds() + '초')
console.log(now.getMilliseconds() + 'ms')
console.log(now.getDay() + '요일') //일(0) ~토(6)

let day = now.getDay();

if (day === 5 || day === 4 || day === 3 || day === 2 || day === 1) {
    console.log('평일')
}

// Math
// property
console.log(Math.PI); //ㅠ 3.14
console.log(Math.E); //e 2.71828
console.log(Math.SQRT2);

// method
console.log(Math.min(100, 45, 23, 88)) //최소값 출력
console.log(Math.max(100, 45, 23, 88)) //최대값 출력
console.log(Math.round(5.4)) //정수로 반올림
console.log(Math.floor(144.5)) //정수로 버림
console.log(Math.ceil(14.2)) //정수로 올림

console.log(Math.random()) // 0<=X<1 사이 소수 랜덤 생성

console.log(Math.floor(Math.random() * 100))
//^소수 생성 후 정수로 변환


//0<x<=9 -> 0*9<=x<1+9
console.log(Math.floor(Math.random() * 9))

//0<x<=10 -> 1<=x<11
console.log(Math.floor((Math.random() * 10) + 1))

//1<x<=100 -> 2<=x<101
console.log(Math.floor((Math.random() * 99) + 2))

//20<x<=22 -> 21<=x<23 0<=X<1
console.log(Math.floor((Math.random() * 100) + 2))


// 0<=x<1*236> 0<=x<256
console.log(Math.floor(Math.random() * 256))