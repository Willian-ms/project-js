import React, {useEffect, useState} from "react";
import {NumericFormat} from "react-number-format"



const FormService = () => {
  const [formData, setFormData] = useState ({})
  const [clients, setClients] = React.useState([]);

  //Trazer clientes do bd
  React.useEffect(() =>{
    fetch("/clients")
      .then((res) => res.json())
      .then((clients) => setClients(clients))
  }, [])
  console.log(clients)

  const handleSubmit = (e) =>{
    e.preventDefault()

    const sobrancelha = e.target.elements.sobrancelha.checked;
    const boca = e.target.elements.boca.checked;
    const olhos = e.target.elements.olhos.checked;
    const capilar = e.target.elements.capilar.checked;
    const valor = e.target.elements.valor.value;
    const pagamento = e.target.elements.pagamento.value;
    const clientId = e.target.elements.clientId.value;

    const formData = {
      procedimento: { sobrancelha, boca, olhos, capilar},
      valor,
      pagamento,
      clientId,
    }

    fetch("/createServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      window.location.reload()
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label>
          Cliente:
          <select name="clientId">
            {clients.map((clients) => (
              <option key={clients.id} value={clients.id}>
                {clients.nome}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ display: 'flex' }}>
        <label style={{ marginRight: '10px' }}>
          Procedimento:
        </label>
        <label htmlFor="sobrancelha" style={{ marginRight: '10px' }}>
          Sobrancelha
          <input type="checkbox" name="sobrancelha" value="Sobrancelha" />
        </label> 
        <label htmlFor="boca" style={{ marginRight: '10px' }}>
          Boca
          <input type="checkbox" name="boca" value="Boca"  />
        </label>
        <label htmlFor="olhos" style={{ marginRight: '10px' }}>
          Olhos
          <input type="checkbox" name="olhos" value="Olhos" />
        </label>
        <label htmlFor="capilar" style={{ marginRight: '10px' }}>
          Capilar
          <input type="checkbox" name="capilar" value="Capilar"/>
        </label>
      </div>
      <div>
        <label>
          Valor:
          <input type="number" name="valor" />
        </label>
      </div>
      <div>
        <label>
          Forma de Pagamento:
          <select name="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão">Cartão</option>
            <option value="Vale Presente">Vale Presente</option>
          </select>
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormService