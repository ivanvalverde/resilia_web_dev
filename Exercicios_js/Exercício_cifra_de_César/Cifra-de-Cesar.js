

function esconde() {
    var input = document.getElementById("textoCodificacao").value;
    var jump = document.getElementById("salto").value;
    var caracteres = input.split("");
    var codigoCaracteres = [];
    var letrasCodificadas = [];
  
    
    for(var i = 0; i < caracteres.length; i++) {
      var codigoLetra = caracteres[i].charCodeAt(0);
      codigoCaracteres.push(parseInt(codigoLetra) + parseInt(jump));
    }
    
    for (var i = 0; i < codigoCaracteres.length; i++ ) {
      
      letrasCodificadas.push(String.fromCharCode(codigoCaracteres[i]));
    }
  
  return letrasCodificadas.join("");
}

function revela() {
    var input2 = document.getElementById("textoDecodificacao").value;
    var jump2 = document.getElementById("salto2").value;
    var caracteres = input2.split("");
    var codigoCaracteres = [];
    var letrasDecodificadas = [];
  
    
    for(var i = 0; i < caracteres.length; i++) {
      var codigoLetra = caracteres[i].charCodeAt(0);
      codigoCaracteres.push(codigoLetra - jump2);
    }
  
    
    for (var i = 0; i < codigoCaracteres.length; i++ ) {
      
      letrasDecodificadas.push(String.fromCharCode(codigoCaracteres[i]));
    }
  
  return letrasDecodificadas.join("");
}