// code your solution here
function winning(element) {
    return (element.result==="W")
}

function superbowlWin(array){
    if (array.find(winning) ===undefined) {
        return array.find(winning)
    }
    else return array.find(winning).year
}