var hunger=100;
var energy=50;

function feed(){
    if(hunger>0){
        hunger=hunger-10;
        display();
    }
    if(energy<100){
        energy=energy+10;
        display();
    }
}
function play(){
    if(hunger<100){
        hunger=hunger+10;
        display();
    }
    if(energy>0){
        energy=energy-10;
        display();
    }   
}

function display(){
    document.getElementById('info-c1').innerHTML=`
    <p><b>Hunger:</b> ${hunger}%</p>
    <p><b>Energy:</b> ${energy}%</p>
    `;    
}

function init(){
    display();
}

window.onload = init;