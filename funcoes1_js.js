/*
Crie um arquivo chamado funcoes1_js.html, e vamos fazer um algoritmo:

a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

*/

function validaCpf(cpf) {
  if (cpf.length === 11 && !isNaN(cpf)) {
    return true;
  } else {
    return false;
  }
}

function formataCpf(cpf) {
  let mascaraCpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
    6,
    9
  )}-${cpf.slice(9, 11)}`;
  return mascaraCpf;
}

function exibeCpf(cpf) {
  if (validaCpf(cpf)) {
    alert(formataCpf(cpf));
  } else {
    alert(
      `CPF inválido, digite novamente um CPF válido. Utilize somente números.`
    );
  }
}

let cpfDigitado = prompt(
  `Digite o seu CPF, sem pontos e vírgulas, apenas números.`
);

exibeCpf(cpfDigitado);

// console.log(validaCpf(cpfDigitado));
// console.log(formataCpf(cpfDigitado));
// console.log(exibeCpf(cpfDigitado));
