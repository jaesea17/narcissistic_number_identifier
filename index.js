const formInput = document.getElementById("form-input");
let body = document.getElementsByTagName("body")[0];
let paragraph = document.createElement("p");

const determine = (e) => {
    e.preventDefault();
    const number = document.getElementById("input-number");
    const numberEntered = number.value;
    let sum = 0;
    let singleNumber = numberEntered.split("");
    let digits = singleNumber.length;
    singleNumber.map((unit) => {
        sum += Math.pow(unit, digits);
    });
    let isWhole = parseFloat(numberEntered);
    
    if (!Number.isInteger(isWhole)) {
        paragraph.style.color = 'red'; 
        paragraph.innerHTML = 'only positive whole numbers above  &nbsp "0" &nbsp are accepted';
    }
    else if (isWhole < 1 || isWhole % 1 != 0 ) {
        paragraph.style.color = 'red'; 
        paragraph.innerHTML = 'only positive whole numbers above  &nbsp "0" &nbsp are accepted';
     }
    
    else if (sum === isWhole) {
        paragraph.style.color = 'green';
        paragraph.innerHTML = `${isWhole}&nbsp&nbsp&nbsp&nbsp&nbsp is a Narcissistic Number`;
    }
    else{
        paragraph.style.color = 'red';
        paragraph.innerHTML = `${isWhole}&nbsp&nbsp&nbsp&nbsp is not a Narcissistic Number`;    
    }

    body.appendChild(paragraph);
};

formInput.addEventListener("submit", determine)
