class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.selectConta = document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(e) {
        e.preventDefault();
        const numero = Math.floor(Math.random() * 1000000000).toString();
        const type = this.selectConta.options[this.selectConta.selectedIndex].value;
        let cliente;
        let conta;
        switch (type) {
            case "poupança":
                conta = new Poupanca(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
                break;
            case "bonificada":
                conta = new ContaBonificada(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
                break;
            default:
                conta = new Conta(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
        }
        this.contas.inserir(conta);
        this.clientes.inserir(cliente);
        this.inputNome.value = "";
        this.inputCpf.value = "";
        this.inserirNoHtml(cliente);
    }
    inserirNoHtml(cliente) {
        console.log(cliente);
        const elementoP = document.createElement("p");
        console.log(cliente.toString());
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement("button");
        botaoApagar.textContent = "X";
        botaoApagar.addEventListener("click", (event) => {
            console.log(`Removendo ${cliente.toString()}`);
            this.clientes.remover(cliente.cpf);
            this.contas.remover(cliente.conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    listar() {
        this.clientes.listar().forEach((cliente) => {
            console.log(cliente);
            this.inserirNoHtml(cliente);
        });
    }
}
