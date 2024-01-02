//문자열 변환 메서드
let price = 100000000000000
// 계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString() 사용한다
// console.log(price.toLocaleString('ko-kr'))
// HTMLNode.value = price.totalcaleString('ko-kr')
const bank_total = document.querySelector('#bank_total')
const bank_input = document.querySelector('#bank_input') 
const bank_btn = document.querySelector('#bank_btn')
console.log(bank_input, bank_total, bank_btn)
let total = 10000;
bank_total.value = total.toLocaleString('kr-ko')
bank_btn.addEventListener('click', function(){
    let input_total = Number(bank_input.value) + 100;
    total += input_total
    bank_total.value = total.toLocaleString('kr-ko')
    bank_input.value = "" ;
})