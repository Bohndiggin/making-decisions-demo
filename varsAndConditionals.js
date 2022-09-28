/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("John Snow has better attack than Jamie Lannister")
} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow")
} else {
    console.log("Their power is equal.")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("jon Snow has been slain")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow has ${jonSnowHealth}hp`)
}

//jon gets a shield
jonSnowDefense += 25

//Jamie attacks again!
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain.")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow has ${jonSnowHealth}hp`)
}