const btn=document.querySelector("button");
const div=document.querySelector("div");

btn.addEventListener("click",()=>{
    let isValid=true;
    const inputs=document.querySelectorAll("input");
    inputs.forEach(input=>{
        if(!input.checkValidity()){
            isValid=false;
            div.textContent=input.validationMessage;
        }
        if(isValid) div.textContent="Ok";
    });
});