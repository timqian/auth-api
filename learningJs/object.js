// 使用 Object.keys()

var obj = {
  a: 1,
  b: 2,
};

console.log(Object.keys(obj));
console.log(Object.keys({}));

Object.keys({}).forEach((item) => {
  console.log(item);
});
