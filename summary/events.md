[목차로 이동](https://github.com/jin-hyojoo/challenges_vanilla-Script/blob/main/README.md)

---
🎱 Events
---
`addEventListener(1, 2)`

js에게 어떤 이벤트를 listen하고 싶은지 알려줄 필요가 있음

</br></br>    
    
**함수 매개변수**

1. listen 하고자 하는 event명

 　2.이벤트가 발생하면 호출할 function 전달. 이때 괄호 넣지 않는 게 중요
  
  </br>   
 　Why?   클릭 이벤트 발생한 경우에만 함수를 실행시켜야 하기 때문에 
  
 　 　 　 javascript에게 우선적으로 함수만 넘겨줌
          
</br></br>    
    
    
**웹 사이트에서 클릭 이벤트 감지하기**

```jsx
const title = document.querySelector("#hello h1");
title.addEventListener("click", handleTitleClick);

function handleTitleClick() {
  title.style.color = "brown";
  console.log("title was clicked");
};
```

</br></br>    
    
**이벤트 찾기**

- 구글검색
    - 찾고싶은 elements 이름 검색
    - 링크에 WebAPIs 문장 포함된 페이지 찾기
    - JS관점의 HTML heading element를 확인해봐야하기 때문
    </br>ex) h1 html element mdn
    
    　[Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API) ← javascript 관점
    
    
    
- 너무 복잡시러우면 element를 console.dir로 출력해</br>
    on~ 붙어있는(event listener) 이벤트 사용 </br>
    참고로 JS 코드 작성할 때 on은 제외하고 사용

</br></br>    
    
**이벤트 연결하기 2가지 방법**

```jsx
// 이벤트 동작 2가지 방법
title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);
```

니콜라스 쌤은 addEventListener( ) 방법을 선호

Why? `removeEventListener()`로 event listener 제거할 수 있기 때문

</br></br>    

**윈도우 관련 이벤트**

[Window Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)

</br>

---
🎱 CSS in Javascript
---

**event 조건문 활용**

```jsx
const h1 = document.querySelector("#hello h1");

function handleTitleClick(){

　/* 의미론적에 따른 const, let 변수 선언 */
　// getter의 의미__최신 color값 복사의 역할 예정
  const currentColor = h1.style.color; 

　// setter의 의미__최종할당역할 예정
  let newColor;  

  if(currentColor === "blue"){
    newColor = "tomato";
  }else{ 
    newColor = "blue"
  }
  h1.style.color = newColor; // css변경,최종할당
};

h1.addEventListener("click", handleTitleClick);
```

</br></br>

**좋은 코드 만들기**

Style작업  __CSS__ , Animation작업  __JS__

JS에서 스타일을 건드는 건 바람직 하지 않다



```html
<!-- 1.  HTML파일은 CSS & JS문서 Import -->
<div id="hello">
    <h1>Nomadcoders</h1>

	<!--클릭 이벤트 발생시 
	<h1 class="active">Nomadcoders</h1>
	-->
</div>
```

```css
/* 2.  CSS에 .active라는 class 생성 */
h1{  color : springgreen; }
.active { color : tomato; }
```

```jsx
/*
  3.  addEventListener로 h1 클릭시 handleTitleClick 함수 작동
  4.  h1 클래스명이 active인 경우 클래스명 삭제 
      ▶ css 설정에 따라 h1의 텍스트 색이 “springgreen”으로 변경 됨
  5.  그 외의 경우에는 h1의 class name이 "active"로 변경되고
      css 설정에 따라 .active의 텍스트 색이 “tomato”으로 변경됨
*/
const h1 = document.querySelector("#hello h1");

function handleTitleClick(){
  const clickedClass = "active";
  if(h1.className === clickedClass){
	  h1.className = "";
  }else {
	  h1.className = clickedClass;
  }
};

h1.addEventListener("click", handleTitleClick);
```

</br>

※ 상단 예시의 문제점

⇒ 초기 h1 태그에 className 존재할 때, className 수정 시 

　이전 class는 전혀 상관하지 않고 값을 변경함 이벤트 실행 이후부터는
 
　전혀 찾을 수 없음. 사라짐 

</br></br>

**개선**

`classList`   class 목록으로 작업할 수 있게 도움을 줌

`classList.contains()`  개발자가 명시한 class가 HTML element class에 포함되어 있는지

