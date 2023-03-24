class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(newNome) {
        this._nome = newNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        this._cpf = newCpf;
    }
    get conta() {
        return this._conta;
    }
    toString() {
        return `Nome: ${this._nome}, 
                cpf: ${this._cpf}, 
                ${this._conta.toString()}`;
    }
}
