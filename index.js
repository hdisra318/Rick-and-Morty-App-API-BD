import express from 'express';
import cors from 'cors';

import { db } from './config/db.js';
import { Character } from './models/Characters.js';
import router from './routes/CharacterRoutes.js';

const app = express();


app.use(cors());

// Routes
app.use('/save', router);

try {
    await db.authenticate();

    // Descomentar en caso de volver a crear la tabla
    // await db.sync({force: true});

    app.listen(5000, () => {
        console.log("Servidor corriendo en el puerto 5000");
    })

} catch(error) {
    console.log(error);
}


