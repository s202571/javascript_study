/* //함수 스코프
//지역변수와 전역변수
let b =20
let c =30
let a =''
scope1() // 함수 호출 위치는 생성 위차와 관계없다
function scope1(){
    a += 10
    console.log(a,b,c)
}
console.log(a+b+c) //함수 호출전 : undefined+20+30
scope1() // 함수 호출 위치는 생성 위차와 관계없다 */

//함수 스코프 연습
let x = 1
let y
function func1(){
    y = 5
    console.log(x+y)
}
function func2(){
    let z =10
    func1()
    console.log(x+y+z) //error
}
func2()
console.log('-------------------')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
console.log(btn)

// btn.addEventListener('click', function(){
//     console.log('결과 테스트')
// })

function testFunc(){
    console.log('결과테스트')
}
btn.addEventListener('click',testFunc)
btn2.addEventListener('click', testFunc)

//이벤트 함수 개별선언 연습
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const num_total = document.querySelector('#num')
let price_total = document.querySelector('.price')
let price = 4000;
let num = 1;
let total;
console.log(minusBtn,plusBtn,num_total,price_total)
function minus(){
    --num;
    num_total.value = num
    total = num*price
    price_total.innerHTML = total.toLocaleString('ko-kr')+'원'
}
function plus(){
    ++num;
    num_total.value = num
    total = num*price
    price_total.innerHTML = total.toLocaleString('ko-kr')+'원'
}
function minusFunc(){
    num > 1 ? num-- : alert('최소 구매 수량입니다')
    num_total.value = num
    price_total.innerText =(price*num).toLocaleString('ko-kr')+'원';
}
function plusFunc(){
    num < 10 ? num++ : alert('최대 구매 수량입니다')
    num_total.value = num
    price_total.innerText = (total*num).toLocaleString('ko-kr')+'원';
}
minusBtn.addEventListener('click', minus)
plusBtn.addEventListener('click', plus)
// minusBtn.addEventListener('click', minusFunc)
// plusBtn.addEventListener('click', minusFunc)