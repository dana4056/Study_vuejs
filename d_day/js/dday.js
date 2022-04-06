var now = new Date();
var firstDay = new Date("2021-09-23");

var toNow = now.getTime();
var toFirst = firstDay.getTime() - (1000*60*60*9);  //오전 9시가 디폴트이기 때문에 자정으로 바꿈
var passedTime = toNow - toFirst + (1000*60*60*24); //오늘부터 1일하려면 하루 더해줘
var passedDay = Math.floor(passedTime/(1000*60*60*24));//밀리초에서 일 단위로 변환


document.querySelector("#accent").innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500)
;
function calcDate(days){
    var future = toFirst + (days-1) * (1000*60*60*24); //처음만난 날에 days-1일 더함
    var someday = new Date(future);
    var year = someday.getFullYear(); //연도
    var month = someday.getMonth() + 1; //연도
    var date = someday.getDate(); //연도

    document.querySelector("#date"+days).innerText = `${year}년 ${month}월 ${date}일`;
}



/*   추가할 기능
1. 날짜 입력하기 / 기념일 제목 입력하기
2. 오늘부터 1일인지 내일부터 1일인지
3. 디자인..?
   */