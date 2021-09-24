
var titulo = document.querySelector(".titulo");


//var data = document.getElementById('datadenasc').value
//var ano_atual = new Date().getFullYear();
//var data_Atual = ano_atual - parseInt(data);

var data =document.getElementById('datadenasc').value
 var ver_data = data.substring(8,10);

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








     
      //var mes = data.substring(5,7);
      //var ano = data.substring(0,4);

      
//var data_de_nascimento = ( dia+"/"+mes+"/"+ano) ;



//return data_de_nascimento


