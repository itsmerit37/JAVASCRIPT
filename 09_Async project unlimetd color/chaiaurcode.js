//generate a trandom color

const randomColor=()=>{
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;
const StartChangingColor=()=>{
    if(!intervalId){
    intervalId=setInterval(changeBodyColor,1000);
    }

    function changeBodyColor(){
    document.body.style.backgroundColor=randomColor();
}
}
const StopChangingColor=()=>{
    clearInterval(intervalId);
    intervalId=null;
}


const start=document.getElementById('start').addEventListener('click',StartChangingColor);
const stop=document.getElementById('stop').addEventListener('click',StopChangingColor);
