interface studentType {
  name: string,
  mark: number
}

function student(user: studentType) {
  console.log("student name is " + user.name + "mark is " + user.mark)
}

let user: studentType = {
  name: "arun",
  mark: 22
}

student(user)

