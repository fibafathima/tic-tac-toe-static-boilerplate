let boxElements=document.querySelectorAll('.div1')
boxElements.forEach((box)=>{
    box.addEventListener('click',function play(){
        playGame(box)
        box.removeEventListener('click',play)
    });
})

let player='X';
let click=0;

function playGame(box){
    console.log(box)
    if(click%2==0)
    {
        box.innerText=player;
        box.innerHTML=`<h1>${player}</h1>`
        player='O'
        
    }
    else
    {
        box.innerText=player;
        box.innerHTML=`<h1>${player}</h1>`
        player='X';
    }
    click++;
    checkTheWinner();
}
    function checkTheWinner()
    {
        let box1=document.querySelector("#parent>div:nth-child(1)");
        let box2=document.querySelector("#parent>div:nth-child(2)");
        let box3=document.querySelector("#parent>div:nth-child(3)");
        let box4=document.querySelector("#parent>div:nth-child(4)");
        let box5=document.querySelector("#parent>div:nth-child(5)");
        let box6=document.querySelector("#parent>div:nth-child(6)");
        let box7=document.querySelector("#parent>div:nth-child(7)");
        let box8=document.querySelector("#parent>div:nth-child(8)");
        let box9=document.querySelector("#parent>div:nth-child(9)");

        let str1=box1.textContent+box5.textContent+box9.textContent;
        let str2=box3.textContent+box5.textContent+box7.textContent;
        let str3=box1.textContent+box2.textContent+box3.textContent;
        let str4=box4.textContent+box5.textContent+box6.textContent;
        let str5=box7.textContent+box8.textContent+box9.textContent;
        let str6=box1.textContent+box4.textContent+box7.textContent;
        let str7=box2.textContent+box5.textContent+box8.textContent;
        let str8=box3.textContent+box6.textContent+box9.textContent;
        
        let finalscreen=document.getElementById('final-screen')
        let win=document.getElementById('win')
        if (str1=='XXX'||str2=='XXX'||str3=='XXX'||str4=='XXX'||str5=='XXX'||str6=='XXX'||str7=='XXX'||str8=='XXX'){
                console.log("X is the winner")
                win.textContent='X won the game'
                finalscreen.style.visibility='visible'
                return finalscreen
            }else if (str1=='OOO'||str2=='OOO'||str3=='OOO'||str4=='OOO'||str5=='OOO'||str6=='OOO'||str7=='OOO'||str8=='OOO'){
                console.log("O is the winner")
                win.textContent='O won the game'
                finalscreen.style.visibility='visible'
            }else if (click==9){
                finalscreen.style.visibility='visible'
                win.textContent="Its's a tie"
                console.log("Its's a tie")
            } 
        }
    let playAgain=document.querySelector('button')
    playAgain.addEventListener('click',function(){
        let finalscreen=document.getElementById('final-screen')
        window.location.href=''
    })
    
    