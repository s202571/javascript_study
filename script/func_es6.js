const btn = document.querySelector('#btn')
console.log(btn)

btn.addEventListener('click', function(){
    console.log(this)
    console.log(this.type)
    console.log(this.id)
    this.style = 'background:yellow'
    this.style.border = '1px solid red'
    this.innerText = '클릭'
})

//객체, 변수 선언과 this
const ob = [{
    w:50,
    h:100,
    func:function(){
        return `w:${this.w}, h:${this.h}`
    }
},{
    w:80,
    h:40,
    func:function(){
        return `w+h = ${this.w+this.h}`
    }
}]
console.log(ob)
console.log(ob[0])
console.log(ob[0].w)
console.log(ob[0].func)
console.log(ob[0].func())
console.log(ob[1].func())
console.log('==========================')
//ES6 화살표 함수
//======화살표 함수 before
function japangi(){
    return '음료수 출력'
}
console.log(japangi())
//======화살표 함수 after
const japangi_v2 = () =>{
    return '음료수 v2'
}
console.log(japangi_v2())
// function 생략
//기존함수 : function 함수명(){ 함수 실행 값 }
// const 익명 함수 = () => { 함수 실행 값 }
// DOM.addEventListener('이벤트', ()=>{ 함수 실행 값 })
btn.addEventListener('mouseover',()=>{
    console.log('over')
    btn.style.color = 'red'
    // this를 인식 못함 function으로 써야한다
    // 더 간편하게 쓸려면 화살표 함수로
})

const bab = (target) => {
    return target+'밥'
}
console.log(bab('콩'))
console.log(bab('쌀'))
console.log(bab('국'))