import React, {useEffect, useState} from "react";
import {NumericFormat} from "react-number-format"



const FormService = () => {
  const [formData, setFormData] = useState ({})
  const [clients, setClients] = React.useState([]);

  React.useEffect(() =>{
    fetch("/clients")
      .then((res) => res.json())
      .then((clients) => setClients(clients))
  }, [])
  console.log(clients)


  return (
    <form>
      <div>
        <label>
          Cliente:
          <select name="cliente">
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
        <label htmlFor="unhas" style={{ marginRight: '10px' }}>
          Sobrancelha
          <input type="checkbox" name="unhas" />
        </label>
        <label htmlFor="unhas" style={{ marginRight: '10px' }}>
          Boca
          <input type="checkbox" name="unhas" />
        </label>
        <label htmlFor="unhas" style={{ marginRight: '10px' }}>
          Olhos
          <input type="checkbox" name="unhas" />
        </label>
        <label htmlFor="unhas" style={{ marginRight: '10px' }}>
          Capilar
          <input type="checkbox" name="unhas" />
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
          customInput={inputProps => <input required {...inputProps} />}
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