function Cadastrar() {
    const nomeCompleto = document.getElementById("Nome_completo").value;
    const numeroApt = document.getElementById('Numero_apt').value;
    const blocoApt = document.getElementById('Bloco_apt').value;
    const placaVeiculo = document.getElementById('Placa').value;
    const modeloVeiculo = document.getElementById('Modelo').value;
    const corVeiculo = document.getElementById('Cor').value;
    const numeroVaga = document.getElementById('Numero_vaga').value;

    console.log("Nome: " + nomeCompleto + 
                "\nNúmero do Apartamento: " + numeroApt +
                "\nBloco do Apartamento: " + blocoApt +
                "\nPlaca do Veículo: " + placaVeiculo +
                "\nModelo do Veículo: " + modeloVeiculo +
                "\nCor do Veículo: " + corVeiculo +
                "\nNúmero da Vaga de Estacionamento: " + numeroVaga)

    alert("Cadastro realizado com sucesso!")
}


