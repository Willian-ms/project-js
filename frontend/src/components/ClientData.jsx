import React, { useState } from 'react';
import Modal from './Modal';

const ClientData = ({ clients }) => {
  const [selectedClient, setSelectedClient] = useState({});
  const [show, setShow] = React.useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = (event) =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar dados para a API
    fetch(`/updateClients/${selectedClient.id}`, {
      method: 'PUT',
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
  }

  const handleDelete = (e) => {
    e.preventDefault();

    // Enviar dados para a API
    fetch(`/deleteClients/${selectedClient.id}`, {
      method: 'DELETE',
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
  }

  const handleRowClick = (client) => {
    setSelectedClient(client);
    setShow(true)
    setFormData(client)
    console.log(client)
  };

  return(
    <>
      {
        clients.map((curClient, index) =>{
          return(
            <tr key={index} onClick={() => handleRowClick(curClient)}>
              <td>{curClient.nome}</td>
              <td>{curClient.endereco}</td>
              <td>{curClient.telefone}</td>
              <td>{curClient.cpf}</td>
              <td>{curClient.rg}</td>
              <td>{curClient.nascimento}</td>
            </tr>      
          )
        })
      }
      <Modal title="Editar Cliente" onClose={() => setShow(false)} show={show}>
      <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          </label>
          <label>
            Endereço:
            <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
          </label>
          <label>
            Telefone:
            <input maxLength={20} type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
          </label>
          <label>
            CPF:
            <input type="text" maxLength={11} name="cpf" value={formData.cpf} onChange={handleChange} />
          </label>
          <label>
            RG:
            <input type="text" maxLength={7} name="rg" value={formData.rg} onChange={handleChange} />
          </label>
          <label>
            Nascimento:
            <input type="text" maxLength={10} name="nascimento" value={formData.nascimento} onChange={handleChange} />
          </label>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
            <div>
              <button type="submit">Salvar</button>
            </div>
            <div>
              <button onClick={handleDelete}>Excluir</button>
            </div>
          </div>
      </form>
      </Modal>
    </>
  )
}

export default ClientData;