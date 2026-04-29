const config = require("./config/index");
const app = require("./server");

const port = config.port;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});