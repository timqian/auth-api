// throw 'err' 会被 catch 到. 如果没有 catch， 程序报错后退出

function throwErr() {
  throw 'err';
}
try {
  throwErr();
} catch (e) {
  console.log('error catched:', e);
}


function throwErr2() {
  throw new Error('hi');
}
try {
  throwErr2();
} catch (e) {
  console.log('new Error(e) catched', e);
}

// throwErr();
throwErr2();
console.log('continue');
