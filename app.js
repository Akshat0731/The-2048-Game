let btns = document.querySelectorAll('.tiles');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let hs = 0;
p.innerText = `High Score:${hs}`;
// window.addEventListener("keydown",(e)=>{
//     console.dir(e);
// })
let gameStart = false;
let num = 0;
let score = 0;
let k;
let tile = [
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false]
]
function game(){
    if(gameStart == false){
        window.addEventListener("keypress",function start(){

            tile = [
                [false,false,false,false],
                [false,false,false,false],
                [false,false,false,false],
                [false,false,false,false]
            ]

            for(let i=0;i<tile.length;i++){
                for(let j=0;j<tile.length;j++){
                    clearTile(i,j);
                }
            }
            score = 0;
            h1.innerHTML = `THE-2048-GAME <br> Score:${score}`;
            gameStart = true;
            
            randomTileGenerator();
            randomTileGenerator();
            mergeTiles();
            window.removeEventListener("keypress",start);
        });
    }

}
function randomTileGenerator(){
    let count = 0;
    while(count < 1){
        let tileOne = Math.floor(Math.random()*4);
        let tileTwo = Math.floor(Math.random()*4);
        if(tile[tileOne][tileTwo] == false){
            let random = Math.floor(Math.random()*5);
            let str = `tile-${tileOne}${tileTwo}`;
            let box = document.querySelector(`.${str}`);
            if(random < 3){
                box.classList.add('tiles-2');
                box.innerText = "2";
                num = 2;
            }else{
                box.classList.add('tiles-4');
                box.innerText = "4";
                num = 4;
            }
            tile[tileOne][tileTwo] = num;
            count++;
        }else{
            return;
        }
    }
}
async function changeNumClr(a,b,num){
    let box = document.querySelector(`.tile-${a}${b}`);
    box.innerText = "";
    box.setAttribute('class',`tiles tile-${a}${b}`);
    box.classList.add(`tiles-${num}`);
    box.innerText = num;
    tile[a][b] = num;
}

async function clearTile(i,j){
    let box = document.querySelector(`.tile-${i}${j}`);
    box.setAttribute('class',`tiles tile-${i}${j}`);
    box.innerText = "";
}
async function mergeTiles(){
    window.addEventListener("keypress",async (e)=>{
        if(e.key == "w"){
            k = "w";
            for(let i=0;i<tile.length;i++){
                for(let j=0;j<tile[i].length;j++){
                    while((tile[i][j] != false) &&(i > 0) && (tile[i-1][j] == false)){
                        num = tile[i][j];
                        await changeNumClr(i-1,j,num);
                        await clearTile(i,j);
                        tile[i][j] = false;
                        i--;
                    }
                    combineTiles(i,j);
                }
            }
            randomTileGenerator();
            over();
        }

        else if(e.key == "s"){
            k = "s";
            for(let i=0;i<tile.length;i++){
                for(let j=0;j<tile[i].length;j++){
                    while((tile[i][j] != false) &&(i < tile.length-1) && (tile[i+1][j] == false)){
                        num = tile[i][j];
                        await changeNumClr(i+1,j,num);
                        await clearTile(i,j);
                        tile[i][j] = false;
                        i++;
                    }
                    combineTiles(i,j);
                }
            }
            randomTileGenerator();
            over();
        }

        else if(e.key == "a"){
            k = "a";
            for(let i=0;i<tile.length;i++){
                for(let j=0;j<tile[i].length;j++){
                    while((tile[i][j] != false) &&(j > 0) && (tile[i][j-1] == false)){
                        num = tile[i][j];
                        await changeNumClr(i,j-1,num);
                        await clearTile(i,j);
                        tile[i][j] = false;
                        j--;
                    }
                    combineTiles(i,j);
                }
            }
            randomTileGenerator();
            over();
        }

        else if(e.key == "d"){
            k = "d";
            for(let i=0;i<tile.length;i++){
                for(let j=0;j<tile[i].length;j++){
                    while((tile[i][j] != false) &&(j < tile.length-1) && (tile[i][j+1] == false)){
                        num = tile[i][j];
                        await changeNumClr(i,j+1,num);
                        await clearTile(i,j);
                        tile[i][j] = false;
                        j++;
                    }
                    combineTiles(i,j);
                }
            }
            randomTileGenerator();
            over();
        }else{

        }


    });
}

