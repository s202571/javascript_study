//이항연산자
let x = 5;
let y = x+10;
console.log(`x=${x}, y=${y}`)//5 15

//목표) 이항연산자 피연산자를 2개 적고 "=" 버튼을 클릭하면 결과 값 출력하기
// 1. 변수선언 (val1, val2, calc1Btn, result)
// 2. calcBtn 클릭 이벤트
// 2-1. val1, val2 값 가져오기
// 2-2. 위 값 더하기
// 2-3. result 잡기
// 2-4. 위 대상 결과 출력
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const calcBtn = document.querySelector('#calc1Btn')
const result = document.querySelector('.result')
let total = 0;
console.log(val1,val2,calcBtn,result)
calcBtn.addEventListener('click', function(){
    total = Number(val1.value)+Number(val2.value)
    console.log(total)
    result.innerHTML = total.toLocaleString('ko-kr')
})
console.log('------------------')
console.log(6/2) //3
console.log(6%2) //0

const num1 = 10;
let num2 = 3;
let total1 = num1 % num2 //나머지 연산의 결괴는 0, 1 (홀 짝 구분)


/* console.log(total1)
console.log('----------------')
let a = 5;
let b = --a;
// a++ 6 5
// ++a 6 6
// a-- 4 5
// --a 4 4

console.log(`a=${a}, b=${b}`)// 6 5 */
let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d) // 결과 : 10 20 30 40
a++
b--
c++
d--
console.log(a,b,c,d)// 결과 : 11 19 31 39
a = ++b
b = a++
console.log(a,b,c,d)// 결과 : 21 20 31 39
c = a+b
d = ++c
console.log(a,b,c,d)// 결과 : 21 20 42 42
a = ++c + 10
b = --d + 1
console.log(a,b,c,d)// 결과 : 53 42 43 41