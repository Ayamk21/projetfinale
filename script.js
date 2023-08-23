let a14=document.getElementById("a14")
let login=document.getElementsByClassName("login")

a14.addEventListener("click",function(){
    if(login[0].style.display==="block"){
        login[0].style.display="none"
    }
    else{
        login[0].style.display="block"

    }
})