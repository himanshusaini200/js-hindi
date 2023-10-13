const name = "himanshu"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('himanshu-hc-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);

const newStringOne = "     Himanshu     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://himanshu.com/himanshu%20saini"

console.log(url.replace('%20','-'));

console.log(url.includes('Kunal'));

console.log(gameName.split('-'));