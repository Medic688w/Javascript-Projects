const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// The above just shows the colors we are going to user 

const btn = document.getElementById('btn')
// btn is my button id

const color = document.querySelector ('.color');
// This is for my h2 span because my class was color 

  btn.addEventListener('click', function(){
// Every time I click it changes colors
const randomNumber = getRandomNumber();
console.log(randomNumber)

document.body.style.backgroundColor = colors[randomNumber];
color.texContent = colors[randomNumber];
});
// get random number between 0-3
function getRandomNumber(){
return Math.floor (Math.random()* colors.length);
}
