function validarCPF() {
    var cpf = document.getElementById('cpfInput').value.replace(/[^\d]+/g,'');
    
    if(cpf == '' || cpf.length != 11) {
      document.getElementById('resultado').innerHTML = '<div class="alert alert-danger" role="alert">CPF inválido</div>';
      return false;
    }
    
    // Validando CPF
    var soma = 0;
    var resto;
    
    for (var i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto == 10) || (resto == 11)) {
      resto = 0;
    }
    
    if (resto != parseInt(cpf.substring(9, 10))) {
      document.getElementById('resultado').innerHTML = '<div class="alert alert-danger" role="alert">CPF inválido</div>';
      return false;
    }
    
    soma = 0;
    
    for (var i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto == 10) || (resto == 11)) {
      resto = 0;
    }
    
    if (resto != parseInt(cpf.substring(10, 11))) {
      document.getElementById('resultado').innerHTML = '<div class="alert alert-danger" role="alert">CPF não encontrado >:( coloca certo ae</div>';
      return false;
    }
    
    document.getElementById('resultado').innerHTML = '<div class="alert alert-success" role="alert">Clonei seu cartão :)</div>';
  }
  