generateAndValidateCPF();

function generateAndValidateCPF() {
    var cpf;
    
    do {
      // Primeiros 9 dígitos são gerados aleatoriamente
      cpf = '';
      for (var i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 9);
      }
    
      // Calcula os dois dígitos verificadores
      var digit1 = calcDigit(cpf, 10);
      var digit2 = calcDigit(cpf + digit1, 11);
    
      // Concatena os 9 dígitos aleatórios com os dígitos verificadores
      cpf += digit1 + digit2;
    } while (!isValidCPF(cpf));
    
    console.log("CPF válido gerado: " + cpf);
  }
  
  function calcDigit(cpf, limit) {
    var sum = 0;
    
    for (var i = 0; i < cpf.length; i++) {
      sum += parseInt(cpf[i]) * (limit - i);
    }
    
    var digit = 11 - (sum % 11);
    
    // Se o dígito for maior que 9, retorna 0
    return digit > 9 ? 0 : digit;
  }
  
  function isValidCPF(cpf) {
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
    
    // Verifica se todos os dígitos são iguais
    var firstDigit = cpf[0];
    for (var i = 1; i < 11; i++) {
      if (cpf[i] !== firstDigit) {
        break;
      }
      
      if (i === 10) {
        return false;
      }
    }
    
    // Verifica os dois dígitos verificadores
    var digit1 = calcDigit(cpf, 10);
    var digit2 = calcDigit(cpf, 11);
    
    return cpf[9] === digit1.toString() && cpf[10] === digit2.toString();
  }
  