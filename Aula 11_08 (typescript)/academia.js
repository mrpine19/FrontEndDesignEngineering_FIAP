/*
**Tema**: Criando uma central de treino simples com TypeScript

1. Criar uma interface `Workout`
2. Criar uma função `registrarTreino` que receba um treino do tipo `Workout` e o adicione a um array global de treinos
3. Criar uma função `listarTreinos` que imprima todos os treinos no terminal
4. Executar as funções com alguns dados simulados
**/
var treinos = [];
function registrarTreino(treino) {
    treinos.push(treino);
}
function listarTreinos() {
    treinos.forEach(function (treino, index) {
        console.log("Treino " + (index + 1) + ":");
        console.log(treinos);
        console.log();
    });
}
var treino1 = {
    tipo: "Treino de perna",
    intensidade: 1,
    duracao: 30
};
var treino2 = {
    tipo: "Treino de costas",
    intensidade: 4,
    duracao: 60
};
var treino3 = {
    tipo: "Treino de peito",
    intensidade: 3,
    duracao: 120
};
var treino4 = {
    tipo: "Cardio",
    intensidade: 5,
    duracao: 600
};
registrarTreino(treino1);
registrarTreino(treino2);
registrarTreino(treino3);
registrarTreino(treino4);
listarTreinos();
