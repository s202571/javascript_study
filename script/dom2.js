const titleCls = document.getElementsByClassName('title')
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1])
const listCls = document.getElementsByClassName('list')
console.log(listCls)
//list 클래스를 가지고 있는 li만 인식하는 변수
const ulTag = document.getElementsByTagName('ul')[0];
const listClsLi = ulTag.getElementsByClassName('list')
console.log(listClsLi)