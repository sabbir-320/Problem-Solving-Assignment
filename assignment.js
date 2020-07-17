//  Feet to mile convert
function feetToMile(numbers) {
    const mile = numbers / 5280;
    return mile
}




// wood calculator
function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {
    const chairWood = numberOfChair * 1;
    const tableWood = numberOfTable * 3;
    const bedWood = numberOfBed * 5;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}




// Tiny friend
function tinyFriend() {
    let myFriends = ["Mukit", "Ali", "Umor", "sabbir"]
    let smallestFridend = myFriends[0];
    for (i = 0; i < myFriends.length; i++) {
        if (myFriends[i] < smallestFridend) {
            smallestFridend = myFriends[i];
        }
    }
    return smallestFridend
}




// Brick calculator
function brickCalculator(floor) {
    let totalHeight;
    let totalBrick;
    if (floor <= 10) {
        totalHeight = floor * 15;
        totalBrick = totalHeight * 1000;

    }
    else if (floor <= 20) {
        totalHeight = (10 * 15) + (10 * 12)
        totalBrick = totalHeight * 1000;

    }
    else {
        moreFloor = floor - 20;
        totalHeight = (10 * 15) + (10 * 12) + moreFloor * 10;
        totalBrick = totalHeight * 1000;

    }
    return totalBrick
}








