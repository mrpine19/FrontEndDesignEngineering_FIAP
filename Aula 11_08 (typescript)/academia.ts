/*
**Tema**: Criando uma central de treino simples com TypeScript

1. Criar uma interface `Workout`
2. Criar uma função `registrarTreino` que receba um treino do tipo `Workout` e o adicione a um array global de treinos
3. Criar uma função `listarTreinos` que imprima todos os treinos no terminal
4. Executar as funções com alguns dados simulados
**/


interface Workout {
    tipo: "Treino de perna" | "Treino de costas" | "Treino de peito" | "Cardio",
    intensidade: 1 | 2 | 3 | 4 | 5,
    duracao: number;
}

const treinos: Workout[] = [];

function registrarTreino(treino: Workout){
    treinos.push(treino);
}

function listarTreinos(){
    treinos.forEach((treino, index) => {
        console.log("Treino "+(index + 1)+":");
        console.log(treinos);
        console.log();
    })
}

let treino1: Workout = {
    tipo: "Treino de perna",
    intensidade: 1,
    duracao: 30
}

let treino2: Workout = {
    tipo: "Treino de costas",
    intensidade: 4,
    duracao: 60
}

let treino3: Workout = {
    tipo: "Treino de peito",
    intensidade: 3,
    duracao: 120
}

let treino4: Workout = {
    tipo: "Cardio",
    intensidade: 5,
    duracao: 600
}

registrarTreino(treino1);
registrarTreino(treino2);
registrarTreino(treino3);
registrarTreino(treino4);
listarTreinos();
