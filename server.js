import express from 'express';
import cors from 'cors';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`))