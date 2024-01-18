const target = document.querySelector('.target')
const ul = document.createElement('ul')//태그생성
let li = document.createElement('li')
const target2 = document.querySelector('.target2')
let dt = document.createElement('dt')
let dd = document.createElement('dd')
console.log(target, ul, target2)

for(let i=0; i<3; i++){
    li = document.createElement('li')
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품${j+1}</span> `
    }
    console.log(li)
    ul.appendChild(li)
}
target.appendChild(ul)
console.log(target)
// target - ul - <li> <span>상품</span>*2 - </li>
/* dt.innerHTML = '정의형제목'
target2.appendChild(dt)
for(let i=0; i<2; i++){
    dd = document.createElement('dd')
    dd.innerHTML = '정의형내용'
    target2.appendChild(dd)
}
console.log(target2) */
for(let i=0; i<2; i++){
    dt = document.createElement('dt')
    dt.innerHTML = `정의형 제목${i+1}`
    target2.appendChild(dt)
    for(let j=0; j<2; j++){
        dd = document.createElement('dd')
        dd.innerHTML = `정의형 내용${j+1}`
        target2.appendChild(dd)
    }
}
console.log(target2)