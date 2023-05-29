import React, {useState} from "react";
import {NumericFormat} from "react-number-format"


const FormService = () => {
  const [formData, setFormData] = useState ({

  })

  return (
    <form>
      <div>
        <label>
          Cliente:
          <input type="Select" name="nome" />
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
          customInput={inputProps => <input {...inputProps} />}
        />
        </label>
      </div>
      <div>
        <label>
          Forma de Pagamento:
          <input maxLength={11} type="text" name="cpf"/>
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormService