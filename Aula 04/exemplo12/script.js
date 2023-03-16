function calcularIMC(){
   let peso = Number(document.getElementById("peso").value)
   let altura = Number(document.getElementById("altura").value)
   let imc = peso/(peso*altura)
   document.getElementById("res").innerHTML = imc

   var classificacao =""

   if(imc < 18.5){
    classificacao = "Desnutrição"
   }

   else if(imc < 25){
     classificacao = "Peso normal"
   }

   else if(imc < 30){
    classificacao = "Sobrepeso"
   }

   else if(imc < 35){
    classificacao = "Obsidade I"
   }

   else if(imc < 40){
    classificacao = "Obsidade II"
   }

   else{
    classificacao = "Obsidade III"
   }

  document.getElementById()

 /*
   console.log("peso:"+peso)
   console.log("peso:"+altura)
   console.log("IMC"+imc)
*/

}