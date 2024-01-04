//아이디 찾기- 인증번호 받기
/* 
    Q. 인증번호 받기 클릭 시 버튼 다음 형제 위치에 "인증번호가 발송되었습니다" 출력하기
*/
const id_search = document.querySelector('#id_search')
const id_send_message = document.createElement('span')
const authentication_btn = document.querySelector('#authentication_btn')
id_send_message.innerText = '인증번호가 발송되었습니다';
console.log(id_search,id_send_message,authentication_btn)

authentication_btn.addEventListener('click', function(){
    id_search.querySelector('form').appendChild(id_send_message)
    // id_search.insertBefore(id_send_message, id_search.firstElementChild)
})
//객체.appendChild() 마지막 자식 노드 추가
//객체.insertBefore(삽입노드, 기존 시작자식 노드) 첫번째 자식 노드 추가
//부모.insertBefore(삽입, 부모.firstChild)

/* Q. 인증번호입력칸 #authentication_input 값을 입력하묜 form의 이전 형제 위치에 "인증번호가 틀렸습니다" 출력하기 */
const authentication_input = document.querySelector('#authentication_input')
const message_error = document.createElement('p')
const frm = document.querySelector('#id_search')
console.log(authentication_input, message_error)

message_error.innerText = '인증번호가 틀렸습니다';

authentication_input.addEventListener('blur', function(){
    frm.insertBefore(message_error,frm.firstElementChild)
})