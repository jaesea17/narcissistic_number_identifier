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
    singleNumber.map((unit)=>{
        sum += Math.pow(unit,digits);
    });
    if(sum == numberEntered){
        paragraph.style.color = 'green';
        paragraph.innerHTML = `${numberEntered}&nbsp&nbsp&nbsp&nbsp&nbsp is a Narcissistic Number`
    }
    else{
        paragraph.style.color = 'red';
        paragraph.innerHTML = `${numberEntered}&nbsp&nbsp&nbsp&nbsp is not a Narcissistic Number`;
    
    }

    body.appendChild(paragraph);
};

formInput.addEventListener("submit", determine)