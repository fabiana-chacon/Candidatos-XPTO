
var titulo = document.querySelector(".titulo");


function calcIdade() {
  var data = document.getElementById('datadenasc').value
  var ano_atual = new Date().getFullYear();
  var ano = ano_atual - parseInt(data);
    
    var ano

      return ano

     
    
}


function maior_Idade(){


  var data = document.getElementById('datadenasc').value
  var ano_atual = new Date().getFullYear();
  var data_Atual = ano_atual - parseInt(data);
  
  if (data_Atual >= 18){
    
     return "Sim"
}
  if (data_Atual< 18){

    return "Não"
  }

}









