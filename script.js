function restart() {
    window.location.reload(true)
}
var userName = "";
var userAge = "";
var userAdj = "";
var userName = prompt("What is the name of your character?")

randomNumber = Math.floor(Math.random() * 100) + 1;
// var randomNumber=100
if (randomNumber<=33){
    var userAge = prompt("What is the age of your character?")
    var icecreamAdj=prompt("How would you describe Ice Cream?")
} else if ((randomNumber>33) && (randomNumber<=66)){
    var adj1 = prompt("Give an adjective.")
    var farmAnimal = prompt("List a farm animal.")
    var soundOfFarmAnimal = prompt("What sound does it make?")
} else {

}

if (randomNumber <=33) {
    var story = `The once was a man with the name of ${userName}. ${userName} was ${userAge}. ${userName} one day to decided to go out in public and buy some ice cream. It was the best ice cream he had ever had it was ${icecreamAdj}. Some got on ${userName}'s shirt. L, get gud kid.`
} else if ((randomNumber>33) && (randomNumber<=66)){
    var story=`It was a ${adj1}, cold November day. ${userName} woke up to the ${farmAnimal}'s outside ${soundOfFarmAnimal}ing. It was terriable, the end.`
} else if ((randomNumber<=99) && (randomNumber >66)){
    var story=`Is Mr.Sekol really making me do 3 of these? ${userName} dosent like that. ${userName} thinks 2 is enough. Blake hopes this makes Mr.Sekol laugh and not yell at him for only doing 2 and not putting in the very little bit of extra effort to think of a third story. Blake has the time but simpily does not want to do it. The end. :)`
} else if (randomNumber==100){
    var story="This is a 1 in 100 chance of happening, yes its on purpose (suprisingly)."
}
console.log(randomNumber)


document.getElementById("theStory").innerHTML = story
