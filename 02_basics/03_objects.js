// singleton
// Ovject.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu saini",
    [mySym]: "myKey1",
    age: 19,
    location: "jaipur",
    email: "himanshu@google.com",
    isLoggedIn: false,
    lastLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "himanshu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "himanshu@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
  console.log("hello Js user");
}

console.log(JsUser.greeting());