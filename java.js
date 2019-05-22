function somar() {
    {
    soma.somado.value = parseInt(soma.n1.value) + parseInt(soma.n2.value)
    if  ( soma.somado.value  <  0)  
      alert ("Inválido");
    else   
      alert ("Foi adicionado ao carrinho!");
 
    }
  }
  
  function desconto(){

     var cd = document.getElementById("cd").value;
    var desconto;
    var un = document.getElementById("un").value;

    if(cd=="1") desconto = (20 * 30) / 100;
  desconto = 20 - desconto; desconto = desconto * parseInt(un);
    if(cd=="2" || cd == "10" || cd=="11") desconto = (2.5 * 30) / 100;
    desconto = 2.5 - desconto;
    if(cd=="3") desconto = (10 * 30) / 100;
    desconto = 10 - desconto;
    if(cd=="4" || cd=="5" || cd=="7") desconto = (3 * 30) / 100;
    desconto = 3 - desconto;
    if(cd=="6") desconto = (4 * 30) / 100;
    desconto = 4 - desconto;
    if(cd=="8") desconto = (8.5 * 30) / 100;
    desconto = 8.5 - desconto;
    if(cd=="9") desconto = (3.5 * 30) / 100;
    desconto = 3.5 - desconto; 
    

    document.getElementById("desconto").innerHTML = desconto;
   

  }