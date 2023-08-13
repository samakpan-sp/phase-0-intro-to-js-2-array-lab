// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function appendCat(name) {
    let newCatsArr = [...cats, name]
     return newCatsArr
}
function prependCat(name) {
    let appendCatsArr = [name, ...cats]
        return appendCatsArr
}    

// function prependCat(name) {
// cats[4] = name
//     return cats
// }
//prepends a cat to the cats array and returns a new array,
// leaving the cats array unchanged

function removeLastCat(){
    let newCat = cats.slice(0, cats.length-1)
    return newCat
}//removes the last cat in the cats
// array and returns a new array, leaving the cats array unchanged

function removeFirstCat(){
    let cat1Rem = cats.slice(1)
    return cat1Rem
}//removeFirstCat is not defined
