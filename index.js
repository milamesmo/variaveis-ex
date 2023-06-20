var mensagem = "Página carregada com sucesso!" 
alert(mensagem);

var x = parseInt(prompt("Digite um número ",""));
var y= parseInt(prompt("Digite outro número para somar ",""));

var z= parseInt(x)+parseInt(y);
var w= parseInt(x)!=parseInt(y);

if (w == false) {
   var resp ="Não";
 } 
else {
   var resp = "Sim";
 }

document.write("Seu valor para x: ", x, '<br>')
document.write("Seu valor para y: ", y, '<br><br>')

document.write("Soma de x+y é: "+ z,'<br>');
document.write("divisão de x/y é: "+ x/y, '<br>');
document.write("Multiplicação de x*y é: "+ x*y, '<br>');
document.write("Os valores são diferentes? "+ resp,'<br>');