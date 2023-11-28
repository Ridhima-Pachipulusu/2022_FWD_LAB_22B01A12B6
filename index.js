const names=document.getElementById("name");
const pass=document.getElementById("password");
const btn=document.getElementById("button");
btn.addEventListener("click",()=>{
    if(names.value == "")
    {
        alert("Fill your name");
    }
    else{
        console.log(names.value);
    }
});
btn.addEventListener("click",()=>{
    if(pass.value == "")
    {
        alert("Fill your password");
    }
    else{
        console.log(password.value);
    }
});
