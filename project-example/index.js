// 1. Common JS

// const users = require("./users.js");
// console.log(users);

// Деструктуризация
// const { admins } = require("./users.js");
// console.log(admins);

// const { getCurrentMoth } = require("./data");
// const currentMonth = getCurrentMoth();
// console.log(currentMonth);
// или второй способ в commonJS Module
// const currentMonth = require("./commonJS_data").getCurrentMoth();
// console.log(currentMonth);

// 2 ES6 Module
import users from "./users.js";
console.log(users);

import { admins } from "./users.js";
console.log(admins);
