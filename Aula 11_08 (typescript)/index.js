var nome = "Gustavo";
console.log(nome);
var idade = 897;
console.log(idade);
var lista = [1, 2, 3, "ola"];
var objeto = {
    nome: "José",
    idade: 897
};
console.log(objeto.nome);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var classe = new Pessoa("Joelma", 50);
console.log(classe.idade);
function saudacoes(nome) {
    return "Olá" + nome;
}
console.log(saudacoes("Danilo"));
