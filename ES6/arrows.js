// 기존 ES5의 함수정의

var num1 = 1;
var num2 = 2;

function sum(num1, num2){
    return num1+num2
}

console.log(sum(num1, num2)); // 3을 반환한다

// Arrow function을 활용한 ES6의 함수정의

const str1 = "Manngold";
const str2 = " is web-developer";

const addWord = (str1, str2) => str1+str2;

console.log(addWord(str1, str2));
//ES5는 return을 이용하여 함수의 결과 값을 꼭 반환해야 하지만
//ES6의 arrow를 활용하면 implicit return을 하게 된다.
//하지만 함수 내부에서 다른 동작이 있을 경우 return을 해줘야 한다.

const str3 = "Hello";
const num3 = 4;

const totalNum = (str, num) => {
    const strToNum = str.length;
    return strToNum + num; //return이 없을 경우 반환이 안됨
};

console.log(totalNum(str3, num3));

//ES5의 표현식

var even = [2, 4, 6, 8];

var odd = even.map(function(element){
    return element + 1;
})

console.log(odd); // [3, 5, 7, 9]
//ES6는 arrows를 이용하여 간결하게 표현 가능

let odd = even.map(even => even + 1);
console.log(odd);

