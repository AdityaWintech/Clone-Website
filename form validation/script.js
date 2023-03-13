let username=document.getElementById("username");
let password=document.getElementById("password");
let flag=1;
let thanks=1;

 function validate(){
    if(username.value == ""){
        document.getElementById("usererror").innerHTML="User name is Empty"
        flag=0;

    }else if(username.value.length<3){
        document.getElementById("usererror").innerHTML="username required 3 character"
        flag=0;
    }
    else{
        document.getElementById("usererror").innerHTML="";
        flag=1;
    }
    if(password.value==""){
        document.getElementById("passerror").innerHTML="password is empty";
        thanks=0;
    }
    else{
        document.getElementById("passerror").innerHTML="";
        thanks=1;
    }
     if(flag==1 && thanks==1){
        return true;
     }else{
        return false;
     }
 }