// 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread Syntax - Object
const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌ Bad Code 💩
item['price'] = detail.price;

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;
console.log(newObject);

// ❌ Bad Code 💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};
console.log(newObject);

// ✅ Good Code ✨
// 같은 값이 있다면 뒤에 있는 값으로 override 됨
const shirt0 = Object.assign(item, detail);
console.log(shirt0);

// ✅ Better! Code ✨
// 같은 값이 있다면 뒤에 있는 값으로 override 됨
const shirt = { ...item, ...detail, price: 30 };
console.log(shirt);

// 객체를 복사 할 떄는 앞에 {} 를 사용한다. 이유는 첫 번재 인자의 값이 변경되기 때문에 첫 번째 변수의 값이 변경 된다.
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// assign 는 값만 복사한다.!
let obj1 = { a: 0 , b: { c: 0}};
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

obj1.a = 1;
console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

obj2.a = 2;
console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
