let nomeHeroi = "joão";
let quantidadeExperiencia = 5000;

if(quantidadeExperiencia <= 1000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro");
} else if(quantidadeExperiencia > 1000 && quantidadeExperiencia <= 2000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze");
} else if (quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata");
} else if(quantidadeExperiencia > 5000 && quantidadeExperiencia <= 7000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro");
} else if(quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Platina");
} else if(quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente");
} else if(quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal");
} else {
        console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante"); 
}


