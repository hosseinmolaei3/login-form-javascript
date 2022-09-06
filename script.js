var body=document.getElementById("body");
var b_mood=document.getElementById("imod");
var sing_up=document.getElementById("singuplist");
var sing_in=document.getElementById("singinlist");
var btn_singup=document.getElementById("sing-btn");
var priority=false;
function moon(){
    body.classList.toggle("sunmood");
    if(body.classList.contains("sunmood")){
        b_mood.src="./icon/icons8-sun-100.png";
    }
    else{
        b_mood.src="./icon/icons8-moon-and-stars-100.png";
    }
}
function singup(){
    if(priority){
        document.getElementById("singup").classList.remove("singupmove");
        sing_up.style.display="none";
        sing_in.style.display="flex";
        btn_singup.innerText="sing up";
        priority=false;
    }
    else{
        document.getElementById("singup").classList.add("singupmove");
        sing_in.style.display="none";
        sing_up.style.display="flex";
        btn_singup.innerText="sing in";
        priority=true;
    }
}