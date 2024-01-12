// 1. 'admin' 아이디만 접근 할 수 있는 페이지
let userId = 'admin'
if(userId == 'admin'){
    console.log('관리자님 어서오세요')
}
//2. 'admin' 아이디 '1234' 비밀번호인 관리자만 접근 할 수 있는 페이지
let userPw = '1234'
if(userId =='admin' && userPw == '1234'){
    console.log('관리자님 어서오세요')
}
// 3. 사용자의 아이디를 입력 받고 admin이 아니면 '일반 회원입니다' 출력
/* const userIdInput = prompt('아이디를 입력하세요')
if(userIdInput != 'admin'){
    console.log('일반 회원입니다')
} */
//4. 사용자가 입력한 숫자 값에 따라 홀짝 구분해서 짝수일 경우 출력하기
/* const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
if(userNum%2 == 0 ){
    console.log('짝수!')
}
if(userNum%2){
    console.log('홀수!')
} */
/* if(true){
    // 무조건 살행
} */
//5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승 불가!
/* const userAge = prompt('몇살 이십니까?')
if(userAge <= 10){
    window.alert('탑승불가')
} */
//6. 10살 이상이면서 키가 120이상인 애만 탈 수 있는 놀이기구
// 나이와 키를 물어보고 조건이 맞은면 '탑승가능'
/* const userAge = prompt('몇살?')
const userheight = prompt('키?')
if(userAge >= 10 && userheight >= 120){
    alert('탑승가능')
}
 */
const printBtn = document.querySelector('#printBtn')
console.log(printBtn)
// printBtn.addEventListener('click', function(){})
printBtn.addEventListener('click',()=>{
    let printQ = confirm('인쇄할까요?')
    if(printQ){ print() }
})

//최소 구매수량 1, 최대 구매수량 10
// 10개 이상 구매하려고 하면 '최대 구매수량입니다'
const numInput = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const total_price = document.querySelector('.price')
let num = 1
let total = 0
let price = 1000
console.log(numInput,plusBtn,minusBtn,price)

// 초기 수량 1 설정
numInput.value = num
// 버튼 클릭 시 수량 최개 10까지 증가
plusBtn.addEventListener('click', ()=> {
    if(num < 10){
        num++
        numInput.value = num
        total=num*price
        total_price.innerHTML=total.toLocaleString('ko-kr')+'원'
    }
    // 수량이 10개 됐을 때 버튼능 또 누를 때 실행 메세지
    if(num === 10){
        alert('최대 구매 수량 입니다')
    }
    console.log('if밖', num)
    
})
minusBtn.addEventListener('click', ()=>{
    if(num > 1){
        num--
        numInput.value = num
        total=num*price
        total_price.innerHTML=total.toLocaleString('ko-kr')+'원'
    }
})