function combineTiles(i,j){
    if(k === "w" && i>0 && (tile[i][j]!== false) && (tile[i][j] === tile[i-1][j])){
        let box1 = document.querySelector(`.tile-${i}${j}`);
        let box2 = document.querySelector(`.tile-${i-1}${j}`);
        let number = tile[i][j] + tile[i-1][j];
        score += number;
        if(number > 8192){
            box2.setAttribute('class',`tiles tile-${i-1}${j} tiles-high`);
        }else{
            box2.setAttribute('class',`tiles tile-${i-1}${j} tiles-${number}`);
        }
        box1.setAttribute('class',`tiles tile-${i}${j}`);
        box2.innerText = `${number}`;
        tile[i-1][j] = number;
        box1.innerText = "";
        tile[i][j] = false;
        h1.innerHTML = `THE-2048-GAME <br> Score:${score}`;
    }
    else if(k === "s" && i<tile.length-1 && (tile[i][j]!== false) && (tile[i][j] === tile[i+1][j])){
        let box1 = document.querySelector(`.tile-${i}${j}`);
        let box2 = document.querySelector(`.tile-${i+1}${j}`);
        let number = tile[i][j] + tile[i+1][j];
        score += number;
        if(number > 8192){
            box2.setAttribute('class',`tiles tile-${i+1}${j} tiles-high`);
        }else{
            box2.setAttribute('class',`tiles tile-${i+1}${j} tiles-${number}`);
        }
        box1.setAttribute('class',`tiles tile-${i}${j}`);
        box2.innerText = `${number}`;
        tile[i+1][j] = number;
        box1.innerText = "";
        tile[i][j] = false;
        h1.innerHTML = `THE-2048-GAME <br> Score:${score}`;
    }
    else if(k === "a" && j>0 && (tile[i][j]!== false) && (tile[i][j] === tile[i][j-1])){
        let box1 = document.querySelector(`.tile-${i}${j}`);
        let box2 = document.querySelector(`.tile-${i}${j-1}`);
        let number = tile[i][j] + tile[i][j-1];
        score += number;
        if(number > 8192){
            box2.setAttribute('class',`tiles tile-${i}${j-1} tiles-high`);
        }else{
            box2.setAttribute('class',`tiles tile-${i}${j-1} tiles-${number}`);
        }
        box1.setAttribute('class',`tiles tile-${i}${j}`);
        box2.innerText = `${number}`;
        tile[i][j-1] = number;
        box1.innerText = "";
        tile[i][j] = false;
        h1.innerHTML = `THE-2048-GAME <br> Score:${score}`;
    }
    else if(k === "d" && j<tile.length-1 && (tile[i][j]!== false) && (tile[i][j] === tile[i][j+1])){
        let box1 = document.querySelector(`.tile-${i}${j}`);
        let box2 = document.querySelector(`.tile-${i}${j+1}`);
        let number = tile[i][j] + tile[i][j+1];
        score += number;
        if(number > 8192){
            box2.setAttribute('class',`tiles tile-${i}${j+1} tiles-high`);
        }else{
            box2.setAttribute('class',`tiles tile-${i}${j+1} tiles-${number}`);
        }
        box1.setAttribute('class',`tiles tile-${i}${j}`);
        box2.innerText = `${number}`;
        tile[i][j+1] = number;
        box1.innerText = "";
        tile[i][j] = false;
        h1.innerHTML = `THE-2048-GAME <br> Score:${score}`;
    }else{}
}


function over(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){

            if(tile[i][j] === false){
                return;
            }

            if(i < 3 && tile[i][j] === tile[i+1][j]){
                return;
            }

            if(j < 3 && tile[i][j] === tile[i][j+1]){
                return;
            }
        }
    }

    gameStart = false;
    h1.innerText = "GAME OVER!!!!!";

    if(score > hs){
        hs = score;
        p.innerText = `High Score:${hs}`;
    }
    game();
}

game();