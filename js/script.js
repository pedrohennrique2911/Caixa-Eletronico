var saldo = 100.5; //Float
function inicio() {

    /* inicio desafio 1 */
    var nomeUsuario = prompt("Qual seu nome?")
    alert(`Olá ${nomeUsuario} é um prazer ter você por aqui!`)
    /* final desafio 1 */



    var escolha = parseInt(prompt(`
Selecione uma opção 
1.) Saldo
2.) Depósito 
3.) Saque
4.) Extrato
5.) Transferência
6.) Sair
`));

   
    /* inicio desafio 2 */
    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            fazer_deposito();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            extrato();
            break;
        case 5:
            transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function extrato() {
    var compras = ["Torra Torra = R$20,20", "Bigas Cone = R$7,00", "Mc Donalds = R$45,99", "Açai Doces = R$ 15,00"]
        alert(compras)
}

function transferencia() {
    
    var usuarioRecebedor = parseInt(prompt("Digite o numero da conta:"))
    if (isNaN(usuarioRecebedor) || usuarioRecebedor === '') {
        alert('Por favor, informe um número:');
        transferencia()
    }
    var senha = Number(prompt('Informe sua senha:'))
    while(senha != 3589){
        fazer_deposito()

    }
   var tra = Number(prompt('Qual o valor para transferência?'))
   if(tra > saldo || tra <= 0){
    alert("Operação não autorizada!")
   }else{
    saldo -= tra
    ver_saldo()
   }
}


/* final desafio 2 */

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function fazer_deposito() {
    var senha = Number(prompt('Informe sua senha:'))
    while(senha != 3589){
        fazer_deposito()

    }
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else {
        saldo += deposito;
        ver_saldo();
    }
    
}

/* inicio desafio 3 */
function fazer_saque() {
    var senha = Number(prompt('Informe sua senha:'))
    while(senha != 3589){
        fazer_saque()

    }
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número:');
        fazer_saque();
        return;
    }
    /* desafio 4 =>> || saque <= 0 */
    if (saque > saldo || saque <= 0) {
        alert("Operação não autorizada")
    } else {
        saldo -= saque;
    }
    ver_saldo();
}
/* final desafio 3 */



function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}



inicio();