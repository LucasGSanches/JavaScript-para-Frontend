const button_increment = document.querySelector("#increment");
const button_decrement = document.querySelector("#decrement");
const div = document.querySelector("#number_counter");

let counter = 0;


button_increment.addEventListener('click', function(){
    counter += 1;
    updateDOM();
})

button_decrement.addEventListener('click', function(){
    if(counter > 0){
        counter -= 1;
    }
    updateDOM();
})

function updateDOM(){
    div.textContent = String(counter);
}