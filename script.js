// Definindo atalhos de funções
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

// Definindo variáveis globais
const emailLogin = query('#login-email');
const senhaLogin = query('#login-senha');
const botaoLogin = query('#login-botao');
const botaoSubmit = query('#submit-btn');
const inputAceitar = query('#agreement');
const inputTextArea = query('#textarea');
const counter = query('#counter');

// ---- Verificando credenciais do Login
function verificarEmail() {
  if (emailLogin.value === 'tryber@teste.com') return true;
  return false;
}

function verificarSenha() {
  if (senhaLogin.value === '123456') return true;
  return false;
}

function emitirAvisoCasoAutenticado(event) {
  event.preventDefault();
  if (verificarSenha() && verificarEmail()) {
    alert('Olá, Tryber!');
    return;
  }

  alert('Email ou senha inválidos.');
}

botaoLogin.addEventListener('click', emitirAvisoCasoAutenticado);

// ---- Travando o botão caso o checkbox não tenha sido marcado

function habilitarDesabilitarBotao() {
  if (inputAceitar.checked) botaoSubmit.disabled = false;
  if (!inputAceitar.checked) botaoSubmit.disabled = true;
}

// ---- Função para fazer a lógica do Contador de Caracteres
function characterCounter() {
  const currentCount = inputTextArea.value;
  const characters = currentCount.split('').length;
  counter.innerText = 500 - characters;
}

// Aplicando a lógica do contador de caracteres do TextArea
inputTextArea.addEventListener('keyup', characterCounter);

// Verificando a quantidade de caracteres disponiveis no textArea

inputAceitar.addEventListener('click', habilitarDesabilitarBotao);

// ---- Adicionando informações do formulário na área de respostas
function colocarMaterias() {
  const materias = queryAll('input[name="materias"]:checked');
  for (let i = 0; i < materias.length; i += 1) {
    if (i === 0) {
      query('#materias').innerText += ` ${materias[i].value}`;
    } else {
      query('#materias').innerText += `, ${materias[i].value}`;
    }
  }
}

function atualizarDados(event) {
  const name = query('#input-name').value;
  const lastName = query('#input-lastname').value;

  event.preventDefault();
  query('#nome').innerText += ` ${name} ${lastName}`;
  query('#email').innerText += ` ${query('#input-email').value}`;
  query('#casa').innerText += ` ${query('#house').value}`;
  query('#familia').innerText += ` ${query('input[name="family"]:checked').value}`;
  colocarMaterias();
  query('#avaliacao').innerText += ` ${query('input[name="rate"]:checked').value}`;
  query('#observacoes').innerText += ` ${query('#textarea').value}`;
}

botaoSubmit.addEventListener('click', atualizarDados);
