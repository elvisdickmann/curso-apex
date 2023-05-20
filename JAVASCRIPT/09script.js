// 1 VETOR

let dados = [];

//  2 CADASTRAR DADOS FICTICIOS TEMPORARIOS
dados.push({ nome: "Elvis", email: "elvis.dickmann@hotmail.com", idade: 25 });
dados.push({
  nome: "Gabriel",
  email: "gabriel.dickmann@hotmail.com",
  idade: 22,
});
dados.push({ nome: "Láscia", email: "lascia.dickmann@hotmail.com", idade: 50 });

// TESTAR QUANTOS OBJTOS TEM
document.write(dados.length);

// VARIAVEL PARA ARMAZENAR A POSIÇÃO VETOR
let posicaoVetor;


// CRIAR METODO PARA LISTAR DADOS
function listar() {
  // OBTER ELEMENTO TABELA
  let tabela = document.getElementById("tabela");

  //REMOVER TODAS AS LINHAS E COLUNAS
  tabela.innerHTML = "";

  // CRIAR UM LAÇO DE REPETIÇÃO

  for (let i = 0; i < dados.length; i++) {
    // criar variavel linha e  dentro do laço criar linha de tabela
    let linha = tabela.insertRow(-1);

    // criar coluna
    let coluna1 = linha.insertCell(0);
    let coluna2 = linha.insertCell(1);
    let coluna3 = linha.insertCell(2);
    let coluna4 = linha.insertCell(3);
    let coluna5 = linha.insertCell(4);

    // CONTEUDOS DAS COLUNAS
    coluna1.innerText = i + 1;
    coluna2.innerText = dados[i].nome;
    coluna3.innerText = dados[i].email;
    coluna4.innerText = dados[i].idade;
    coluna5.innerHTML = `<button class="btn btn-success" onclick="selecionar(${i})">Selecionar</button>`;
  }
}

// METODO PARA CADASTRAR
function cadastrar() {

  // OBTER DADOS DO FORMULARIO
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let idade = document.getElementById("idade");

  //   VALIDAÇÃO
  if (nome.value == "") {
    alert("O campo nome precisa ser preenchido!");
    nome.focus();
  } else if (nome.value.length < 3) {
    alert("Informe um nome válido!");
    nome.focus();
  } else if (email.value == "") {
    alert("O campo email precisa ser preenchido!");
    email.focus();
  } else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
    alert("Informe um e-mail válido!");
    email.focus();
  } else if (idade.value == ""){
    alert("O campo idade precisa ser preenchido!");
    idade.focus();
  } else if (isNaN(idade.value) == true) {
    alert("O campo idade deve conter apenas números");
    idade.focus();
  } else{
    // CADASTRAR NO VETOR
    dados.push({
      nome: nome.value,
      email: email.value,
      idade: idade.value,
    });

    // Atualizar tabela
    listar();

    // Limpar os INPUTS
    nome.value = "";
    email.value = "";
    idade.value = "";

    // CURSOS NO CAMPO NOME
    nome.focus();
  }
}

// METODO PARA SELECIONAR
function selecionar(indice){

    // DISPOR O VALOR DO INDIE NA VARIAVEL posicaoVetor

    posicaoVetor = indice;

    // EXIBIR OS DADOS PESSOAIS NO FORMULARIO
    document.getElementById("nome").value = dados[indice].nome;
    document.getElementById("email").value = dados[indice].email;
    document.getElementById("idade").value = dados[indice].idade;


    // VISIBILIDADE DOS BOTOES
    document.getElementById("btnCadastrar").style.display = "none";
    document.getElementById("btnAlterar").style.display = "inline-block";
    document.getElementById("btnRemover").style.display = "inline-block";
    document.getElementById("btnCancelar").style.display = "inline-block";
}

    function cancelar() {

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("idade").value = "";
    
    
        // VISIBILIDADE DOS BOTOES
        document.getElementById("btnCadastrar").style.display = "inline-block";
        document.getElementById("btnAlterar").style.display = "none";
        document.getElementById("btnRemover").style.display = "none";
        document.getElementById("btnCancelar").style.display = "none";

    }


    // METODO PARA EXCLUIR

    function excluir() {

        //REMOVER DADOS DO VETOR
        dados.splice(posicaoVetor, 1);

        // ATUALIZAR A TABELA

        listar();

        // LIMPAR OS CAMPOS E TRABALHAR A VISIBILIDADE DOS BOTOES
        cancelar();

    }

    // METODO PARA ALTERAR
    function alterar(){

        // OBTER DADOS DO FORMULARIO
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let idade = document.getElementById("idade");
      
        //   VALIDAÇÃO
        if (nome.value == "") {
          alert("O campo nome precisa ser preenchido!");
          nome.focus();
        } else if (nome.value.length < 3) {
          alert("Informe um nome válido!");
          nome.focus();
        } else if (email.value == "") {
          alert("O campo email precisa ser preenchido!");
          email.focus();
        } else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
          alert("Informe um e-mail válido!");
          email.focus();
        } else if (idade.value == ""){
          alert("O campo idade precisa ser preenchido!");
          idade.focus();
        } else if (isNaN(idade.value) == true) {
          alert("O campo idade deve conter apenas números");
          idade.focus();
        } else{

          // ALTERAR DADOS NO VETOR
        let pessoa = {
                "nome": nome.value,
                "email": email.value,
                "idade": idade.value,
              }

              dados[posicaoVetor] = pessoa;


              //LIMPAR CAMPOS E VISIBILIDADE DOS BOTOES
              cancelar();
              
        
      
          // Atualizar tabela
          listar();
      
          // Limpar os INPUTS
          nome.value = "";
          email.value = "";
          idade.value = "";
      
          // CURSOS NO CAMPO NOME
          nome.focus();
        }
      }


    

