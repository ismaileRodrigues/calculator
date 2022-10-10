


function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= numero + num;
    if(num){
        const music = new Audio('./audio/Um Pop.m4a');
        music.play()
    }
    
}

function zerar(){
    let resultado= document.getElementById('resultado').innerHTML = ''

        const music = new Audio('./audio/limpar.m4a');
        music.play()

}
function limpar(){
    let resultado= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)//apaga os números.
    if(resultado){
        const music = new Audio('./audio/apagar.m4a');
        music.play()
}
}
 //calculando
function calcular(){
    let resultado= document.getElementById('resultado').innerHTML;
    if(resultado){
       
        document.getElementById('resultado').innerHTML =eval(resultado)//responsável por fazer o cálculo
        const music = new Audio('./audio/som.mpga');
        music.play()

    }else{
        document.getElementById('resultado').innerHTML ='Nada...'
    }
    
}
//Movendo a calculadora


let move = document.querySelector('.cal');

move.addEventListener('mousedown', mousedown);
function mousedown(){
    move.addEventListener('mousemove', mousemove);
    move.addEventListener('mouseup', mouseup);

    function mousemove(e){
        let x = e.clientX +'px';
        let y = e.clientY  + 'px';
        this.style.left = x;
        this.style.top = y;
 
    }
function mouseup(){
    move.removeEventListener('mousemove',mousemove)
}



}