```html
<div id="hello">
<!--클릭 이벤트 발생 전 -->
<h1 class="normal">Nomadcoders</h1>
		
<!--클릭 이벤트 발생 후: 기존 클래스명 지우지 않고 추가됨 -->
<h1 class="normal active">Nomadcoders</h1>
</div>
```

```jsx
const clickedClass = "active";

// classList를 통해 해당 클래스가 존재하는지 Chk
if(h1.classList.contains(clickedClass)){
	h1.classList.remove(clickedClass);
}else {
	h1.classList.add(clickedClass);
} 
```

</br></br>

**더 좋은 개선**

`toggle`

토큰이 존재하면 해당 토큰 제거 존재하지 않으면 추가

⇒ className 존재 유무 판단해 className 있으면 추가하고 없으면 삭제

```jsx
// 위에 적었던 여러줄의 코드들을 toggle 하나로 해결!
function handleTitleClick() {
  h1.classList.toggle("active");
};
```


</br>

---
🎱 Form
---



**Input Values**

**: 상위 div에서 하위 elements 찾기**

```html
<div id="login-form">
    <input type="text" placeholder="What is your name?"/>
    <button>submit</button>
</div>
```

</br>

`방법 (1)`

```jsx
const loginForm = document.getElementById("login-form");

// 앞서 찾은 상위 element에서 하위 elements 찾기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
```

</br>


`방법 (2)`

```jsx
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
```

</br></br>

: **버튼 클릭 시 입력한 텍스트 값 출력하기**

```jsx
function onLoginBtnClick(){ console.log(loginInput.value); }
loginButton.addEventListener("click", onLoginBtnClick);
```
</br></br>

: **버튼 클릭 시 유효성 검사 (Validation Check)**

```jsx
function onLoginBtnClick(){
  const value = loginInput.value;

// 입력값 없을 경우
  if (value === ""){
    alert("Please write your name");
	
// 입력값의 길이가 15 초과인 경우
  }else if(value.length > 15){
    alert("Your name is too long");
  }
}

/* 이렇게 JS로 작업할 수 있지만 항상 최고의 툴, 이미 갖고 있는
기능을 사용하는 것이 좋기 때문에 브라우저 자체의 기능을 사용할 수도 있다. */
```
</br></br>

: **브라우저 자체 기능, HTML이 제공하는**

```html
<form id="login-form">
    <input required maxlength="15" type="text" placeholder="What is your name?"/>
    <button>submit</button>
</form>
```

input의 **Validation Check 작동** 위해선 div가 아닌 **form태그**를 사용해야 함

**required** 속성은 폼 데이터(form data)가 서버로 제출되기 전

반드시 채워져 있어야 하는 입력 필드를 명시. boolean 속성이며 명시 true, 비 명시 false


</br>

- required 사용 가능한 type 

⇒ checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url

</br>

___Form submit으로 인한 페이지 새로 고침___

- form input 속 button 클릭
- type이 submit인 input 클릭
- form안에 input 넣고 enter (자동으로 submit)

</br>

---
🎱 Form Events
---


**Submit Event 감지**

모든 `addEventListener` 의 첫 번째 인자는 JS가 제공하는 **지금 막 벌어진 일들에 대한 정보**

이를 통해 JS가 **어떤 정보를 담은 채로 function 호출**한다는 걸 알 수 있음

아래 예시에서 preventDefault()는 JS가 넘기는 정보 中 기본적으로 제공되는 function

```jsx
const loginForm = document.querySelector("#login-form");

function onLoginSubmit(event){

// 특정 event의 발생 막음 => 브라우저의 기본 동작 실행 막음
  event.preventDefault(); 
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

```jsx
💡 result
SubmitEvent {isTrusted: true, submitter: button, 
type: 'submit', target: form#login-form, 
currentTarget: form#login-form, …}
```

**정리**

- 브라우저는 발생된 이벤트 정보(object)를 가짐
- 이벤트에는 addEventListener 속 함수도 포함되어있는데
이를 브라우저가 실행시킴
- addEventListener 함수에 object 자리 할당 시 이벤트가 발생 시킨
정보에 대한 object들 확인 가능
- 해당 이벤트가 가진 기본 Default값 발생 막고자 한다면 preventDefault를 사용
