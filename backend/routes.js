import express from "express"
import clients from "./src/controllers/clients.js"
import services from "./src/controllers/services.js";

const routes = express.Router()

//Clientes
routes.get("/clients", clients.findAll);
routes.post("/createClients", clients.addClient);
routes.get("/clients/:id", clients.findClient);
routes.put("/updateClients/:id", clients.updateClient);
routes.delete("/deleteClients/:id", clients.deleteClient);


//Atendimentos
routes.get("/services", services.findAll);
routes.get("/getServices", services.getService);
routes.post("/createServices", services.addService);
routes.get("/services/:id", services.findService);
routes.put("/updateServices/:id", services.updateService);
routes.delete("/deleteServices/:id", services.deleteService);


export {routes as default}