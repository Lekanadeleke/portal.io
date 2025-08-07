alert ("good morning")
let on = document.getElementById("on");
let image = document.getElementById("image");
let off = document.getElementById("off");

let a = 2;
 (a);

on.addEventListener("click", ()=>{
   image.src="./images/oncat.gif.jpg";
})

off.addEventListener("click", ()=>{
    image.src="./images/offcat.gif.jpg";
})

function showBulbLater() {
    let div = document.getElementById("hide");
    setTimeout( ()=>{
        div.classList.remove("hide");
    }, 60000)
}
showBulbLater();

let animals = ["Dog","Cat", "Sheep"];
console.log(a);

let z = "Sola";
console.log(z);
