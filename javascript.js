const shoppingList = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
function getItem(event) {
    let value = input.value;
    input.value = "";
    let listElem = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    listElem.appendChild(span);
    listElem.appendChild(button);
    shoppingList.appendChild(listElem);
    span.textContent = value;
    button.textContent = "Delete";
    button.addEventListener("click", () => {
        listElem.remove();
        input.focus();
    })
};

btn.addEventListener("click", getItem);


