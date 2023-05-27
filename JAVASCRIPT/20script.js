//  JSON DE PRODUTOS LISTAGEM

let vetor = [
  {
    codigo: "1",
    nome: "Camisa Xadrez",
    preço: "139,90",
    imagem: "feminino/1.jpg",
    categoria: "feminino",
  },
  {
    codigo: "2",
    nome: "Camisa Xadrez Preta",
    preço: "139,90",
    imagem: "feminino/2.jpg",
    categoria: "feminino",
  },
  {
    codigo: "3",
    nome: "Regata Tecido",
    preço: "139,90",
    imagem: "feminino/3.jpg",
    categoria: "feminino",
  },
  {
    codigo: "4",
    nome: "Blusa Xadrez",
    preço: "139,90",
    imagem: "feminino/4.jpg",
    categoria: "feminino",
  },
  {
    codigo: "5",
    nome: "Blusa Xadrez",
    preço: "139,90",
    imagem: "feminino/5.jpg",
    categoria: "feminino",
  },
  {
    codigo: "6",
    nome: "Blusa Xadrez",
    preço: "139,90",
    imagem: "feminino/6.jpg",
    categoria: "feminino",
  },
  {
    codigo: "7",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "infantil/1.jpg",
    categoria: "infantil",
  },
  {
    codigo: "8",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "infantil/2.jpg",
    categoria: "infantil",
  },
  {
    codigo: "9",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "infantil/3.jpg",
    categoria: "infantil",
  },
  {
    codigo: "10",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "infantil/4.jpg",
    categoria: "infantil",
  },
  {
    codigo: "11",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "infantil/5.jpg",
    categoria: "infantil",
  },
  {
    codigo: "12",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "infantil/6.jpg",
    categoria: "infantil",
  },
  {
    codigo: "13",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "masculino/1.jpg",
    categoria: "masculino",
  },
  {
    codigo: "14",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "masculino/2.jpg",
    categoria: "masculino",
  },
  {
    codigo: "15",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "masculino/3.jpg",
    categoria: "masculino",
  },
  {
    codigo: "16",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "masculino/4.jpg",
    categoria: "masculino",
  },
  {
    codigo: "17",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "masculino/5.jpg",
    categoria: "masculino",
  },
  {
    codigo: "18",
    nome: "Blusa Estampada",
    preço: "59,90",
    imagem: "masculino/6.jpg",
    categoria: "masculino",
  },
];

// ~~JSON DE PRODUTOS (CARRINHO)~~

let carrinho = [];

// ~~LISTAR PRODUTOS~~
let listar = (opcao) => {
  // ~~OBTER A DIV PRODUTOS~~
  let produtos = document.getElementById("produtos");

  // ~~LIMPAR CONTEÚDO~~
  produtos.innerHTML = "";

  //  ~~LAÇO DE REPETIÇÃO~~
  for (let i = 0; i < vetor.length; i++) {
    // ~~CONDICIONAL~~
    if (opcao == vetor[i].categoria || opcao == "todos") {
      // ~~CRIAR UMA COLUNA~~
      let coluna = document.createElement("div");

      // ~~ESPECIFICAR CLASSES NA COLUNA~~
      coluna.classList.add("col-3");

      // ~~CRIAR UMA IMAGEM~~
      let imagem = document.createElement("img");
      imagem.src = vetor[i].imagem;

      // ~~CRIAR CLASSE PRA DEIXAR FLUIDO DENTRO DA COLUNA(PODE SER FEITO NO CSS TAMBÉM)~~
      imagem.classList.add("img-fluid");

      // ~~CRIAR O NOME DO PRODUTO~~
      let nomeProduto = document.createElement("p");
      nomeProduto.innerText = vetor[i].nome;

      // ~~CRIAR VALOR DO PRODUTO~~
      let valorProduto = document.createElement("p");
      valorProduto.innerText = vetor[i].preço;

      // ~~CRIAR UM BOTÃO~~
      let botao = document.createElement("button");
      botao.classList.add("btn", "btn-primary");
      botao.innerText = "Adicionar";
      botao.addEventListener("click", () => {
        adicionar(vetor[i].codigo);
      });

      // ~~ADICIONAR IMAGEM NA COLUNA~~
      coluna.appendChild(imagem);
      coluna.appendChild(nomeProduto);
      coluna.appendChild(valorProduto);
      coluna.appendChild(botao);

      //~~ADICIONAR COLUNA NA ROW "DIV PRODUTOS"~~
      produtos.appendChild(coluna);
    }
  }
};

