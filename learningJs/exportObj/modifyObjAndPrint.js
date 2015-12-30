// 看看对另一个文件中 export 出来的 obj 操作会不会改变这个obj，答案是显而易见的：当然会！

import {obj, a} from './obj';

obj.a = 38;


console.log('next obj:', obj);
console.log('next a:', a);

// a = 38; 不能改变 a， a is readonly
