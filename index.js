// code your solution here
function superbowlWin(array) {
    if (array.find(item => item.result === "W")) {
        return array.find(item => item.result === "W").year
    }
    else {
        return undefined
    }
}