// ~~FUNÇÃO PARA ADICIONAR PRODUTOS AO CARRINHO~~
let adicionar = (codigo) => {
    
  //~~ VERIFICAR SE O CODIGO EXISTE NO CARRINHO DE COMPRAS~~
  let indice = carrinho.findIndex((obj) => {
    return obj.codigo == codigo;
  });

  if (indice == -1) {
    let obj = { codigo: codigo, quantidade: 1 };
    carrinho.push(obj);
  } else {
    let obj = carrinho[indice];
    obj.quantidade += 1;
    carrinho[indice] = obj;
  }

  // ~~ ATUALIZAR ITENS SELECIONADOS~~
  itensSelecionados();
};

// ~~FUNÇÃO PARA LISTAR OS ITENS SELECIONADOS (carrinho)~~
let itensSelecionados = () => {

  // ~~OBTER O ELEMENTO exibirCarrinho~~
  let exibirCarrinho = document.getElementById("exibirCarrinho");

  // ~~LIMPAR CONTEÚDOS~~
  exibirCarrinho.innerHTML = "";

  // ~~LAÇO DE REPETIÇÃO~~
  for (let i = 0; i < carrinho.length; i++) {
    //  OBTER OS DADOS DO PRODUTO
    let produto = retornarProduto(carrinho[i].codigo);

    console.log(produto);

    //~~ CRIAR UMA COLUNA~~
    let coluna = document.createElement("div");
    coluna.classList.add("col-6");

    // ~~CRIAR IMAGEM~~
    let imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.classList.add("img-fluid");

    //~~ NOME DO PRODUTO~~
    let nomeProduto = document.createElement("p");
    nomeProduto.innerText = produto.nome;

    //~~ VALOR DO PRODUTO~~
    let valorProduto = document.createElement("p");
    valorProduto.innerText = "R$:" + produto.preço;

    // ~~ QUANTIDADE DO PRODUTO~~
    let quantidadeProduto = document.createElement("p");
    quantidadeProduto.innerText = "Quantidade:" + carrinho[i].quantidade;

    // ~~ ADICIONAR ELEMENTOS NA COLUNA~~
    coluna.appendChild(imagem);
    coluna.appendChild(nomeProduto);
    coluna.appendChild(valorProduto);
    coluna.appendChild(quantidadeProduto);

    //~~ ADICIONAR NA LINHA~~
    exibirCarrinho.appendChild(coluna);
  }
};

//~~ RETORNAR UM OBJETO DO VETOR, ATRAVES DO CÓDIGO DO PRODUTO~~
let retornarProduto = (codigo) => {
  let indice = vetor.findIndex((obj) => {
    return obj.codigo == codigo;
  });

  return vetor[indice];
};

// ~~ FUNÇÃO DE PESQUISAR PRODUTO~~~
let pesquisar = () => {
  // OBTER O TERMO PESQUISADO
  let termo = document.getElementById("termo").value;

  // ~~OBTER A DIV PRODUTOS~~
  let produtos = document.getElementById("produtos");

  // ~~LIMPAR CONTEÚDO~~
  produtos.innerHTML = "";

  //  ~~LAÇO DE REPETIÇÃO~~
  for (let i = 0; i < vetor.length; i++) {
    // ~~CONDICIONAL~~
    if (vetor[i].nome.toLowerCase().indexOf(termo.toLowerCase()) != -1) {
      // CRIAR UMA COLUNA
      let coluna = document.createElement("div");

      // ~~ESPECIFICAR CLASSES NA COLUNA~~
      coluna.classList.add("col-3");

      // ~~CRIAR UMA IMAGEM~~
      let imagem = document.createElement("img");
      imagem.src = vetor[i].imagem;

      // ~~CRIAR CLASSE PRA DEIXAR FLUIDO DENTRO DA COLUNA(PODE SER FEITO NO CSS TAMBÉM)~~
      imagem.classList.add("img-fluid");

      // ~~CRIAR O NOME DO PRODUTO~~
      let nomeProduto = document.createElement("p");
      nomeProduto.innerText = vetor[i].nome;

      // ~~CRIAR VALOR DO PRODUTO~~
      let valorProduto = document.createElement("p");
      valorProduto.innerText = vetor[i].preço;

      // ~~CRIAR UM BOTÃO~~
      let botao = document.createElement("button");
      botao.classList.add("btn", "btn-primary");
      botao.innerText = "Adicionar";
      botao.addEventListener("click", () => {
        adicionar(vetor[i].codigo);
      });

      // ~~ADICIONAR IMAGEM NA COLUNA~~
      coluna.appendChild(imagem);
      coluna.appendChild(nomeProduto);
      coluna.appendChild(valorProduto);
      coluna.appendChild(botao);

      //~~ADICIONAR COLUNA NA ROW "DIV PRODUTOS"~~
      produtos.appendChild(coluna);
    }
  }
};
