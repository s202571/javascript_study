// 1. window.scrollTo(x, y) 지정된 x, y좌표로 스크롤 이동 함수
// window.scollTo(0,200)

// window.onload : body 리소스를 모두 읽고 onload 함수 실행
// 파일이 많으면 느려질 수도.. 
/* window.onload = () => {
    console.log('.')
    window.scrollTo(0,200)
} */

// 리소스 로드를 기다리지 않고 바로 함수 실행
document.addEventListener('DOMContentLoaded',()=>{
    console.log('..')
    setTimeout(()=>{
        window.scroll(0,200)
    },0)
})

const btn = document.querySelector('#btn')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const bg = document.querySelectorAll('.bg')
console.log(btn)

btn.addEventListener('click', ()=>{
    // window.scrollTo(0,1000)
    // window.scrollTo({left:0, top:1000})
    // window.scrollBy(0, 200)
    window.scrollTo({left:0, top:bg[2].offsetTop})
})


console.log(prev,next)

// bg1.style = 'scroll-behavir:smooth'; // 스크롤 애니메이션

next.addEventListener('click', ()=>{
    bg[0].scrollBy(1400,0)
})
prev.addEventListener('click', ()=>{
    bg[0].scrollBy(-1400,0)
})
