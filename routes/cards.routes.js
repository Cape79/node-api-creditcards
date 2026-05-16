const express = require("express");
const router = express.Router();

const { cards, registrarConsumo, balance } = require("../controllers/cards.controller");

router.post("/", cards);

router.post("/:id/transactions", registrarConsumo);

router.get("/:id/balance", balance);



module.exports = router;