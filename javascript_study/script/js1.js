//객체는 반드시 변수에 저장하고 진행해야한다!!
let a = 10;
let b = '10';
let c = 1;

a= b+c; //101
a+= a // 101101

b = c //1 
a += b // 1011011

b = a+b+c//101101111

const array = [1,2,3,4,5]

c=c+array[2]//4

const x = 10;
const y =5;

function ca(){
    console.log(c+array[4]+array[0]) //10
}

// 1. 함수생성
function xy(){
    console.log(x+(y-1))//14
    ca()
}
// 2. 함수호출(그 자체의 생성 밖에서 호출 해야한다)
xy()

const cart = {
    img:'./img/model.jpg', 
    sale:'50% OFF',
    name:'Crop top',
    fit_size:'Body Fit',
    color:['Mineral Black','Chocolate Brown'],
    size:['xs','s','m','l','xl','xxl'],
    price:27.50,
    price_original:55,
    num:1
}
console.log(cart)
console.log(cart.name)
console.log(cart.color[0])
/* 
자바스크립트에서 사용하는 괄호 개념
1. () : 매서드. 연산자 우선순위, 배열 빈공간, 함수
    메서드 : 객체.메서드()
    연산자 : 1+(1-2)
    배열 빈공간 : new Array(2) 값이 하나 일 때 빈공간으로 인식
    배열 선언 : new Array(1,2)
    함수 : funtion() // 생성하고 호출을 따로 해야 함
2. {} : 함수실행값, 객체 선언 
    함수실행값 : funtion(){실행}
    객체선언 : let object = { 속성:값, 속성:[값1, 값2, 값3], }
3. [] : 배열생성, 배열 인덱스호출, 불러온 DOM 객체가 2개 이상일 때 인덱스호출용
    배열생성 : let 변수명 = [배열값, 배열값,]
    배열인덱스호출 : 변수명[인덱스]
    DOM : (2개 이상의 DOM 선언 후) DOM변수면[인덱스]
*/