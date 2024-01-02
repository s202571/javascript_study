//DOM의 부모잡기 : proentNode, parentElement
const aNode = document.querySelectorAll('nav > a')
console.log(aNode, aNode[0], aNode[1])
console.log(aNode[0].parentNode) // nav
console.log(aNode[1].parentNode) // nav
console.log(aNode[0].parentElement) // nav
console.log(aNode[1].parentElement) //nav
console.log(aNode[1].parentElement.parentElement)//header
console.log(aNode[1].parentNode.parentElement)//header
//--------------javascript에서 CSS 동적 설정
//객체 속성(css) 이벤트 메서드
//자바스크립트에서 css를 적용할 땐 인라인 스타일로 적용된다
//인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로
//기존 .css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선 적용된다
aNode[0].parentNode.style = 'background-color:yellow';
aNode[0].parentNode.style = 'transform:skewX(20deg)'
// 객체.객체.속성 = '속성:값; 속성:값; 속성:값;
// aNode[1].parentNode.style.backgroundColor = 'aqua'; //한가지 하나만
// aNode[1].parentNode.style.border = '3px solid blue';
// // 객체.겍체.속성.속성 = '값';
// aNode[1].parentElement.style.transform = 'rotate(10deg)'
aNode[0].addEventListener('mouseover', function(){
    //nav 배경색 노랑
    aNode[0].parentNode.style = 'background-color:yellow;';
    //header 배경색 하늘
    aNode[0].parentNode.parentNode.style.backgroundColor = 'skyblue';
})
//aNode에서 마우스 나갔을 때 배경색 제거하기(none)
aNode[0].addEventListener('mouseout', function(){
    aNode[0].parentNode.style.background = 'none';
    aNode[0].parentNode.parentNode.style.background = 'none';
})