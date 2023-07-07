document.getElementById('input_decimal').addEventListener('keyup',function(e){
    this.value = regexDecimal(this.value.replace(/[^0-9]/g, ''));
});

function regexDecimal(valor){
    return valor.replace(/(\d)(\d{2})$/,'$1.$2');
    // console.log(str);
}