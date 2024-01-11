// 함수 매개변수와 리턴
// 매개변수 : 함수 내 변경데이터가 있을 경우 함수 호출 시 변경 인수값을 매개변수에 전달하기 위해서
//리턴 : 실행결과가 매번 다른 경우 데이터 값만 함수 외부로 반환할 때
// 리턴의 주의사항 : 리턴을 만나면 함수가 종료된다. 리턴 아래 스크립트를 읽지 못한다
const den99DOM = document.querySelector('.den99')
console.log(den99DOM)
let result = ''
function den99(num){
    result += `${num}X1=${num*1}<br>`
    result += `${num}X2=${num*2}<br>`
    result += `${num}X3=${num*3}<br>`
    result += `${num}X4=${num*4}<br>`
    result += `${num}X5=${num*5}<br>`
    result += `${num}X6=${num*6}<br>`
    result += `${num}X7=${num*7}<br>`
    result += `${num}X8=${num*8}<br>`
    result += `${num}X9=${num*9}<br>`
    result += `<hr>`
    return result
}
den99DOM.innerHTML = den99(2)
den99DOM.innerHTML = den99(3)
den99DOM.innerHTML = den99(4)
den99DOM.innerHTML = den99(5)
den99DOM.innerHTML = den99(6)
den99DOM.innerHTML = den99(7)
den99DOM.innerHTML = den99(8)
den99DOM.innerHTML = den99(9)
//---------------------------------------
let deposit_pay
const depositBtn = document.querySelector('#depositBtn')
let total = 10000;
let total_message = '';
function deposit_fun(){
    //1. 총 잔액 + 입금액
    //2. 입금액과 총 잔액을 대입받는 변수
    total += deposit_pay;
    total_message = `${deposit_pay.toLocaleString('ko-kr')}원 입금하셨습니다. 총 잔액은 ${total.toLocaleString('ko-kr')}원 입니다`
    return total_message//1,2 변수 값 return
}
depositBtn.addEventListener('click', function(){
    deposit_pay = Number(prompt('입금 금액을 입력하세요'))
    window.alert(deposit_fun())
})
//Q. (기존 잔액:10,000원) prompt 입금액을 입력하고 버튼을 클릭하면 deposit_fun 함수가 호출되서 0000원 입금하셨습니다. 총 잔액은 0000원 입니다. 팝업으로 출력하기