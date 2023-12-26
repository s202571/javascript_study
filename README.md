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