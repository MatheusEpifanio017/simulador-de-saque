let saldo = 200;

const $inputSaque = document.getElementById("ValorDoSaque");

const $displaySaldo = document.getElementById("saldo");

const $inputDeposito = document.getElementById("ValorDoDeposito")

const $displayMensagem = document.getElementById("mensagem");
 
const $displayMensagem2 = document.getElementById("mensagem2")

$displaySaldo.innerText = saldo;

function realizarSaque() {

    const valorASacar = (Number($inputSaque.value));

    if (isNaN(valorASacar) || valorASacar < 0) {
        $displayMensagem.innerText = "O VALOR DIGITADO É INVALIDO"
        return
    }


    if (valorASacar > saldo) {
        $displayMensagem.innerText = "NÃO POSSUI SALDO SUFIENTE!"
        return 
    }
   


     saldo = saldo - valorASacar
     $displaySaldo.innerText = saldo;

     $displayMensagem.innerText = "SAQUE REALIZADO!"

  
}

function realizarDeposito() {

    const ValorDoDeposito = (Number($inputDeposito.value));
     
    if (ValorDoDeposito < 1) {
        $displayMensagem2.innerText = "VALOR NÃO SUFICIENTE PARA DEPOSITO!"
        return
    }
     
 
        
    
 console.log(saldo,ValorDoDeposito)

    saldo = saldo + ValorDoDeposito

    console.log(saldo)

    $displaySaldo.innerText = saldo
    $displayMensagem2.innerText = "DEPOSITO REALIZADO!"
    
}
    


