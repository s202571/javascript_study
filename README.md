# javascript
## 프로그래밍 언어

소프트웨어의 동작(알코리즘)을 설명하기 위한 언어

프로그래밍 언어로 프로그램을 개발하는 것 → **프로그래밍**

프로그래밍 언어로 작성한 프로그램 → **소스코드 or 코드**

소스코드를 살행 전 기계어로 번역하는 것 → 컴파일

컴파일을 수행하는 소프트웨어 → 컴파일러

ex) c C++, JAVA 등

프로그램을 한 줄마다 기계어로 번역 → 인터프리터언어 JavaScript

# 프로그래밍 언어 유형

- 절차를 순서대로 작성해 나가는 **절차적 언어**
- 데이터와 절차를 묶어 객체 단위로 관리하는 **객체 지향 언어** (javascript)
- 프로그램 함수를 조합하여 구현해 나가는 **함수형 언어**
- 데이터 사이를 관계와 논리를 설명해 가는 **논리형 언어**

절차적 + 객체지향언어

1. 목표 설정
2. 흐름도 만들기
3. 각 단계를 코드로 표현

객체, 속성, 메소드, 이벤트

## object(객체)

사용자가 컨트롤 할 수 있는 객체 대상

ex) 버튼, 링크, 텍스트 박스 (태그, 클래스, 아이디)

## property(속성)

객체가 가지는 속성

ex) 클래스, 아이디, 색상 등 

## Event(이벤트)

인터넷 브라우저에서 발생할 수 있는 사건

더블클릭, 키보드 입력, 마우스 이동, 클릭, 드래그 등

## Method(메소드)

객체의 실행

확인 삭제 취소 이동 애니메이션 등

## javascript (ECMAScript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`, `<body>` 내에 `<script>` 작성 가능
* 내부 스크립트 `<script>...</script>`
* 외부 스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`,`async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수 생성 키워드 종류
1. `ver` : 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다
3. `const` : 삼수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 `x + '1'`
3. `+=`: 복합대입연산자 `x += y` -> `x=x+y`
---------------------
## 원시타입
* 데이터를 구성하는 가장 기본적 타입
## 객체타입
* 참조 타입에 따라 할당되는 데이터 타입
## 숫자데이터
* 수학연산, 비교연산, 조건문, 반복문 등 많은 정밀도 계산에 활용
* 음수, 소수점 사용가능
## 문자데이터
* 전세계 사용 문자 대부분 표현가능함
* 작은 따음표(’’) 큰따음표(””) 문자열의 앞 뒤에 붙여서 사용
* `"3.14"` 숫자도 따음표에 묶으면 문자형임
* `“ ”`(빈문자열)
## 숫자 VS 문자
* 숫자와 문자가 같이 쓰이면 문자로 인식됨
## 특수데이터
* `값이 없음` `null`
* `정의되지 않음` `undefined`
* undefined(정의하지 않음) null(값이 존재하지않는다, 비어있다)
* g = `0`;    `초기화한다`
* g = `null`; `존재하는 변수 값을 제거해야할 때`
## 템플릿 문자열
* 백틱기호를(`)로 묶으며 ${}를 이용한 식으로 문자열을 간편하게 쓰는 기법
## 배열
* 2개의 데이터 값을 저장하는 방법
1. let변수명 = `[배열,배열,배열];`
2. let변수명 = `new Array(배열,배열,배열)`
3. let변수명 = `new Array() // 빈좌석`
* `배열의 인덱스(자바스크립트 데이터 순서)는 0부터 시작한다`
* `배열의 length(문자열 개수)는 1부터 시작한다`
* 호출 인덱스 = console.log`(변수명[배열의 인덱스]);`
## 배열값 추가 및 삭제
`끝에 추가 = push`
`앞에 추가 = unspift`
`끝에 제거 = pop`
`앞에 제거 = spift`
##  빈좌석 채우기
1. `빈좌석 만들어주고 채우기`
* new Array(8)
* 변수명[배열의 인덱스] = 'A1'
2. ` 아예없는 빈좌석 만들기`
*  new Array();
## object 객체
* `데이터 저장소 = 변수(한번에 한가지 값), 배열(2개 이상의 값)`
* `특정값에 해당되는 속성을 추가해서 데이터 관리를 용이`
1. 변수키워드 객체명 = {
    속성:값, <!-- , 무조건 사용하기 -->
    속성:[배열1, 배열2],
    속성:함수,
}
* `delete = 객체 속성 제거`
* `객체속성명 =  객체 속성 추가(변경동일)`
# BOM
* window = bom
1. `window.alert()` `경고 대화 상자`
2. `window.prompt()` `문자열 입력 받는 대화 상자`
3. `window.confirm()` `확인 취소, 버튼이 있는 대화 상자`
4. `window.print();` `프린트 하는 창이 나옴`
5. `window.location` `문서의 URL를 관리하는 Location 객체속성`
6. `window.document` `현재 창의 문서(document)읽기, 쓰기, 수정`
* window.document.write("테스트 문구")
7. `window.open(url, target, features)` `새로운 창`
* window.open('https://google.com','_blank');
# DOM
## getElemntsByTagName
* 지정된 태그 이름을 가진 모든 HTML 요소를 찾아 HTMl 노드로 반환합니다.
* HTML에 TagNode가 2개 이상 일 때 그중 `1개만` 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 `변수 지정 시 [index] 설정하고 대입하기`
* ex)
const ulTag = document.getElementsByTagName('ul')[0];
console.log(ulTag);
---------------------------------
* HTML에 TagNode가 2개 이상 일 때 그 중 `여러개`에 동적인 기능이 적용되어 DOM이 된다면 `변수 지정시에는 [index] 없이 대입`하고 `해당 DOM 변수 호출 시 필요한 경우[index] 사용하기`
* ex)
const liTag = ulTag.getElementsByTagName('li')
console.log(liTag[0]);
console.log(liTag[1]);
console.log(liTag[2]);
* ☆★ 대입이랑 호출이랑 같이 사용 하면 절대 안됨
오류로 안 떠서 찾기 힘듬
## DOM Node 변수 지정 시
* HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 `실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할 떄는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야 한다.[index]`
## getElementsByClassName
* 지정된 클래스 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다
* (document 부분에)부모가 있으면 부모를 적어줌(Tag도 포함되는 내용)
* 단 document가 한번에 되는 내용이면 document를 사용함
## getElementByID
* 지정된 아이디 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다
* Tag, Class와 다르게 Elements에 s가 안붙고 Name이 없음
* 아이디는 하나라서 굳이 부모 안적어도 됨 -> 부모적으면 오히려 오류가 남 
## querySelector
* 지정된 아이디, 클래스, 태그 이름을 가진 첫 번째 HTML 요소를 찾아 HTML 노드로 반환합니다
## querySelectorAll
* 여러개의 Node List를 반환할 수 있고 첫번째 Node List를 반환할 수 도 있습니다
##
객체.속성.메서드()
객체.메서드()
메서드(객체.속성)
메서드(객체.메서드)
메서드(객체.속성.메서드)

