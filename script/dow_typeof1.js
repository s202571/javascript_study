/* let price = 1000
let num = Number(window.prompt('구입수량은?','숫자만 입력하세요'))
console.log(`구입수량은 ${num}개 입니다`)
console.log(`구입수량에 +1 이벤트행사중 총 수량은${num+1}입니다`)
console.log(`총 가격은 ${price*num}원입니다`) */
//NaN == Not a Number 숫자가 아니다


/* let num = window.prompt('구입수량은?','')
console.log(`구입수량은 ${num}개 입니다`)
console.log(`구입수량에 +1 이벤트행사중 총 수량은${Number(num)+1}입니다`) */

//변수 만들기
const textInput = document.querySelector('#text')
const numberInput = document.querySelector('#number')
const resultBtn = document.querySelector('#btn')
console.log(textInput,numberInput,resultBtn)
//함수 만들기
function func1(){
    console.log('test')
    console.log(textInput.value)
    console.log(numberInput.value)

    console.log(typeof textInput)
    console.log(typeof textInput.value)

    console.log(typeof numberInput)
    console.log(typeof numberInput.value)
    console.log(Number(number.value)+1)

    let result = Number(numberInput.value)//자동으로 숫자 만들기
    console.log(typeof result)
    console.log(result+1)
}// value HTML에 없어도 자동으로 인식