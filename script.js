console.log("Welcome to Tic Tac Toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X";
let prevturn="";
let isgameover=false;
//music.play();
//function to change the turn
const changeTurn=()=>{
 return turn=== "X"?"0":"X"
}
//function to check for a win
const checkWin=()=>{
let boxtext=document.getElementsByClassName("boxtext");
let wins=[
 [0,1,2,-12,5,0],
 [3,4,5,-12,15,0],
 [6,7,8,-12,25,0],
 [0,3,6,-23,15,90],
 [1,4,7,-13,15,90],
 [2,5,8,-3,15,90],
 [0,4,8,-12,15.7,45],
 [2,4,6,-12,13.9,135],
]
wins.forEach(e=>{
if(((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText))&&(boxtext[e[0]].innerText!==""))
{
    document.querySelector('.info').innerText=prevturn+" "+"Won";
    gameover.play();
    isgameover=true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
    document.querySelector('.line').style.width="20vw";
    document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    
}
})
}

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
let boxtext=element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerText=' '){
    boxtext.innerText=turn;
    prevturn=turn;
    turn=changeTurn();
    audioturn.play(); 
    checkWin();
    if(!isgameover)
    {
        document.getElementsByClassName("info")[0].innerText="turn for"+" "+turn;
    }
  }
})

})
reset.addEventListener('click',()=>{
let boxtexts=document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element=>{
    element.innerText="";
})
  turn="X";
  document.querySelector('.line').style.width="";
  isgameover=false;
  if(!isgameover)
  {
      document.getElementsByClassName("info")[0].innerText="turn for"+" "+turn;
  }
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})