const body = document.querySelector("body");                                     // background용
const loginSection = document.querySelector("body .wrapper");                    // 로그인 창
const login = document.querySelector("div .form-inner .login");                  // 로그인폼
const main = document.querySelector("body main");                                // 메인항목
const username = document.querySelector("form .field input");                    // 유저네임
const neonClock = document.querySelector(".clock h2");                           // 시계
const cancleBtn = document.querySelector("main button");                         // 로그아웃 버튼
const darkBtn = document.querySelector(".dark_bright #dark_btn");                // 🌛dark
const brightBtn = document.querySelector(".dark_bright #bright_btn");            // 🌞bright
const revengePp = document.querySelector("#revenge_person");                     // 동은오적
const donthesitate = document.querySelector("#dont_hesitate");                   // 메리올리버
const todoForm = document.querySelector(".todo #todo_form");                     // todo Form
const todoFormInput = document.querySelector(".todo #todo_form input");          // todo Form Input
const todoList = document.querySelector(".todo #todo_list");                     // todo List
const weatherDiv = document.querySelector(".weather_mode_text");   

let toDos = [];

const USER_NAME_KEY = "username";
const DARK_KEY = "dark";
const BRIGHT_KEY = "bright";
const HIDDEN_KEY = "hidden";
const TODOS_KEY = "todos";

const darks = [
    "dark1",
    "dark2",
    "dark3",
    "dark4",
    "dark5",
];

const brights = [
    "bright1",
    "bright2",
    "bright3",
    "bright4",
    "bright5",
];

// 로컬스토리지에서 유저 키값 정보 받아오기
let savedUserName = localStorage.getItem(USER_NAME_KEY);
//============================================================ FUNCTION

/********************* 
호출전용 함수 
*********************/
function submit(e){
    e.preventDefault();
    const slideValue = document.querySelector('input[type=radio][name=slide]:checked').value; //dark, bright 슬라이드 선택값
    localStorage.setItem("mode", slideValue);         // mode값 저장
    localStorage.setItem(USER_NAME_KEY,username.value);  // 유저네임 저장
    theGlory();
}

/********************* 
MAIN :: 계획취소 버튼
*********************/
function onCancleBtn(){
    localStorage.removeItem(USER_NAME_KEY);  // 유저네임 삭제
    location.reload();
}

/********************* 
MAIN :: mode에 따른 세팅
*********************/
function backgroundMode(){
    console.log("======== backgroundMode() 진입");
   
    const localModeValue = localStorage.getItem("mode"); 

    // 배경화면 변경
    if (localModeValue === DARK_KEY ){
        const imgname = darks[Math.floor(Math.random() * darks.length)];
        body.style.backgroundImage = `url(./resources/${imgname}.jpg)`;

        // 날씨 관련 문구 
        weatherDiv.innerText = `복수하기 딱 좋은 날이네 💣`;

        // 🌛dark 등장
        darkBtn.classList.remove(HIDDEN_KEY);

        // 동은오적 등장
        revengePp.classList.remove(HIDDEN_KEY);

    }else if (localModeValue === BRIGHT_KEY){
        const imgname = brights[Math.floor(Math.random() * brights.length)];
        body.style.backgroundImage = `url(./resources/${imgname}.jpg)`;

         // 날씨 관련 문구 
         weatherDiv.innerText = `오늘 만큼은 복수하기 싫은 날이네 🌹🌼🌷`;

        // 🌞bright 등장
        brightBtn.classList.remove(HIDDEN_KEY);
        
        // 메리올리버 등장
        donthesitate.classList.remove(HIDDEN_KEY);
    }
    body.style.backgroundSize = "cover";
};

/********************* 
MAIN :: 스크린 화면 변경 
*********************/
function changeScreen(){
    console.log("======== changeScreen() 진입");
    
    // 메인 on
    main.classList.remove(HIDDEN_KEY);

    // 로그인 폼 hidden
    loginSection.classList.add(HIDDEN_KEY);

    savedUserName = localStorage.getItem(USER_NAME_KEY);  // 유저네임 갖고오기

    // 유저 info 세팅
    const userinfo = document.querySelector("main .user_info label");
    userinfo.innerText = `${savedUserName}`;
};

/********************* 
MAIN :: 실시간 시계 
*********************/
function clock(){
    console.log("======== clock() 진입");
    const current = new Date();
    const hours = String(current.getHours()).padStart(2, "0");
    const minutes = String(current.getMinutes()).padStart(2, "0");
    const seconds = String(current.getSeconds()).padStart(2, "0");

    const clockText = `${hours}:${minutes}:${seconds}`;
    neonClock.innerText = clockText
};


/********************* 
  MAIN 
*********************/
function theGlory(){

    /* MAIN :: mode에 따른 세팅 */ 
    backgroundMode();

    /* MAIN :: 스크린 화면 변경 */
    changeScreen(); 

    /* MAIN :: 실시간 시계 */
    setInterval(clock,1000);
}


//============================================================ END FUNCTION

// 로컬스토리지에 유저정보가 없으면
if (savedUserName === null || savedUserName === undefined) {
  
    // 로그인 form 보이기
    loginSection.classList.remove(HIDDEN_KEY);  
   
    /* MAIN */
    login.addEventListener("submit", submit);  
  
// 유저정보 있다면 main 출력
} else {  

     // 로그인 폼 hidden
     loginSection.classList.add(HIDDEN_KEY);
     theGlory();
}

// 계획 취소 
cancleBtn.addEventListener("click", onCancleBtn);


// 🌛dark, 🌞bright 버튼 클릭시 해당 모드의 배경 랜덤변경
darkBtn.addEventListener("click", backgroundMode);
brightBtn.addEventListener("click", backgroundMode);


