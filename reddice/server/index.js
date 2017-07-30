import express from 'express';
import path from 'path';


let app = express();


app.listen(3000, () => {
    console.log("Running on localhost: 3000")
});