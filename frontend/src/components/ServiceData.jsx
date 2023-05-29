import React from "react";


const ServiceData = ({ services }) =>{

  return(
    <>
      {
        services.map((curService, index) =>{
          return(
          <tr key={index}>
            <td>{curService.client.nome}</td>
            <td>{curService.procedimento}</td>
            <td>{curService.valor}</td>
            <td>{curService.forma_pagamento}</td>
            <td>{curService.createdAt}</td>
          </tr>      
          )
        })
      }
    </>
  )
}

export default ServiceData
