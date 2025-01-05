"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "taro", age: 22 }, { name: "jira", age: 23 });
console.log(age);
