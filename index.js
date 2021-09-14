const formInput = document.getElementById("form-input");

const determine = (e) => {
    e.preventDefault();
    const number = document.getElementById("input-number");
    const numberEntered = number.value;
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
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