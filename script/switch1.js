// if 조건문
// if문만 사용하는 경우ㅜ -> 실행결과가 참인 경우
// if-else 문 -> 실행결과가 참과 거짓인 경우
// if-elseif 문 -> 조건식2개로 참 실행결과 보여줄 때
// if-elseif-else -> 조건식2개로 참 실행결과 보여주고 모두 거짓인 결과 보여줄 때
// if == 조건대산의 값, 비교 연산자, 논리연산자 등의 대상이 넓을 경우
// switch == 조건 대상이 1개고 그 1개의 값을 많이 비교해야 할 때
/* 
    switch(대상){
        case 값1:실행문;
        break;
        case 값2:실행문
        break;
        default:실행문;
    }
*/
let a = 20
switch(a){
    case 1:console.log('a는 1이다');
    break;
    case 5:console.log('a는 5이다');
    break;
    case 10:console.log('a는 10이다');
    break;
    default:console.log('해당되지 않음')
}
// ==================================================
if(a==1){
    console.log('a는 1이다')
}else if(a==5){
    console.log('a는 5이다')
}else if(a == 10){
    console.log('a는 10이다')
}else{
    console.log('해당되지 않음')
}
// ==================================================
// 딸기 1000원, 수박 5000원, 오렌지 2000원 그 외 상품 없음
/* const order = prompt('주문하세요', '주문상품입력')
switch(order){
    case '딸기':console.log('1000원');
    break;
    case '수박':console.log('5000원');
    break;
    case '오렌지':console.log('2000원')
    break;
    default:cosole.log('상품 없음')
} */
const num1 = Number(prompt('첫번째 수 입력'))
const num2 = Number(prompt('두번째 수 입력'))
const op = prompt('+,-,*,/,%중 하나를 입력하세요')
let total = 0
switch(op){
    case '+':total = num1+num2; break;
    case '-':total = num1-num2; break;
    case '*':total = num1*num2; break;
    case '/':total = num1/num2; break;
    case '%':total = num1%num2; break;
    default: total = '잘못 된 계산식입니다'
}
alert(total)