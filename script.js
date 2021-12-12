const btn=document.querySelector("button");
const div=document.querySelector("div");
const inputs=document.querySelectorAll("input");

btn.addEventListener("click",()=>{
    let isValid=true;
    inputs.forEach(input=>{
        if(!input.checkValidity()){
            isValid=false;
            div.textContent=input.validationMessage;
        }
        if(isValid) div.textContent="Ok";
    });
});