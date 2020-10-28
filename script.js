//Regras de interação
//1. se os campos de nome e (&&) email estiverem preenchidos, enviar os dados
//2. se não, pedir a usuarie que preencha os campos
//Essa regra origina um comando condicional

//O if testa se os campos estão vazios ou não
//O méto do getElementByID "pega" o conteúdo do atributo ID 
//especificado no parâmetro

document.getElementById("buttonSend").addEventListener("click", validarFormulario());

function validarFormulario(){

  if(document.getElementById("nome").value != "" &&  
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != ""){
    alert("Pronto! Você receberá as novidades por email.")
  }else{
    alert("Os campos nome/email/telefone devem ser preenchidos!");
  }
//alert("string") é um méto do para exibição de msg de alerta
}
//o ouvidor (EventListener) de eventos precisa de 3 informações
//1. de onde virá o evento
//2. qual evento ele deve ouvidor
//3. açao que ele deve fazer qnd o evento acontecer
// Estrutura:
// IDquesofreoevento.addEventListener("evento", açao);
