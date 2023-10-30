const user = {
    username: "himanshu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
    }

}

//console.log(user.username);
//console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = User("himanshu", 12, true)
const userTwo = User("Chai aur code", 11, false)
console.log(userOne);
console.log(userTwo);