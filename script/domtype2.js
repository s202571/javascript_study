const numInput = document.querySelector('#num')
const numAdd = document.querySelector('#numBtn')
console.log(num,numBtn)
function plus() {
    // console.log(num.value)//값출력 확인
    // console.log(num.value+1)//더하기 출력 확인 X -> 문제 확인
    // console.log(typeof num.value+1)//문제해결하기 위한 데이터 확인 -> number 
    // console.log(Number(num.value)+1)// 더하기 확인
    // num.value = Number(num.value)+1 //출력 대상 바꿔서 학인
    let result = Number(num.value)
    num.value =result +1
}