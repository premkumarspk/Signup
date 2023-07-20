function checkPassword(){
    let password =document.getElementById("Pass").value;
    let confirmPassword=document.getElementById("Re-pass").value;
    let message=document.getElementById("message");
    delay.checkPassword(4000);

    if(password.lenght !=0){
        if(password==confirmPassword){
            message.textContent="Passwords Math";
            message.style.color="green";
           
    
        }
        else{
            message.innerHTML="Password Don't Match";
            message.style.color="red";
            
        }
        
    }
}