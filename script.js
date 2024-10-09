

let listaFrutas = [];
let listaCongelados = [];
let listaGraos = [];
let listaGuloseimas = [];


function addFrutas() {
    let nome = prompt("Digite o nome da fruta: ");
    listaFrutas.push(nome);
    alert(`${nome} adicionado à lista de frutas.`);
}

function addCongelados() {
    let nome = prompt("Digite o nome do produto congelado: ");
    listaCongelados.push(nome);
    alert(`${nome} adicionado à lista de congelados.`);
}

function addGraos() {
    let nome = prompt("Digite o nome do grão: ");
    listaGraos.push(nome);
    alert(`${nome} adicionado à lista de grãos.`);
}

function addGuloseimas() {
    let nome = prompt("Digite o nome da guloseima: ");
    listaGuloseimas.push(nome);
    alert(`${nome} adicionado à lista de guloseimas.`);
}

let opcao = 0;

while(opcao !== 5){
    
    opcao = Number(prompt("Criando lista de compras.\nEscolha uma das opções abaixo:\n[1] Para adicionar frutas\n[2] Para adicionar congelados\n[3] Para adicionar grãos\n[4] Para adicionar guloseimas\n[5] Para sair e exibir a lista\n"));

    switch(opcao) {
        case 1:
            addFrutas();
            break;
        case 2:
            addCongelados();
            break;
        case 3:
            addGraos();
            break;
        case 4:
            addGuloseimas();
            break;
        case 5:
            alert("Lista de Compras:\n" + 
                        "Frutas: " + listaFrutas.join(", ") + "\n" + 
                        "Congelados: " + listaCongelados.join(", ") + "\n" + 
                        "Grãos: " + listaGraos.join(", ") + "\n" + 
                        "Guloseimas: " + listaGuloseimas.join(", ") + "\n");
            break;
        default:
            alert("Opção inválida, tente novamente.\n");
            break;
    }

}

function removeProducts(){
    let lista = parseFloat(prompt("Digite a lista em que se encontra o produto que queira remover:\n[1] Frutas\n[2] Congelados\n[3] Graos\n[4] Guloseimas\n"))
    let nomeProdutoRemovido = ""
    switch(lista){
        case 1:
            nomeProdutoRemovido = prompt("Digite o nome do produto:\n")
            listaFrutas.splice(listaFrutas.indexOf(nomeProdutoRemovido), 1)
            alert('item removido com sucesso!\n')
            break
        case 2:
            nomeProdutoRemovido = prompt("Digite o nome do produto\n")
            listaCongelados.splice(listaCongelados.indexOf(nomeProdutoRemovido), 1)
            alert('item removido com sucesso!\n')
            break
        case 3:
            nomeProdutoRemovido = prompt("Digite o nome do produto\n")
            listaGraos.splice(listaGraos.indexOf(nomeProdutoRemovido), 1)
            alert('item removido com sucesso!\n')
            break
        case 4:
            nomeProdutoRemovido = prompt("Digite o nome do produto\n")
            listaGuloseimas.splice(listaGuloseimas.indexOf(nomeProdutoRemovido), 1)
            alert('item removido com sucesso!\n')
            break
        default:
            alert("Opção inválida")
            break
    }
}

do{
    opcao = parseFloat(prompt("Deseja remover algo da lista?\nSe sim digite [1]\nSe deseja salvar a lista e exibi-la digite [2]\n"))
    switch(opcao){
        case 1:
            removeProducts()
            break
        case 2:
            alert("Lista de Compras:\n" + "Frutas: " + listaFrutas + "\nCongelados: " + listaCongelados + "\nGraos: " + listaGraos + "\nGuloseimas:" + listaGuloseimas + "\n")
            break
        default:
            alert("Opção inválida")
    }
}while(opcao !== 2)