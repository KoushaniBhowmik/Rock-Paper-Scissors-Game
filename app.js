let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const my=document.querySelector("#my");
const comp=document.querySelector("#comp");
const state=document.querySelector(".statement");
const newbtn=document.querySelector(".btn");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        my.innerText=userscore;
        msg.innerText=`You win.Your ${userchoice} beats ${compchoice}`;
        state.style.backgroundColor="green";
    }
    else{
        compscore++;
        comp.innerText=compscore;
        msg.innerText=`You lose.${compchoice} beats your ${userchoice}`;
        state.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    const compchoice= gencompchoice();
    if(userchoice==compchoice){
        msg.innerText="Game was draw. Play Again!!"
        state.style.backgroundColor="yellow";
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            if(compchoice=="paper"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userchoice=="paper"){
            if(compchoice=="rock"){
                userwin=true;
            }
            else{
                userwin=false;
            }
        }
        else{
            if(compchoice=="rock"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

const newgame=()=>{
   
        userscore=0;
        compscore=0;
        my.innerText=0;
        comp.innerText=0;
        msg.innerText="Play your move";
        state.style.backgroundColor= "chocolate";
}
newbtn.addEventListener("click",newgame);