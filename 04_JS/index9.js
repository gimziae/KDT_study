/* 문자열 관련 method : 원래의 문자열을 변환시키지 않음!! */
let str1 = 'Strawberry Moon';
let str2 = "     Strawberry Moon     ";

console.log(str1[1]);
console.log(str1[0] + str1[3]);
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

console.log(str1.length);
console.log(str2.length);
console.log(str1.toUpperCase()); //대문자
console.log(str1.toLowerCase()); //소문자

let str3 = str2.trim(); //빈칸 삭제
console.log(str3);
console.log(str3.length);

let fruit = 'apple';
let msg1 = 'Wow! it is so amazing!!';

// indexOf('')
console.log(fruit.indexOf('a')); //0
console.log(fruit.indexOf('z')) //-1

// charAt('')  : 숫자에 해당되는 문자열
console.log(fruit.charAt(3)); //l

// slice
console.log(fruit.slice(3)) //le
console.log(fruit.slice(2, 5))  //ple
console.log(fruit.slice(-1)) //e

//replace && replaceAll
console.log(msg1.replace('Wow', 'Ah')) //Ah! it is so amazing!!
console.log(msg1.replaceAll('i', 'o')) //Wow! ot os so amozong!!


// ex) 2022.10.27 >> 2022-10-27
let day = '2022.10.27'
console.log(day.replaceAll('.', '-'))

//repeat(n)
console.log('ㅎ'.repeat(10))

//split
let hello = 'hello';
console.log(typeof hello) //string(문자열)
hello = hello.split('l') //['he','','o']
console.log(hello)
console.log(typeof hello) //object(배열)

day = day.split('.')
console.log(day) //['2022','10', '27']

console.log('배열관련 함수------------')
/* 배열관련 함수 : 기존 배열을 변환시키는 함수!! */
let arr1 = [1, 2, 3, 4, 5]
let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster']

// push/pop - 뒤에 추가/삭제
console.log(arr1)
arr1.push(6);
console.log(arr1)
arr1.pop()
console.log(arr1)

arr1[5] = 8
console.log(arr1)

// unshift/shift - 앞에 추가/삭제
arr2.unshift("cat")
console.log(arr2)
arr2.shift()
console.log(arr2)

// includes - true/false를 반환
console.log(arr1.includes(3)) //arr1에 3이 있냐 없냐? 있다 true
console.log(arr1.includes(10)) //false

// indexOf - 몇번쨰 순서?
console.log(arr2.indexOf('puppy')); // arr2에 puppy가 몇번쨰에 있냐? 1

// reverse 거꾸로 반환
arr1.reverse();
console.log(arr1) // [8,5,4,3,2,1]

// join - 배열을 문자열로 반환
let str4 = arr1.join(''); //() 안에 '' 꼭 너허줘야함
console.log(str4) //854321

// for of / forEach
let arr4 = [1, 2, 3, 4, 5]
let alphabets = ['a', 'b', 'c', 'd', 'e']
// for문
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
// for of
for (let el of arr4) { //arr4의 각 배열의 값들에 접근한다.
    console.log(el) //1 2 3 4 5
}
for (let alphabet of alphabets) {
    console.log(alphabet) //a b c d e
}

// for each
alphabets.forEach(function (el, index, arr) {
    console.log(el, index, arr)
})

// let arr1 = [1, 2, 3, 4, 5]
let sum1 = 0
let sum2 = 0
let sum3 = 0
// 기본 for문
for (let i = 0; i < arr1.length; i++) {
    sum1 += i
}
console.log(sum1) //15

// for of
for (let el of arr1) {
    sum2 += el
}
console.log(sum2)

// for each
arr1.forEach((el) => {
    sum3 += el;
})
console.log(sum3)

console.log('----------------------')
// let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster']
// 기존 배열들을 변화시키지 않는 함수 filter, map, find(새로운 배열을 생성해서 저장해줘야함)
/* .filter()=>{} */
arr2.filter(function (word) {
    return word.length === 6;
})
console.log(arr2)

let sixAlphabets = arr2.filter(function (word) {
    return word.length === 6;
})
console.log(sixAlphabets) //quakka, rabbit

/* map */
let arr5 = arr1.map(function (num) {
    return num * 3;
})
console.log(arr5)
console.log(arr1)

/* find */
let cute = arr2.find(function (el) {
    return el.length === 6; //arr2의 배열 중 el의 length가 6인 것을 반환
})
console.log(cute) //quakka

let cute2 = arr2.find((el) => {
    return el.length === 5;
})
console.log(cute2) //puppy

let cute3 = arr2.find((el) => el.length === 7);
console.log(cute3) //hamster


//ex)1~100까지의 배열을 for문을 사용해서 만들기
// 그리고 해당 배열의 합을 for/for of/forEach문을 사용해서 구하기
let numbers = [];
for (i = 0; i < 100; i++) {
    numbers.push(i + 1);
}
let sumFor = 0;
let sumForOf = 0;
let sumForEach = 0;
console.log(numbers)
for (i = 0; i < numbers.length; i++) {
    sumFor = +i;
}
console.log(sumFor);

// ex) 두 배열에서 동일한 요소만 가지는 배열 same 만들기
//      서로 다른 요소만을 가지는 배열 diff 만들기
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고']
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고']

let same = []; // 동일한 요소
let diff = []; // 다른 요소
for (let i = 0; i < fruits1.length; i++) {
    if (fruits2.includes(fruits1[i])) {
        same.push(fruits1[i]);
    } else {
        diff.push(fruits1[i])
    }
}
console.log(same)
console.log(diff)

let same2 = fruits1.filter((fr) => (fruits2.includes(fr)));
console.log(same2)
let diff2 = fruits1.filter((fr) => (!fruits2.includes(fr)));
console.log(diff2)




let num = "12345";
num = num.split('');
console.log(num);

let sum = 0;
for (i = 0; i <= num.length; i++) {
    sum += i;
}
console.log(sum);