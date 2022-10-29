console.log(document)
console.log(document.head)
console.log(document.title)
console.log(document.body)
console.log(document.URL)
console.log(document.domain)

// getElementById("") : id 선택자
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// getElementByClassName("") : class선택자
console.log(document.getElementsByClassName("pink"))
console.log(document.getElementsByClassName("others"))

// getElementByTagName("") : 태그네임 가져옴
console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("input"))

// getElementByName("")
console.log(document.getElementsByName("id"))

// querySelector
console.log(document.querySelector(".pink")) //첫번째 .pink만 가지고옴
console.log(document.querySelector("#green"))
console.log(document.querySelector("[name='id']"))

// querySelectorAll
console.log(document.querySelectorAll("div"))
console.log(document.querySelectorAll("input"))
console.log(document.querySelectorAll("div")[2])

// ex) pink 하나하나 클래스 출력하기
let pinks = document.querySelectorAll(".pink") //변수에 pink 담아주기!
for (let pink of pinks) {
    console.log(pink)
}