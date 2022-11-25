//const express = require('express');
import express from 'express';
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT= process.env.PORT || 4000

app.listen( PORT, () => {
    console.log(`Servidor conectado puerto ${PORT}`);

});