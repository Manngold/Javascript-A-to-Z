function func(){
    {
        let x; //변수 x 선언
        {
            const x = "inner block x";//상수로 변환
            x = "foo"; //const는 재할당 불가
        }
        x = "inner"; //상수로 앞에 블록에 선언이 되었기 때문에 재할당 불가
    }
}
//변수의 scope는 함수 블록 단위를 형성

// ES5의 var와 ES6의 let의 scope 비교

function varScope(){
    var testx = 30;
    if(true){
        var testx = 70;
        console.log(testx); // 70
    }
    console.log(testx); // 70
}
//scope가 전체 외부함수까지이다.

function letScope(){
    let testy = 40;
    if(true){
        let testy = 70;
        console.log(testy); //70
    }
    console.log(testy); //40
}
//scope가 내부, 하위블록에서 유효하다.

// var 와 let은 하위 블록과 내부 블록에서 유효하다
// 하지만 가장 큰 차이는 하위 블록에서 재선언을 했을 때
// var는 상위 블록과 같은 변수 취급, let은 다른 변수로 취급한다.

function scopeTest1(){
    if(true){
        var vs = 50;
        console.log(vs); // 50
    }
    console.log(vs); // 50
}

function scopeTest2(){
    if(true){
        let ls = 50;
        console.log(ls);// 50
    }
    console.log(ls); //변수선언 에러
}

function scopeTest3(){
    let z = 50;
    if(true){
        console.log(z); //50
    }
    console.log(z); //50
}

//var의 유효범위는 상위블록을 포함 let은 포함하지 않는다
