class Cliente {
    private _nome: string;
    private _cpf: string;
    private _conta: Conta;
    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome() : string {
        return this._nome

    }

    set nome(newNome: string) {
        this._nome = newNome;
    }

    get cpf() : string {
        return this._cpf;
    }
    set cpf(newCpf: string) {
        this._cpf = newCpf;
    }
    
    get conta(): Conta {
        return this._conta;
    }

    toString(): string {
        return `Nome: ${this._nome}, 
                cpf: ${this._cpf}, 
                ${this._conta.toString()}`;
    }
}
