let canvas = document.querySelector('#main');
let size = document.querySelector('#size');


let md = false;
canvas.addEventListener('mousedown', down);
canvas.addEventListener('mouseup', toggledraw);
canvas.addEventListener('mousemove', _ =>{
    let mousePos = getMousePos (canvas, _);
    let posx = mousePos.x;
    let posy = mousePos.y;
    draw(canvas, posx, posy, bsize);
});
let bsize = 4;


function down(){
    md = true;
}

function toggledraw(){
    md = false;
}

function getMousePos(canvas, _){
    let rect = canvas.getBoundingClientRect();
    return {
        x: _.clientX - rect.left,
        y: _.clientY - rect.top,
    }
}

function draw(canvas, posx, posy){
    let context = canvas.getContext('2d');
    if(md){
        context.fillRect(posx, posy, bsize, bsize);
    }
}

size.onkeypress = _ =>{
    if(_.key === 'Enter'){
        bsize = size.innerText;
        return false;
    }
}