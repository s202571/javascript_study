// 24/1/3 자식노드 제어하기
// childNodes, children, childElementCount
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
console.log(header,main,footer)
// 변수 정상 작동 확인
// 빨강 error, undefined, null 출력 없이 올바른 Node 출력이 되는지!
const headerText =header.childNodes;

console.log(header.childNodes); // 텍스트노드 인덱스 출력
console.log(header.childNodes[0]) // header
console.log(header.childNodes[0].data); //header
console.log(header.childNodes[0].length); // 6글자 수
console.log(header.childNodes[0].baseURI); //경로
console.log(headerText[0])

//main, footer
const mainText = main.childNodes;
console.log(main.childNodes[0])
console.log(main.childNodes[0].data)
console.log(main.childNodes[0].length)
console.log(mainText[0].baseURI)
const footerTxet = footer.childNodes