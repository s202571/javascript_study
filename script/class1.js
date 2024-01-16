const li = document.querySelectorAll('.list li')
const btn = document.querySelector('#desing_add')
const onoff =document.querySelector('#onoff')
console.log(li, btn, onoff)
// inline style 적용되는 js css 명령어 활용
// 우선 순위가 가장 높아 다른 css 충돌없이 우선 적용 할 수 있으나 css 속성이 여러개라면 개별 명령을 해야해서 작성이 불편하고 효율이 안좋다
li[0].style.backgroundColor = 'yellow'
li[0].style.borderTop = '2px solid red'
li[0].style.color = 'red'
console.log(li[0])
// 제한없이 다양한 css 속성을 가지고 있는 class를 생성해서 DOM에 적용하기

//  대입하면 전에 것은 삭제 되니 복합 대입으로 작성하고 뒤에는 공백을 줘야 두 개의 클래스 네임을 가지게 되어 공백을 줘야한다
// ex) 공백X = desing_set1desing_set2
// ex) 공백O = desing_set1 desing_set2
// li[1].className = 'desing_set1'
// li[1].className += ' desing_set2'

li[1].classList.add('desing_set1', 'desing_set2')
// 지우기
li[1].classList.remove('desing_set1', 'desing_set2')

// 버튼 class 제어
// 버튼 껐다 켰다 가능
btn.addEventListener('click', ()=>{
    li[2].classList.toggle('desing_set1')
})
onoff.addEventListener('click', ()=>{
    li[0].classList.toggle('showhide')
})
// dising_set1을 desing_set2로 변경
// dising_set1 없으면 안변함
li[2].addEventListener('click', function(){
    this.classList.replace('desing_set1', 'desing_set2')
})
li[5].classList.add('desing_set1')
let boolean = ''
li[5].addEventListener('click', ()=>{
    boolean = li[5].classList.contains('desing_set2')
    console.log(boolean)
    if(boolean){
        alert('존재한다')
    }else{
        alert('존재하지않는다')
    }
})