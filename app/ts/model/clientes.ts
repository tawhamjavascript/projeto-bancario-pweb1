class Clientes {
    private _clientes: Array<Cliente>;
    constructor() {
        this._clientes = new Array<Cliente>;
        const c1 = new Conta('1', 100);
        const p1 = new Poupanca('2', 100);
        const cb1 = new ContaBonificada('3', 0);

        const cliente1 = new Cliente("Barsemlona", "1234", c1)
        const cliente2 = new Cliente("Thiago", "5678", p1);
        const cliente3 = new Cliente("Jumentos", "9101", cb1);
        this._clientes.push(cliente1, cliente2, cliente3);

    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }
    
    remover(cpf: string): void {
        const id: number = this._clientes.findIndex((cliente: Cliente) => cliente.cpf === cpf);
        this._clientes.splice(id, 1);
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente {
        const cliente: Cliente = this._clientes.find((cliente : Cliente) => cliente.cpf === cpf);
        return cliente;

    }
}