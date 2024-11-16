document.addEventListener('DOMContentLoaded', () => {
    const consultarCEP = async (cep) => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error('failed request');
        const cepData = await response.json();
  
        if (cepData.erro) {
            throw new Error('CEP inexistente.');
        }

        return cepData;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
  
    const printCepData = (data) => {
      document.getElementById('output').innerHTML = `
        <strong>CEP:</strong> ${data.cep}<br>
        <strong>Logradouro:</strong> ${data.logradouro}<br>
        <strong>Bairro:</strong> ${data.bairro}<br>
        <strong>Cidade:</strong> ${data.localidade}<br>
        <strong>Estado:</strong> ${data.uf}
      `;
    };
  
    document
      .getElementById('submitCep')
      .addEventListener('click', async () => {
        console.log("hello")
        const cep = document.getElementById('cepField').value.trim();
        const outputElement = document.getElementById('output');
    
        if (!/^[0-9]{8}$/.test(cep)) { outputElement.textContent = 'CEP não está formatado corretamente.'; return; }
    
        try {
          const data = await consultarCEP(cep);
          printCepData(data);
        } catch (error) {
          outputElement.textContent = error.message;
        }
    });
  });