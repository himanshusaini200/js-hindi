
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result)

function loginUserMessage(username = "tony"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kunal"));
// console.log(loginUserMessage("kunal"));


function calculateCarPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 600, 5000));

const user = {
    username: "himanshu",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "thor",
    price: 599
})


const mynewArray = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 600]));