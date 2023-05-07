// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
// function(e) is a function parameter that refers to the event object

//In JavaScript, e.currentTarget refers to the element that is currently handling the event.


const styles = e.currentTarget.classList;
if (styles.contains('decrease')){
count--
}
 
else if(styles.contains('increase')){
count++}

else{ 
count = 0;
}

if (count > 0){
value.style.color='green';
}

if (count < 0){
value.style.color = 'red';
}

if(count === 0){
value.style.color='yellow';
}
value.textContent= count //the value.texContent makes text = the count. Very Important. Also make sure that this is after the actual events
})

})
