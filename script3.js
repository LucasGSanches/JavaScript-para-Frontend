const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("section ul");

button.addEventListener('click', function(){
    let text_input = input.value;
    if (text_input != ''){
        let new_li = document.createElement("li");
        let text_node = document.createTextNode(text_input);
        new_li.appendChild(text_node);
        list.appendChild(new_li);
        input.value = "";
    }
})