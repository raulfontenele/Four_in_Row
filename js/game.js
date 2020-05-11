// Variáveis do jogo
var tabuleiro = [
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','','']
];

const simbolos = ['X','O'];

var player = 0;

let container_jogo;
let container_vitoria;


// Funções

//Desenhar tabuleiro
desenhar = function(ctrVtoria){
    let conteudo = '';
    for(let linha = 0; linha<10; linha++){
        for(let coluna = 0; coluna<8; coluna++){
            if (tabuleiro[linha][coluna] =='' && ctrVtoria == false){
                conteudo += "<div onclick = marcacao(" + linha +"," + coluna+")>" + tabuleiro[linha][coluna]+ "</div>";
            }
            else{
                conteudo += "<div>" + tabuleiro[linha][coluna]+ "</div>";
            }
        }  
    }
    container_jogo.innerHTML = conteudo;
}
//Marcação das jogadas
marcacao = function(linha,coluna){
    if (linha!=9  && tabuleiro[linha+1][coluna]=='' ){
        alert("Jogada inválida!");
    }
    else{

        tabuleiro[linha][coluna] = simbolos[player];
        if(checarVencedor(linha,coluna)){
            container_vitoria.innerHTML = "Vitória do " + simbolos[player] + " !";
            desenhar(true);
        }
        else if(checarVelha()){
            container_vitoria.innerHTML = " Deu velha =/ !";
            desenhar(true);
        }
        else{
            player == 0 ? player = 1:player = 0;
            desenhar(false);
        }
    }
}

checarVencedor = function(linha,coluna){

    for(index = 0;index<4;index++){
        if((index - 3 + coluna) >=0 && (index + coluna) <8){
            console.log((coluna-3+index));
            if(tabuleiro[linha][coluna-3+index]==tabuleiro[linha][coluna-2+index] && tabuleiro[linha][coluna-1+index]==tabuleiro[linha][coluna+index] && tabuleiro[linha][coluna-3+index] == tabuleiro[linha][coluna+index]){
                return true;
            }
        }
        if(linha-3+index>=0 && coluna-3+index >=0 && linha+index <10 && coluna + index<8){
            if(tabuleiro[linha-3+index][coluna-3+index]==tabuleiro[linha-2+index][coluna-2+index] && tabuleiro[linha-1+index][coluna-1+index]==tabuleiro[linha+index][coluna+index] && tabuleiro[linha-3+index][coluna-3+index] == tabuleiro[linha+index][coluna+index]){
                return true;
            }
        }
        if(index - 3 + linha >=0 && linha + index <10){
            if(tabuleiro[linha-3+index][coluna]==tabuleiro[linha-2+index][coluna] && tabuleiro[linha-1+index][coluna]==tabuleiro[linha+index][coluna] && tabuleiro[linha-3+index][coluna] == tabuleiro[linha+index][coluna]){
                return true;
            }
        }
        if(coluna+3-index <8 && linha-3+index>0 && linha+index < 10 && coluna-index >= 0){
            if(tabuleiro[linha-3+index][coluna+3-index]==tabuleiro[linha-2+index][coluna+2-index] && tabuleiro[linha-1+index][coluna+1-index]==tabuleiro[linha+index][coluna-index] && tabuleiro[linha-3+index][coluna+3-index] == tabuleiro[linha+index][coluna-index]){
                return true;
            }
        }

    }
    return false;
}

checarVelha = function(){
    let velha = true;
    for(let linha = 0; linha<10; linha ++){
        for(let coluna = 0; coluna<8; coluna ++){
            if(tabuleiro[linha][coluna]=='') {
                velha = false;
                break;
            }
        }
    }
    return velha;
}


start = function(cont_jogo,cont_vit){
    container_jogo = cont_jogo;
    container_vitoria =  cont_vit;
    desenhar(false);
}