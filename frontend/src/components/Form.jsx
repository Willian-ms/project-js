import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    cpf: '',
    rg: '',
    nascimento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar dados para a API
    fetch('/createClients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Tratar a resposta da API
        console.log(data);
        window.location.reload()
      })
      .catch((error) => {
        // Tratar erros na chamada à API
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Endereço:
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Telefone:
          <input max={20} type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          CPF:
          <input maxLength={11} type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          RG:
          <input maxLength={7} type="text" name="rg" value={formData.rg} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Nascimento:
          <input maxLength={10} type="text" name="nascimento" value={formData.nascimento} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
