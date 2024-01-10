/* //Q. 콜라만 나오는 자판기
function japangi(){
    console.log('콜라')
}
function japangi2(){
    console.log('사이다')
}
japangi()
japangi()
japangi2() */

// 필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){//drink 매개변수 생성 let drink
    console.log(drink)
}
japangi('콜라')
japangi('사이다')
japangi('커피')
japangi('탄산수')

function japangi_v2(drink, num){
    console.log(drink+num+'개 나왔습니다')
}
japangi_v2('탄산수',2)
japangi_v2('콜라',10)

console.log('-----------------')

//Q. 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기
function calc1(num, number){
    console.log(num+number)
    console.log(`${num}+${number} = ${num+number}`)
}
calc1(7,5)
calc1(9,4)
//Q. 피연산자 2개와 산술연산자를 설정해서 자유로운 계산이 가능한 함수 만들기
let result
function calc2(num1, num2, oper){
    result = oper=='*' ? num1*num2 : null
    console.log(`${num1} ${oper} ${num2} = ${result}`)
}
calc2(8,5,'*')
console.log('-----------------------')
//함수의 데이터 값 반환 return
let total = 0
function func1(num){
    total = num+1
    return total
} //return을 쓰면 함수 밖으로 나가기 때문에 밑에 쓰면 데이터를 안읽는다
console.log(func1(5))
window.alert(func1(10))
