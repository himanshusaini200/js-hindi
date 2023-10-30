// let myName = "himanshu     "
// let mychannel = "chai"

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.himanshu = function(){
    console.log(`himanshu is present in all object`);
}

Array.prototype.heyHimanshu = function(){
    console.log('Himanshu says hello');
}

// heroPower.himanshu()
myHeros.himanshu()
myHeros.heyHimanshu()
// heroPower.heyHimanshu()

// inheritance


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}