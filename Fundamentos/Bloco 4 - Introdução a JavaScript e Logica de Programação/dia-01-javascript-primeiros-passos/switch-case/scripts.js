let estado = "lista";

switch (estado){
  case "aprovada":
    console.log ("Parabens, você foi aprovada");
  break;

  case "lista":
    console.log ("Você está na lista de espera!");
  break;

  case "reprovada":
    console.log ("Infelizmente você foi reprovada!");
  break;

  default:
    console.log ("Não se aplica");
}