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
