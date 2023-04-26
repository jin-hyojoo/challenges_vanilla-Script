[목차로 이동](https://github.com/jin-hyojoo/challenges_vanilla-Script/blob/main/README.md)

---
🎱 Document Object
---
브라우저에 이미 존재하는 object (접근 가능한 html 객체)    
콘솔 창에 document 입력 시 작성한 html 갖고 옴
    
</br>

- js파일이 있기 때문에 js를 통해 html 내용 갖고 오는 것
- html이 import한 js파일을 로드하기 때문에 document 존재하고
- browser는 우리가 특정 document에 접근할 수 있도록 도움

</br>

`console.dir(document)`

document 정보 확인. All js objects

⇒   Javascript와 html은 이미 연결되어 있기 때문에 별다른 설정 없이 </br>
　&nbsp;Javascript로 html 읽어올 뿐만 아니라 변경도 가능


</br>


---
🎱 HTML in Javascript
---

```jsx
// 자바스크립트로 id값이 title인 element 갖고옴
// => <h1 class="imclass" id="title">Nomadcoders</h1>
const title = document.getElementById("title");
console.log(title);

// 해당 element의 자세한 정보 확인
console.dir(title);

// element 값 변경
title.innerText = "Nomadcoders Fighting";

// element의 id와 class명 확인
console.log(title.id);
console.log(title.className);
```
</br>

---
🎱 Searching For Elements
---



`getElementsByClassName()`

多 **CLASS** elements 갖고 올 때 사용. array 반환 

`getElementsById()`

多 **ID** elements 갖고 올 때 사용. array 반환 

`getElementsByTagName()`

html 태그 name 찾기. array 반환

</br>
    
__* css 방식 검색__

`QuerySelector`  

하나의 elements 반환. 중복일 경우 처음으로 찾은 elements 반환    
className, tagName 모두 검색 가능하므로 찾는 대상을 명확히 지정 

ex) querySelector(”#login-form”);    ← element id가 login-form인 것 
</br>　&nbsp;&nbsp;querySelector(”.login-form”);    ← element class가 login-form인 것 

</br>

`QuerySelectorAll`  

해당되는[=동일한 조건] 모든 elements를 array로 반환

```jsx
// 예시
document.getElementsByClassName("hello");
document.getElementsByTagName("h1");
document.querySelector(".hello h1");
document.querySelectorAll(".hello h1");

// 결과
HTMLCollection(3) [div.hello, div.hello, div.hello]
HTMLCollection(3) [h1, h1, h1]
<h1>Nomadcoders</h1>
NodeList(3) [h1, h1, h1]

/* querySelector("#hello)와 getElementById("hello")는 의미 동일
   하지만 getElementById()는 하위요소 갖고오지 못함  */
document.querySelector("#hello");
document.querySelector("#hello h1");
document.getElementById("hello");

// 결과
<div id="hello"> <h1>Nomadcoders</h1> </div>
<h1>Nomadcoders</h1>
<div id="hello"> <h1>Nomadcoders</h1> </div>
```
</br>


__* 찾은 elements를 이용한 값 change__

```jsx
const title = document.querySelector("#hello h1");
title.innerText = "노마드 코더에 오신걸 환영합니다!";
title.style.color = "brown";
```
