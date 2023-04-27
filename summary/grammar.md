[목차로 이동](https://github.com/jin-hyojoo/challenges_vanilla-Script/blob/main/README.md)

---
🎱 자료형 dataType
---
- **CONST**
    
    상수, 값 변화   X 
    
   
</br>

- **LET**
    
    New Things 생성할 때 사용. 값 변화 O
    
    ```jsx
    let myName = 'Hello ';
    myName    += 'Nyozu';  // update 
    
    console.log(myName);
    ```
    var을 쓰면 안되는 이유… 쓰지마!!!    
    [자바스크립트를 배우는데 아직도 let과 var의 차이를 모른다고? → 호이스팅](https://youtu.be/fETYLCU2YYc)
    
    
    
        
</br>

- **null & Undefined**
    
    `null` 
    
    값은 있으나 아무것도 아닌 것. 자연적으로 발생하지 않음
    
    보통 variable 안에 아무것도 없음을 확실히 해두기 위해 쓰임
    
    비어있음을 의도적으로 표현
        
    `Undefined` 
    
    정의되지 않은 variable. 컴퓨터 메모리 안에는 존재하나 값이 없는 상태
    

</br>

---
🎱 배열을 통한 데이터 정리
---
Why do we use an array for?　**To organize values on a list**

설명이 필요치 않은 데이터 리스트는 array로..

```jsx
// List는 All 값이 같은 의미를 지님
let dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let mixVariable = [true, null, "Nyozu", false, 2, 2*10, "sun"];   // 단순예제용

// Check Array Info
console.log(mixVariable);

// Get Item from Array
console.log(dayOfWeek[2]);

// Add one more things to the array
dayOfWeek.push("holiday");
console.log(dayOfWeek);
```

```jsx
// 실행 결과
[true, null, 'Nyozu', false, 2, 20, 'sun']
0: true
1: null
2: "Nyozu"
3: false
4: 2
5: 20
6: "sun"
length: 
7[[Prototype]]: Array(0) ...

wed

['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'holiday']
```

</br>

---
🎱 Object
---

설명이 필요한 정보가 담긴 데이터 리스트는 Object로..

Property를 지닌 데이터를 저장하도록 해줌. array와 달리 `{ }` 사용

</br>

**Create Object**

```jsx
const player = {
  name : "Nyozu",
  points : 10,
  work : true,
};

// Object 접근 방법 2가지
console.log(player.name);
console.log(player["work"]);
```

**Update Object**

```jsx
// Object가 상수여도 Object 하위 데이터 값은 변경 가능

player.points = 100;

// Error. 상수인 오브젝트 전체를 하나의 값으로 업데이트 할 때
player = false;

// 기존 Object에 없는 데이터 추가
player.lastName = "Jin";

// RESULT
// {name: 'Nyozu', points: 100, work: true, lastName: 'Jin'}
// 즉, Object가 상수여도 속성값 수정 및 추가는 가능
```

</br>

---
🎱 Function
---

**To encapsulate a piece of code**

특정 코드를 캡슐화 하는 것

계속 반복해서 사용할 수 있는 코드 조각

`argument`

function에게 특정 정보를 보낼 수 있는 방법

```jsx
let person = ["Chaewon", "Eungi", "Jiwon"];
let age = [38, 28, 34];

sayHello(person [0], age[0]);
sayHello(person [1], age[1]);
sayHello(person [2], age[2]);

function sayHello(name,age){
  console.log("Hello my name is " + name + "\nand i'm " + age + "years old");
}
```

`object function`

```jsx
const player = {
  name : "Nyozu",
  work : true,
	
	// 객체 내부에 선언한 함수 => 메서드
  sayHello: function(friend){
        console.log("hello everybody~!~!\n" + "Oh How are you " + friend + "?");
  },
};

console.log(player.name + " says\n");
player.sayHello("Jimmy");
```

</br>

---
🎱 Returns
---


**To get a value from a function**

function 결과 정보를 얻는 방법
“리턴 시 해당 함수 close”

</br>

<영화 contact 中>
`그 미래가 실제로 오기 위해선 우리가 그것을 행해야만 해`  

이처럼, return하지 않을 경우에는 function( )에서 행동한 것이

진짜 그것을 행했다고 보지 않는다

만약 function 믹서기( ) 에서 스무디를 만들고 return 하지 않을 경우

만들어진 스무디를 마시지 못한 채 그저 바라볼 수 밖에 없다

</br>

console.log는 **그림의 떡**

그림의 떡 **꺼내 먹으려면** Return필요!

</br>

---
🎱 Conditionals
---

조건문에 들어가기 앞서

.

.

`NaN`  Not a Number

`parseInt` String to Number

`prompt( )`  

```jsx
/*
		입력 받는 창을 띄우는 함수
		2개의 인자를 받는데 하나는 message, 다른 하나는 default
		But, 스타일 적용도 못하는 고전 방식이라 잘 쓰지 않는다
		요즘은 html, css로 만든 자신만의 창을 주로 씀
*/
const age = prompt("How old are you??");
```

</br>

`isNaN( )` 해당 인자가 num인지 아닌지 boolean형식으로 return

숫자 인자일 경우 false, 글자 인자일 경우 true

```jsx
const age = parseInt(prompt("How old are you??"));

// isNaN()이 True인 경우 = String인 경우
if (isNaN(age)){
  console.log("Please write a number")

// 숫자인데 해당 값이 18보다 작을 경우
}else if (age < 18){
  console.log("You are too young. So you can't drink!");

// 숫자인데 해당 값이 18보다 클 경우
}else {
  console.log("You can drink! Enjoy it :D")
}
```
</br>

**비교연산자** 

`&&`  AND, 좌항 우항 모두 true면 결과값 true 반환. 그 外 false 반환

`||`  OR, 좌항 우항 둘 중 하나라도 true면 결과값 true. 그 外 false 반환

`<=, >=` 작거나 같다, 크거나 같다의 의미. 꺽새가 등호보다 먼저 위치

`==, ===` 좌우의 값이 같다

`!=, !==` 좌우의 값이 같지 않다


</br>

[목차로 이동](https://github.com/jin-hyojoo/challenges_vanilla-Script/blob/main/README.md)
