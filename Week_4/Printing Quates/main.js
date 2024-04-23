/**let author = "Stephan King";
let quate = "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.";

console.log(author +" " +"says" + "," + quate)
console.log(`${author} says ${quate}`)**/

let author = prompt("Enter your favroite Author's Name : ")
let quate = prompt("Give me an exemple the quate of your favorite author")

if(author == "Stephan King" && quate == "Read a thousand books, and your words will flow like a river."){
    alert(`${author} says ${quate}`)
} else{
    alert("Error!!")
}