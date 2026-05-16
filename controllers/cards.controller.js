const { json } = require("express");
const logger = require("../config/logger");
const cardRepository = require("../repositories/cards.repository");


const cards = async (req, res, next) => {
    try {

        const { userid, limit } = req.body;        

        if (!userid || !limit) {
            const error = new Error("userid y limit son obligatorios");
            error.statusCode = 400;
            throw error;            
        }

        const newCard = {
            userid: userid,
            limit: limit,
            balance: 0,
        };

        const crearCard = await cardRepository.create(newCard);

        res.status(200).json({
            status: "Tarjeta ingresada",
        });

    } catch (error) {        
        next(error);
    }
};

const registrarConsumo = async (req, res, next) => {
    try{
        const id = Number(req.params.id);
        const importe = req.body;

        logger.info({            
            message: { 
                body: req.body,
                id: id,
                servicio: "registrarConsumo" 
                }
        });   

        res.status(200).json({
            status: "Consumo registrado",
        });

    } catch (error){
        next(error);
    }
};

const balance = async  (req, res, next) => {
    try{
        const id = Number(req.params.id);        

        logger.info({body: id})

        res.status(200).json({
            status: "Balance",
        });
    }catch(error){
        next(error);
    }
};


module.exports =  { cards, registrarConsumo, balance };