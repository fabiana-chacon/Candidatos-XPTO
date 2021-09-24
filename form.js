
var botaoAdicionar = document.querySelector("#adicionar-candidato");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  
var candidato = obtemCandidatoDoFormulario (form);

var candidatoTr = montaTr(candidato);


var erros = validaCandidato (candidato);

console.log (erros);

if(erros.length > 0 ){
exibeMensagensDeErro (erros);

  return;
}



adicionaCandidatoNaTela(candidato);

form.reset();
var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";
});

function adicionaCandidatoNaTela(candidato){
  var candidatoTr = montaTr(candidato);
  var tabela = document.querySelector("#tabela-candidatos");
  tabela.appendChild(candidatoTr);
  }
  
  
  function exibeMensagensDeErro (erros){
    var ul = document.querySelector("#mensagens-erro");
     ul.innerHTML ="";
  
  
  
     erros.forEach(function(erro){
    var li = document.createElement ("li");
    li.textContent = erro;
    ul.appendChild (li);
  });
  
  }
  
 

  
  function obtemCandidatoDoFormulario (form){
  
  var candidato ={
     nome : form.nome.value,
     sobrenome : form.sobrenome.value,
     cpf : form.cpf.value,
     datadenasc : form.datadenasc.value, 
     idade: calcIdade(),
     maior_de_idade: maior_Idade(),
  
  }
  
  return candidato;

}


function montaTr(candidato){

  var candidatoTr = document.createElement("tr");
  candidatoTr.classList.add ("candidato");

  

var nomeTd = montaTd (candidato.nome, "info-nome");
var sobrenomeTd = montaTd ( candidato.sobrenome, "info-sobrenome");
var cpfTd = montaTd ( candidato.cpf, "info-cpf");
var datadenasc = montaTd ( candidato.datadenasc, "info-datadenasc");
var idade = montaTd ( candidato.idade, "info-idade");
var maior_de_idade = montaTd (candidato.maior_de_idade, "info-maior_Idade");


  candidatoTr.appendChild(nomeTd);
  candidatoTr.appendChild(sobrenomeTd);
  candidatoTr.appendChild(cpfTd);
  candidatoTr.appendChild(datadenasc);
  candidatoTr.appendChild (idade);
  candidatoTr.appendChild (maior_de_idade);
  
  
  return candidatoTr;

}


function montaTd(dado,classe){
var td = document.createElement("td");
td.textContent = dado;
td. classList.add(classe);


return td;

}



function validaCandidato(candidato){

  var erro =[];


if (candidato.nome.length==0){
  erro.push ( "O nome do candidato não pode ficar em branco");
  nome.focus ();
}
if (candidato.sobrenome.length ==0){
  erro.push ( "O Sobrenome do candidato não pode ficar em branco");
  sobrenome.focus();
}
if ((candidato.cpf.length< 11)||(candidato.cpf.length>11)){
erro.push ( "O CPF não está correto");
cpf.focus();
}


if ( candidato.datadenasc.length==0){
 erro.push ( "A data de nascimento não pode ficar em branco");
}


return erro;


}

