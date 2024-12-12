"use strict";
// type User = {
//   name: string;
//   age: number;
// }
function filterUser(user) {
    return user.filter((x) => x.age >= 18);
}
console.log(filterUser([
    {
        firstName: "arun",
        lastName: "vasu",
        age: 1
    },
    {
        firstName: "bla",
        lastName: "bla",
        age: 23
    }
]));
