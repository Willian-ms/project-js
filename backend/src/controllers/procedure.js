/*import ProcedureRepository from "../models/procedureModel.js"


function findAll(req, res) {
  ProcedureRepository.findAll().then((result) => res.json(result));
}

function findProcedure(req, res) {
  ProcedureRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addProcedure(req, res) {
  ProcedureRepository.create({
    procedimento: req.body.procedimento,
  }).then((result) => res.json(result));
}

async function updateProcedure(req, res) {
  await ProcedureRepository.update(
    {
    procedimento: req.body.procedimento,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  ProcedureRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteProcedure(req, res) {
  await ProcedureRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  ProcedureRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addProcedure, findProcedure, updateProcedure, deleteProcedure };
*/