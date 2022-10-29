// 1. string
let myName = '지애';
let email = 'gimziae@naver.com';
let a = "say 'hello'"
console.log(myName);
console.log(email);
console.log(a);

console.log('내 이름은', myName);
console.log('내 이름은' + myName + '김');
// ^ + 로 하면 띄어쓰기 안먹음
console.log(`내 이름은 ${myName}`);

// 2. number
let number = 123;
let opacity = 0.7;

// 3. boolean
let checked = true;
let unchecked = false;

console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;
console.log(undef);

// 5. null
let empty = null;
console.log(empty);

// 6. array
let fruits = ['orange', 'banana', 'pineapple', 'banana'];
let fruits2 = new Array('orange', 'banana', 'pineapple', 'banana');
console.log(fruits);
console.log(fruits2);

let data = [1, 'kiwi', false, undef, null];
console.log(data);

// 배열 응용
// 2차원 배열
const korean = [[1, 2, 3, 4, 5], [11, 12, 13, 14, 15], [21, 22, 23, 24, 25]];
console.log(korean[0]);
console.log(korean[1][2]);
const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
];
console.log(letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]);
// 3차원 배열
let nums = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]
console.log(nums[1][0][1]);

// 7. 오브젝트, (딕셔너리)
let cat = {
    name: '나비',
    age: 1,
    isCute: true,
    mew: function () {
        return '냐옹';

    }
};
console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

console.log(cat['name']);
console.log(cat['age']);
console.log(cat['isCute']);
console.log(cat['mew']());

let jiae = {
    name: '김지애',
    age: 29,
    mbti: 'esfp',
    isLovley: false,
    ziae: function () {
        return 'gimziae';
    }
}

console.log('내 이름은', jiae.name);

// NaN = Not a Number

console.log(typeof 4, 'isnt', typeof "wldo", 'data type');
console.log(`${typeof (77)} isn't ${typeof (a)} data type.`);
console.log(`typeof를 array나 null에 사용하면, ${typeof (null)}결과를 얻을 수 있습니다.`);

console.log('------------');
// 형변환
let str1 = true; //boolena
let str2 = 123; //number
let str3 = null; //object

// String() > 문자형으로 변환
// X.toString() > 문자형으로  변환
console.log(typeof String(str1));
console.log(typeof str2);
console.log(typeof str3);
console.log(str1.toString());

let n1 = true;
let n2 = false;
let n3 = 987;
let n4 = '36.5';

// Number() > 숫자형으로 변환
// parseInt() > 숫자(정수)형으로 변환
console.log(typeof Number(n1));
console.log(Number(n4));
console.log(parseInt(n4));


// Ex) 점수 내기
let mathScore = "90";
let engScore = "80";
let avgScore = (Number(mathScore) + parseInt(engScore)) / 2;
console.log(avgScore);
console.log(typeof avgScore);

// let mathScore2 = prompt("수학점수를 입력해 주세요.");
// let engScore2 = prompt("영어점수를 입력해 주세요.");
