import React from 'react';
import Sidebar from './Sidebar';
import Modal from "./Modal";
import ServiceData from './ServiceData';
import FormService from './FormService';


const Atendimentos = () => {
  const [services, setServices] = React.useState([]);
  const [show, setShow] = React.useState(false)

  React.useEffect(() =>{
    fetch("/getServices")
      .then((res) => res.json())
      .then((services) => setServices(services))
  }, [])
  console.log(services)

  return (
    <>
      <Sidebar />
      <div className="content">
      <button onClick={() => setShow(true)}>Cadastrar</button>
        <Modal title="Cadastrar Atendimento" onClose={() => setShow(false)} show={show}>
          <FormService /> 
        </Modal>
        <table id="table" className="table-auto">
          <thead>
            <tr>
              <th scope="col" id="col">Cliente</th>
              <th scope="col" id="col">Procedimento</th>
              <th scope="col" id="col">Valor</th>
              <th scope="col" id="col">Forma de pagamento</th>
              <th scope="col" id="col">Data</th>
            </tr>
          </thead>
          <tbody>
            <ServiceData services={services} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Atendimentos;
