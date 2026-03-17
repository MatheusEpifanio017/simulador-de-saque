let saldo = 200;

const $inputSaque = document.getElementById("ValorDoSaque");
const $displaySaldo = document.getElementById("saldo");

const $displayMensagem = document.getElementById("mensagem");

$displaySaldo.innerText = saldo;

function realizarSaque() {

    const valorASacar = (Number($inputSaque.value));

    if (isNaN(valorASacar) || valorASacar < 0) {
        $displayMensagem.innerText = "valor digitado é invalido"
        return
    }


    if (valorASacar > saldo) {
        $displayMensagem.innerText = "Não tem saldo"
        return 
    }
   


     saldo = saldo - valorASacar.toFixed(2);
     $displaySaldo.innerText = saldo;

     $displayMensagem.innerText = "saque realizado"


    
}

