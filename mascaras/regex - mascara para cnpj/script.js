// regex cnpj

document.getElementById('input_cnpj').addEventListener('keyup',function(e){
    this.value = this.value.replace((/\D/g),'') // elimina caracteres não numéricos
        .replace(/(\d{2})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d)/,'$1/$2')
        .replace(/(\d{4})(\d)/,'$1-$2')
    .replace(/(-\d{2})(\d+)/,'$1');
});

// regex 2 casas decimais

document.getElementById('input_decimal').addEventListener('keyup',function(e){
    this.value = this.value.replace((/\D/g),'')
    .replace(/(\d{3})(\d{2})/,'$1,$2')
    .replace(/(\d{3})(\d)/,'$1.$2');
});