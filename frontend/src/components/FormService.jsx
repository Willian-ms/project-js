import React, {useState} from "react";
import {NumericFormat} from "react-number-format"



const FormService = () => {
//  const [formData, setFormData] = useState ({})
  const [clients, setClients] = useState([]);
  const [reais, setReais] = useState([]);
//  const [procedures, setProcedures] = React.useState([]);
  const handleReaisChange = (value) => {
    setReais(value);
  };


  //cliente
  React.useEffect(() =>{
    fetch("/clients")
      .then((res) => res.json())
      .then((clients) => setClients(clients))
  }, [])
  console.log(clients)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const client_id = e.target.elements.client_id.value;
    const procedimento = e.target.elements.procedimento.value
    const valor = e.target.elements.valor.value;
    const pagamento = e.target.elements.pagamento.value;

    const formData = {
      valor,
      procedimento,
      pagamento,
      client_id,
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
          <select name="client_id">
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
        <input type="text" name="procedimento" />
        </label>
      </div>
      <div>
        <label>
          Valor:
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            isNumericString
            value={reais}
            onValueChange={(value) => handleReaisChange(value)}
            customInput={inputProps => <input name="valor" required {...inputProps} />}
          />
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