안되는것
객체.매서드().매서드()
객체.매서드().속성
## 형변환
1. 명시적 형변환(개발자가 직접 데이터타입을 결정)
2. 암시적 형변환(자바스크립트가 개발자 동의없이 자동으로 형변환)
* prompt 받는 데이터 값은 무조건 문자열로 처리된다
* NaN == Not a Number 숫자가 아니다
* 문자를 숫자로 바꾸는 방법
1. 입력에 바꾸기
* ex) let num = Number(window.prompt('구입수량은?',''))
2. 출력에 바꾸기
* ex) console.log(`구입수량에 +1 이벤트행사중 총 수량은${Number(num)+1}입니다`) */
## value
* form 태그에 삽입되는 값 속성(input, option, seiect, button, textarea)
* form 태그 내에 작성 했었을 땐 미리 입력된 값 표현 가능
* javascript의 DOM속성 `ex)DOM.value` 로 처리 했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력되는 신규 값까지 모두 인식 할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등...
* 주의사항 -> value속성은 form전용이므로 다른 태그일 때 해당 값을 알고 싶다면 다른 속성 및 매서드를 사용해야한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()` 메서드를 활용해 (Number) 데이터탑입으로 변환 해야한다. ex `Number(객체.value())`
## 이벤트 리스너

## toLocaleString('ko-kr')
* 한국 3자리마다 , 만들어 줌
* 계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString() 사용한다
## javascript에서 CSS 동적 설정
* 객체 속성(css) 이벤트 메서드
* 자바스크립트에서 css를 적용할 땐 인라인 스타일로 적용된다
* 인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로
* 기존 .css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선 적용된다
* 객체.객체.속성 = '속성:값; 속성:값; 속성:값;
* aNode[1].parentNode.style.backgroundColor = 'aqua'; //한가지 하나만
* 객체.겍체.속성.속성 = '값';
## DOM  관계속성
1. parentNode 부모 노드, parentElement 부모요소
   - parentNode.parentNode 연속 사용 (부모의 부모 잡기)
   - 자식 또는 자식노드.parentElement (특정 자시의 부모 잡기)
2. javascript에서 css 제어하기 -> style 속성
    - DOM.관계.style = "속성:값; 속성:값; 속성:값;";
        * (위) style 2번 이상 생성 시 이전 속성:값 제거됨
    - DOM.관계.관계.style.속성 = "값";
        * (위) style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
    - DOM.style.속성="값"
    - 위 관계는 필요에 따라 선택속성
## 첫번째 자식, 마지막 자식 노드 잡기
1. 첫번째 자식
* `firstChild - 첫번째 자식 노드 (공백포함)`
* `firstElementChild - 첫번째 자식 노드 (요소만 체크)`
2. 마지막 자식
* `lastChild - 마지막 자식 노드 (공백포함)`
* `lastElementChild - 마지막 자식 노드 (요소만 체크)`
## 이전 형제, 다음 형제 노드 잡기
1. 이전 형제
* `previousSibling - 이전 형제 노드 (공백포함)`
* `previousElementSibling - 이전 형제 노드 (요소만 체크)`
2. 다음 형제 
* `nextSibling - 다음 형제 노드 (공백포함)`
* `nextElementSibling - 다음 형제 노드 (요소만 체크)`
# 객체.innerHTML 
* `객체.innerHTML;` `특정 객체의 자식 , 자손 HTML 읽기`
* `객체.innerHTML = 값;` `HTML 삽입 및 변경`
# innerText
* `객체.innerText;` `객체의 자식 , 자손 텍스트 노드 읽기(HTML X)`
* `객체.innerText = 값;` `텍스트 노드 삽입 및 변경 (HTML X)`
# appendChild(삽입노드) 마지막 자식 노드 추가
* `객체.appendChild()`
* `객체.객체.appendChild()`
* `객체.속성.appendChild()`
* `객체.속성.속성.appendChild()`
* 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가
# insertBefore(삽입노드, 기존 시작자식 노드) 첫번째 자식 노드 추가
* 부모.insertBefore(삽입, 부모.firstChild)
# createElement(삽입Tag)
* `document.createElement()`
* 요소 노드 자바스크립트 내에서 동적인 용도로 생성할 경우
# 논리 연산자와 비교 연산자, 논리 데이터
## 논리데이터
* `참(true) 과 거짓(false)` `데이터 형식의 조건문`
## 비교연산자
* `두 값을 비교하여 논리데이터로 알려줌`
* `일치 연산자`
1. `a == b` `a 와 b가 같은지`
2. `a === b` `a와 b가 데이터타입까지 같은지`
3. `ex) '15' == 15` `true` 
3. `ex) '15' === 15` `false` 
* `부등연산자` `(일치의 반대)`
1. `a != b` `a 와 b가 다른지`
2. `a !== b` `a와 b가 데이터타입까지 다른지`
* `대소 비교 연산자`
1. `(x<y)`
2. `(x>y)`
3. `(x<=y)`
4. `(x>=y)`
## 논리연산자
* `논리적인 조건을 결합하거나 변경하는데 사용하는 연산자`
* `논리 연산자 우선 순위`
1. `() > NOT > AND > OR`
1. `AND(&&)` = `양쪽 피연산자가 모두 참일 때 결과는 참`
2. `OR(||)` = `양쪽 피연산자 중 하나라도 참이면 결과는 참`
3. `NOT(!)` = `피연산자의 논리 값을 반전함. 참이면 거짓 반환`
# js class
* class 이름은 css 속성들의 특징으로 지어준다
* `우선 순위`
1. 인라인 4 
2. 아이디 3 
3. 클래스 2 
4. 태그 1
.list li = 클래스 + 태그 = 3
.list .desing_set = 클래스 + 클래스 = 4
.list .desing_set 더 우선 순위이다
## important = 우선 순위 강제로 높이기
* 하지만 코드가 꼬일 수 있어 정말 중요할 때만 사용
## classList, className
* CSS 클래스를 자바스크립트와 연동하여 다양한 동작 표현을 진행할 수 있습니다.
## DOM.className = '추가클래스명'
* `대입하면 전에 것은 삭제 되니 복합 대입으로 작성하고 복합연산자로 연결하는 추가 클래스를 공백 없이 입력 시 기존 클래스의 이름이 변경되는 것으로 인식합니다.`
* ex) 공백X = desing_set1desing_set2
* ex) 공백O = desing_set1 desing_set2
* li[1].className = 'desing_set1'
* li[1].className += ' desing_set2'
## DOM.classList.add('추가클래스명')
* className과 다르게 공백 또는 복합연산자 없이 클래스등록이 가능합니다.
* 동시에 2개 이상의 클래스를 콤마(,)로 구분하여 선언할 수 있습니다.
* ex) li[1].classList.add('desing_set1', 'desing_set2')
## DOM.classList.remove('제거클래스명')
* 원하는 DOM 대상에 적용된 클래스를 제거할 수 있습니다.
* 제거하고 싶은 경우는 add방식과 동일하게 콤마(,)로 구분하여 작성
* ex) li[1].classList.remove('desing_set1', 'desing_set2')
## DOM.classList.toggle('토글클래스명')
* 버튼처럼 껐다 켰다 가능
* ex) btn.addEventListener('click', ()=>{li[2].classList.toggle('desing_set1')})
## DOM.classList.replace('기존', '변경')
* target.classList.replace('a', 'b') `a를 b로 변경`
* a없으면 안변함
## DOM.classList.contains(클래스 유무 확인)
* 클래스의 존재 유무를 확인합니다.(jquery의 hasClass와 의미 동일)
* true or false를 반환합니다.
### setInterval 일정시간 반복 타이머
### 복제대상.cloneNode()
복제대상.cloneNode() // 자식, 자손 없이 대상만 복제
복제대상.cloneNode(true) // 자식, 자손 포함해서 대상을 복제