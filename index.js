// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}

// console.log(returnLastTwoDrivers(drivers))
// console.log(drivers[drivers.length])
// console.log(drivers[drivers.length-1])
// console.log(drivers[drivers.length-2])
// console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// console.log(selectingDrivers[1](drivers))
// console.log(selectingDrivers[0](drivers))

function createFareMultiplier(num){
    return function(fare){
        return num * fare //this is the fare
    }
}

const fareDoubler = (createFareMultiplier) => createFareMultiplier * 2 //the return value from the multiplier = the fare. 
//that gets passed into the argument and it gets doubled

const fareTripler = (createFareMultiplier) => createFareMultiplier * 3 

const selectDifferentDrivers = (names, whichDrivers) => {
    if(whichDrivers == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(names)
    }
    else if(whichDrivers == returnLastTwoDrivers){
        return returnLastTwoDrivers(names)
    }
}

console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))

