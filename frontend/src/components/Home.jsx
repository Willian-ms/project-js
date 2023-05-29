import React from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import ClientData from "./ClientData";
import Form from "./Form"

export default function Main() {
  const [clients, setClients] = React.useState([]);
  const [show, setShow] = React.useState(false)

    React.useEffect(() => {
    fetch("/clients")
      .then((res) => res.json())
      .then((clients) => setClients(clients));
  }, []);
  console.log(clients)
  return (
    <>
      <Sidebar />
      <div className="content">
      <button onClick={() => setShow(true)}>Cadastrar</button>
        <Modal title="Cadastrar Cliente" onClose={() => setShow(false)} show={show}>
          <Form />
        </Modal>
        <table id="table" className="table-auto">
          <thead>
            <tr>
              <th scope="col" id="col">Nome</th>
              <th scope="col" id="col">Endereço</th>
              <th scope="col" id="col">Telefone</th>
              <th scope="col" id="col">CPF</th>
              <th scope="col" id="col">RG</th>
              <th scope="col" id="col">Nascimento</th>
            </tr>
          </thead>
          <tbody>
            <ClientData clients={clients} />
          </tbody>
        </table>
      </div>
    </>
  );
}
