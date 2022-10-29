const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-red");
const btn3 = document.querySelector(".btn-green");
const btn4 = document.querySelector(".btn-blue");
const container = document.querySelector("#container");

console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener("click", function () {
    alert("btn1을 선택하셨습니다.");
})

// 하나의 대상에 여러개 이벤트 걸기 가능!
btn1.addEventListener("mouseover", function () {
    this.style.backgroundColor = "aqua"; //this= 이벤트 걸 대상
})

btn2.addEventListener("click", () => {
    let div = document.createElement("div");
    div.style.backgroundColor = "green";
    div.innerText = "Hi";
    container.append(div);
})

btn3.addEventListener("click", changeColor); //함수에 () 쓰지 말기 : w?클릭될 때만 호출되게 해야하기 때문에 변수처럼만 적용
function changeColor() {
    let divs = document.querySelectorAll("#container div"); //btn2 클릭 이벤트를 통한 container 안에 생성 된(새로 만들어진) div 만 선택
    for (let div of divs) {
        div.style.backgroundColor = "skyblue";
    }
    // divs들 중 마지막 divs 선택하기위해 length-1 로 선택
    divs[divs.length - 1].style.backgroundColor = "#d67cde";
}
// 함수를 사용하면 재사용성이 높아짐!!!
btn3.addEventListener("click", changeBtnColor);

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
    // this.classList.toggle("btn-yellow"); //toggle : 잇다없다
    // = if 문 사용해서 
    if (this.classList.contains("btn-yellow")) {
        this.classList.remove("btn-yellow");
    } else {
        this.classList.add("btn-yellow");
    }
}

/* scroll */
console.log(window)
window.addEventListener("scroll", (event) => {
    // console.log(event);
    // console.log(event.target);
    console.log(scrollY);
    if (scrollY > 250) {
        document.querySelector(".scroll").style.opacity = "1";
    } else {
        document.querySelector(".scroll").style.opacity = "0";
    }
})

// form event
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener('click', (e) => {
    console.log(e);
})

input.addEventListener('keydown', function (e) {
    // console.log(e);
    // console.log(e.code);
    // console.log(e.key);
    if (e.code === "ArrowUp") {
        console.log("up!!!")
    } else if (e.code === "ArrowRight") {
        console.log("right@@@")
    } else if (e.code === "ArrowLeft") {
        console.log("left");
    } else if (e.code === "ArrowDown") {
        console.log("Dowunn")
    } else if (e.code === "Enter") {
        console.log("enter!!!")
    } else {
        console.log("others@@@")
    }


})

// form 
const todoForm = document.querySelector("#todo-form"); //form태그 선택
const todos = document.querySelector(".todos"); //ul 태그 선택

todoForm.addEventListener("submit", function (e) {
    e.preventDefault(); //자동 새로고침을 막아주는 함수

    console.log("submit");
    const todoInput = document.querySelector("input[name=todo]");
    console.log(todoInput.value); //input 태그 안에 작성되는 문자
    const todo = todoInput.value;

    const newTodo = document.createElement("li"); //새로운 li 생성
    newTodo.append(todo); //생성된 li에 todoInput.value 값 붙혀주기
    todos.append(newTodo); //ul에 밸류값을 넣어 준 li 붙혀주기

    todoInput.value = ""; //add 후 밸류값 초기화 해주기!!(input 초기화라 생각하면 됨)
})


const changeInput = document.querySelector("#change-input");
changeInput.addEventListener('change', function () {
    console.log('change??'); //다른데로 포커스가 가면 생성
});

changeInput.addEventListener('input', () => {
    console.log("changing!!!") //input에 입력할 때 생성
    const div = document.querySelector(".intro");
    div.textContent = this.value;
})