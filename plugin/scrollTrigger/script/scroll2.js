const bg_h2 = document.querySelector('.bg h2')
const bg_h3 = document.querySelectorAll('.bg h3')
const bg_p = document.querySelectorAll('.bg p')
const bg = document.querySelectorAll('.bg')
console.log(bg_h2,bg_h3,bg_p)
for(let i of bg_h3){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:i.parentNode,
        opacity:1,
        duration:1,
        translateY:0,
    })
}
for(let i of bg_p){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:i.parentNode,
        opacity:1,
        duration:1,
        translateY:0,
        delay:1,
    })
}
gsap.fromTo(bg_h2,{
    opacity:0,
    scaleX:1.2,
},{
    scrollTrigger:bg_h2.parentNode,
    opacity:1,
    duration:1,
    scaleX:1,
    delay:1,
})
for(let i of bg){
    ScrollTrigger.create({
        trigger:i,
        onEnter:()=>i.classList.add('bg_scal')
    })
}
