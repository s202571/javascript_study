const main_title = document.getElementById('main_title')
const sub_title = document.getElementById('sub_tltie')
const list_wrap = document.getElementById('list_wrap')
console.log(main_title, sub_title, list_wrap)
//Q. container
const container = document.getElementById('container')
console.log(container)
//Q. container-title
const title = document.getElementById('title');
console.log(title)
//Q. container-contents
const contents = document.getElementById('contents')
console.log(contents)
//Q. container-title-a
const title_a = title.getElementsByTagName('a')
console.log(title_a[0])
console.log(title_a[1])
//Q. container-contents-a
const contents_a = contents.getElementsByTagName('a')
console.log(contents_a[0])
console.log(contents_a[1])
//아이디는 하나 여서 굳이 부모 안적어도 됨 -> 부모적으면 오히려 오류가 남 