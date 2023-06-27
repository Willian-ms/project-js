import ServiceRepository from "../models/servicesModel.js"
import client from "../models/clientsModel.js"
//import procedure from "../models/procedureModel.js"

function getService(req, res) {
  ServiceRepository.findAll({
    include: [{
      model: client,
      attributes: ['nome'] 
    },/*
     {
      model: procedure,
      attributes: ['procedimento']
     }*/
    ],
  })
  .then((ServiceRepository) =>{
    res.json(ServiceRepository)
  })
  .catch((error) =>{
    res.status(500).json({error: "erro ao obter atendimentos"})
  })
}

function findAll(req, res) {
  ServiceRepository.findAll().then((result) => res.json(result));
}

function findService(req, res) {
  ServiceRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addService(req, res) {
  ServiceRepository.create({
    procedimento: req.body.procedimento,
    valor: req.body.valor,
    forma_pagamento:req.body.pagamento,
    client_id: req.body.client_id
  }).then((result) => res.json(result));
}

async function updateService(req, res) {
  await ServiceRepository.update(
    {
      procedimento: req.body.procedimento,
      valor: req.body.valor,
      forma_pagamento:req.body.pagamento
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  ServiceRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteService(req, res) {
  await ServiceRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  ServiceRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addService, findService, updateService, deleteService, getService };