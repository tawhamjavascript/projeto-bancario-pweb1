class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private selectConta: HTMLSelectElement;
    private clientes: Clientes
    private contas: Contas;

    constructor() {
        this.inputNome = <HTMLInputElement> document.querySelector("#nome");
        this.inputCpf  = <HTMLInputElement> document.querySelector("#cpf");
        this.selectConta = <HTMLSelectElement> document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(e: Event): void {
        e.preventDefault();
        const numero: string = Math.floor(Math.random() * 1000000000).toString();
        const type: string = this.selectConta.options[this.selectConta.selectedIndex].value;
        let cliente: Cliente;
        let conta: Conta;

        switch(type) {
            case "poupança":
                conta = new Poupanca(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, <Poupanca>conta);
                break;
            
            case "bonificada":
                conta = new ContaBonificada(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, <ContaBonificada>conta);
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

    inserirNoHtml(cliente: Cliente): void {
        console.log(cliente);
        const elementoP: HTMLParagraphElement = document.createElement("p");
        console.log(cliente.toString());
        elementoP.textContent = cliente.toString();
        const botaoApagar: HTMLButtonElement = document.createElement("button");
        botaoApagar.textContent = "X";
        botaoApagar.addEventListener("click", (event: Event) => {
            console.log(`Removendo ${cliente.toString()}`);
            this.clientes.remover(cliente.cpf);
            this.contas.remover(cliente.conta.numero);
            (<Element> event.target).parentElement.remove();

        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    listar(): void {
        this.clientes.listar().forEach((cliente: Cliente) => {
            console.log(cliente);
            this.inserirNoHtml(cliente);
        })
    }
}