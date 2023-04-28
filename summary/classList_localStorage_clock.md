
[목차로 이동](https://github.com/jin-hyojoo/challenges_vanilla-Script/blob/main/README.md)

---
🎱 Getting / Saving / Loading Username
---

</br>

- **Getting, 입력한 값을 문자열로 표시하고 해당 form 삭제**

`classList.add("클래스명");`

`classList.remove("클래스명");`

```html
<form id="login-form">
    <input required maxlength="15" type="text" placeholder="What is your name?" />
    <input type="submit" value="LogIn" />
</form>
<h1 id="greeting"></h1>
```

```css
.hidden{ display : none; } 
```

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add("hidden"); // form 사라져주세요

  const username = loginInput.value;

// 문자열 표현하는 새로운 방법 => #{변수}  
// greeting.innerText = "Hello " + username;  (기존방식)  
  greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);
```

</br></br>

- **Saving, 새로고침 해도 값 유지하기**  ⇒ Local Storage API 활용

`lcoalStorage.setItem("key", "value");`

`lcoalStorage.getItem("key");`

`lcoalStorage.removeItem("key");`

![localStorage](https://user-images.githubusercontent.com/62503593/235025301-b0a9cf63-8c7b-493f-aa63-058ef61bd13a.png)



</br></br>


- **Loading, 로컬 스토리지 유저정보 유무에 따른 컴포넌트 제어**

　　**유저정보 있으면 text, 없으면 form 보이기**


```html
<form class="hidden" id="login-form">
      <input required maxlength="15" type="text" placeholder="What is your name?" />
      <input type="submit" value="Log In" />
</form>
<h1 id="greeting" class="hidden"></h1>
```

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// (관습) 
// string만 포함된 값은 변수명을 대문자로 작성, 중요한 변수가 아님을 뜻함
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 form 지우기
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1태그 보이기
}

// 로컬스토리지에서 유저 키값 정보 받아오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬스토리지에 유저정보가 없으면
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 form 보이기
  loginForm.addEventListener("submit", onLoginSubmit);

// 유저정보 있다면 h1 텍스트 출력
} else {  paintGreetings(savedUsername); }
```

</br>

---
🎱 Clock
---

</br>

[Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    (date 관련 api)

</br>

`setInterval(실행하고자 하는 코드, 실행할 코드의 주기)`

매번 일어나야 하는 무언가. 특정 코드를 특정시간 마다 실행

ex) setInterval(getClock, 1000);    ← getClock( )함수를 1초마다 실행시켜라 

</br>

`setTimeout(실행하고자 하는 코드, 실행할 코드의 주기, ...)`

바로 실행하지 않고 일정 시간 기다린 후 실행(지연)

세번째 인자부터는 가변인자

</br>

`padStart(원하는 문자열 길이, 길이 미충족시 문자열 "앞"에 채워넣을 값)`

ex) “1”.padStart(2, “0”);

⇒ 문자열 길이 2로 설정하고, 해당 길이 충족하지 않으면 문자열 앞에 0 붙여라</br>
⇒ 결과 “01”


</br>

`padEnd(원하는 문자열 길이, 길이 미충족시 문자열 "뒤"에 채워넣을 값)`

ex) “1”.padEnd(2, “0”);

⇒ 결과 “10”

```jsx
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  // number → string 형변환 : 1.String()   2.문자열값.toString()
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  const dateText = `${hours}:${minutes}:${seconds}`;
  clock.innerText = dateText;
}
getClock();
setInterval(getClock, 1000);
```
</br>

**크리스마스 카운터🎄**
```jsx
const clockTitle = document.querySelector(".js-clock");
const X_MAS = "December 25, 2023 00:00:00";

function countDown() {
  const current = new Date();
  const xmas2023 = new Date(X_MAS);

  const totalSeconds = (xmas2023 - current) / 1000;

  // 단위별 세팅
  const ddd = Math.floor(totalSeconds / 3600 / 24);
  const hh = Math.floor(totalSeconds / 3600) % 24;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const ss = Math.floor(totalSeconds) % 60;

  clockTitle.innerText = `${ddd}d ${String(hh).padStart(2, "0")}h 
			          ${String(mm).padStart(2, "0")}m ${String(ss).padStart(2, "0")}s`;
}

countDown();
setInterval(countDown, 1000);
```

</br>

[목차로 이동](https://github.com/jin-hyojoo/challenges_vanilla-Script/blob/main/README.md)
