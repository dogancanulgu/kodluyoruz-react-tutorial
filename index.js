/*05. node ve slugify çalışıldı
console.log("Hello Node");

var slugify = require('slugify');
const title = slugify('some string');
console.log(title);
*****************/


/*ES6 Modül Sistemi */
import slugify from 'slugify';
const title = slugify('some string lorem ipsum', '*');
console.log(title);

import hello, {topla, cikar, text, user, users} from "./my-module.js";
console.log(topla(2, 4));
console.log(cikar(4, 2));
console.log(text);
console.log(user);
console.log(users);
hello("Doğancan");

