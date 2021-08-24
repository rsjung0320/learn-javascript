// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
// 아래를 사용하면 let 과 같이 변수를 선언할 때 넣지 않으면 에러로 판단한다.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
// block scope
// console.log(name); // 이 것은 에러가 난다.
console.log(globalName);

// var (don't ever use this!)
// 변수 선언은 var를 쓰지 말고 let을 사용하자!
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only), immutable 절대 바뀌지 않을 값을 선언할 때 쓰는 예약어
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number 소수점 숫자
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
// const 이기에 allie 객체를 다른 객체로 넣으면 안되지만 아래 예제와 같이 객체 안의 값을 변경할 때는 가능하다.
const ellie = { name: 'ellie', age: 20 };
console.log(`ellie ${ellie.age}`);
ellie.age = 21;
console.log(`ellie ${ellie.age}`);

// 5. Dynamic typing: dynamically typed language
// 그렇기 때문에 type script 로 개발하면 된다.
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
