// type User = {
//   name: string;
//   age: number;
// }

// type Admin = {
//   name: string,
//   age: number,
//   startDate: number
// }

// type userOrAdmin = User | Admin

// let user: userOrAdmin = {
//   name: "arun",
//   age: 22
// }

// function userInfo(user: userOrAdmin) {
//   console.log(user.name)
// }

// userInfo(user)

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function filterUser(user: User[]) {
//   return user.filter((x) => x.age >= 18)
// }

// console.log(filterUser([
//   {
//     firstName: "arun",
//     lastName: "vasu",
//     age: 1
//   },
//   {
//     firstName: "bla",
//     lastName: "bla",
//     age: 23
//   }
// ]))

function add(sum: number, sum2: number): number {
  return sum + sum2
}