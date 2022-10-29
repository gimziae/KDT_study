//1)
const box = document.querySelector('.box');


box.addEventListener('click', () => {
    if (box.classList.contains('orange')) { //box에 ornage라는 클래스가 있다면
        box.classList.add('skyblue') //skyblue라는 클래스를 추가해주고
        box.classList.remove('orange') //orange클래스는 제거해줘라
    } else { //orange class가 없다면
        box.classList.add('orange') //orange class 추가해주고
        box.classList.remove('skyblue') //skyblue class 제거해줘라
    }
})

//2)
const input = document.querySelector('.text');
const btn1 = document.querySelector('.btn1'); //버튼
const btn2 = document.querySelector('.btn2'); //입력
const span = document.querySelector('span');

btn1.addEventListener('click', function () {
    input.value = '';
    input.setAttribute("placeholder", "아이디를 입력해 주세요.");
    span.innerText = "아이디를 입력해 주세요."
})

btn2.addEventListener('click', function () {
    span.innerHTML = input.value;
    input.value = '';
})

