function coletarDados(){
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    calcularIMC(peso,altura)
}


function calcularIMC(argPeso,argAltura){
    //console.log(argPeso)
    //console.log(argAltura)
    let imc = argPeso/(argAltura*argAltura)
    document.getElementById("res").innerHTML = imc
    classificacao(imc)
 }
 
 function classificacao(argimc){
     var classificacao =""
 
    if(argimc < 18.5){
     classificacao = "Desnutrição"
    }
 
    else if(argimc < 25){
      classificacao = "Peso normal"
    }
 
    else if(argimc < 30){
     classificacao = "Sobrepeso"
    }
 
    else if(argimc < 35){
     classificacao = "Obsidade I"
    }
 
    else if(argimc < 40){
     classificacao = "Obsidade II"
    }
 
    else{
     classificacao = "Obsidade III"
    }
 
   document.getElementById("Status").innerHTML = classificacao
 
 }