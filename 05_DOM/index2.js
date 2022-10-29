// innerHTML, innerText, textContent
let div1 = document.getElementById("div1");
// 태그로 받아드림
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
// 태그자체를 태그가 아닌 문자로 받아드림 (띄어쓰기까지 적용 X)
div1.innerText = "여기는 <b>첫번째</b> 태그입니다. &hearts;      !!";

console.log(div1.innerText);

// 태그자체를 태그가 아닌 문자로 받아드림 (띄어쓰기까지 적용 O)
div1.textContent = "여기는 <b>첫번째</b> 태그입니다. &hearts;      !!";
console.log(div1.textContent);

let yammy = document.querySelector(".mint span");
yammy.innerHTML = "맛없다 ㅠ.ㅠ";

// setAttribute > 속성 접근,변경
console.log(document.getElementById("pooh").id); //pooh

document.getElementById("pooh").setAttribute("alt", "푸");
console.log(document.getElementById("pooh"));

let link = document.querySelector('a');
console.log(link);
link.setAttribute("href", "http://google.com"); //href 속성값 변경
link.textContent = "google"; //문자열값 변경
console.log(link.getAttribute('href'));

// style 속성 사용
let list = document.querySelectorAll('#friends li');
for (let li of list) {
    // li.style.backgroundColor = "#1c78dd";
    // li.style.color = "#FFF";
    // li.style.fontSize = "1.3rem";
    li.classList.add('add-li'); //class 리스트 추가해줘서 스타일 입혀줌
}

let title = document.querySelector('h1');
console.log(title);
title.classList.add("add-h1");

/* 노드 찾기, 부모 형제 자식요소에 접근 */
let friends = document.getElementById('friends');
let tigger = document.getElementById('tigger');
// 자식노드에 접근 .children
console.log(friends.children);

// 부모 노드에 접근
console.log(tigger.parentNode);

// 형제노드
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);


/* 노드 생성, 추가, 삭제 */
// 1. 생성 creatElement
let con = document.querySelector('.container');

let p = document.createElement('p');
console.log(p)
p.innerHTML = '추가된 p Tag';
p.style.fontWeight = 700;
p.style.background = "red";
p.style.color = "white";

// 2. 추가 append, prepend, after, before
// append 뒤에 추가
con.append(p, "안녕"); // append 여러개 추가 가능

let p2 = document.createElement("p"); //p2라는 변수에 p태그를 생성
p2.innerText = 'p2'; //p2의 이너 택스트를 "ㄴㅇㄹㅁㄴ"라고 선언
p2.classList.add('p-2'); //p2에 클래스 추가

con.appendChild(p2); //con에 p2 태그를 추가해준다 (변수여서 "" 안써줘도 됨)
// appendChild는 하나만 추가 가능

// prepend 앞에 추가
let p3 = document.createElement("p");
p3.innerText = 'p3';
p3.classList.add('p-3');

con.prepend(p3);

// after, before
let h3 = document.createElement("h3");
h3.textContent = "새로 추가된 제목 h3";
title.before(h3);

let h2 = document.createElement("h2");
h2.textContent = "새로 추가된 제목 h2";
title.after(h2);

// 3. 요소 삭제 remove
let firstLi = document.querySelector("li");
let ul = firstLi.parentElement; //li의 부모요소를 찾는다
console.log(ul);

// remove
ul.removeChild(firstLi); //ul에서 firstLi 요소 삭제
firstLi.remove(); //firstLi를 삭제해라