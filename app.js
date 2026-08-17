let btns = document.querySelectorAll('.tiles');
let h1 = document.querySelector('h1');
// window.addEventListener("keydown",(e)=>{
//     console.dir(e);
// })
let gameStart = false;
let tile = [
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false]
]
function game(){
    if(gameStart == false){
        window.addEventListener("keypress",()=>{
            h1.innerText = "THE-2048-GAME";
            gameStart = true;
            
            randomTileGenerator();
        });
    }

}
function randomTileGenerator(){
    let count = 0;
    while(count < 2){
        let tileOne = Math.floor(Math.random()*4);
        let tileTwo = Math.floor(Math.random()*4);
        if(tile[tileOne][tileTwo] == false){
            let random = Math.floor(Math.random()*5);
            let str = `tile-${tileOne}${tileTwo}`;
            let box = document.querySelector(`.${str}`);
            if(random < 3){
                box.classList.add('tiles-2');
                box.innerText = "2";
            }else{
                box.classList.add('tiles-4');
                box.innerText = "4";
            }
            tile[tileOne][tileTwo] = true;
            count++;
        }
    }
}

game();