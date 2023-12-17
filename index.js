document.getElementById('customerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Obtenha a data de nascimento do formulário
    const birthDateInput = document.getElementById('birthdate');
    const birthDate = new Date(birthDateInput.value);
  
    // Verifique se o usuário tem pelo menos 18 anos
    if (calculateAge(birthDate) < 18) {
      showError('Você deve ter pelo menos 18 anos para se cadastrar.');
      return;
    }
  
    // Se a validação passar, continue com o envio do formulário
    var formData = new FormData(this);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    // Adicione a lógica para enviar os dados para o servidor, etc.
  });
  
  // Função para calcular a idade com base na data de nascimento
  function calculateAge(birthDate) {
    const today = new Date();
    const diff = today - birthDate;
    return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
  }
  
  // Função para exibir mensagens de erro
  function showError(message) {
    // Adicione lógica para exibir a mensagem de erro onde for apropriado (por exemplo, abaixo do formulário)
    alert(message);
  }
  