let nome: string = "Gustavo";
console.log(nome);

let idade: number = 897;
console.log(idade);

let lista = [1, 2, 3, "ola"];

interface PessoaInterface {
    nome: string,
    idade: number;
}

let objeto: PessoaInterface = {
    nome: "José",
    idade: 897
}

console.log(objeto.nome);

class Pessoa {
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number){
        this._nome = nome;
        this._idade = idade;
    }

    get nome(): string{
        return this._nome;
    }

    get idade(): number{
        return this._idade;
    }
}

let classe = new Pessoa("Joelma", 50);
console.log(classe.idade);


function saudacoes(nome: string): string{
    return "Olá " + nome
}

console.log(saudacoes("Danilo"));
