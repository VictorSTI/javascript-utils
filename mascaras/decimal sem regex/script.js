
document.getElementById('input_decimal').addEventListener('keyup', function (e) {
    this.value = mascaraDecimal(this.value);
});

function mascaraDecimal(valor) {
    // se o valor do input for vazio
    if (valor == "") {
        return '0.00';
    } else {
        // valor recebe apenas os caracteres numéricos
        valor = valor.replace(/[^0-9]/g, '');
    }

    // converte o valor para INT removendo zeros à esquerda
    valor = parseInt(valor);
    // converte o valor novamente para string
    valor = valor.toString();

    if (valor.length == 1) {
        return '0.0' + valor;
    } else if (valor.length == 2) {
        return '0.' + valor;
    } else {
        return valor.slice(0, -2) + '.' + valor.slice(-2);
    }
}

// MÁSCARA PARA CNPJ
document.getElementById('input_cnpj').addEventListener('keyup',function(e){
    this.value = mascaraCnpj(this.value.replace(/[^0-9]/g, ''));
});

function mascaraCnpj(valor){//console.log(valor.slice(3));return;
    let str;

    switch(true){
        case valor.length <= 2:
            return valor;
        break;

        case valor.length >= 3 && valor.length <= 5:
            str = valor.slice(0,2) + '.' + valor.slice(2);
            return str;
        break;

        case valor.length >= 6 && valor.length <= 8:
            str = valor.slice(0,2) + '.' + valor.slice(2,5) + '.' + valor.slice(5);
            return str;
        break;

        case valor.length >=9 && valor.length <= 12:
            str = valor.slice(0,2) + '.' + valor.slice(2,5) + '.' + valor.slice(5,8) + '/' + valor.slice(8);
            return str;
        break;

        case valor.length >= 13 && valor.length <= 14:
            str = valor.slice(0,2) + '.' + valor.slice(2,5) + '.' + valor.slice(5,8) + '/' + valor.slice(8,12) + '-' + valor.slice(12);
            return str;
        break;

        default:
            str = valor.slice(0,2) + '.' + valor.slice(2,5) + '.' + valor.slice(5,8) + '/' + valor.slice(8,12) + '-' + valor.slice(12,14);
            return str;
        break;
    }
}