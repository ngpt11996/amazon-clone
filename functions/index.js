/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NnYRiSJ5o2vvo8Fb8fkTJ62aZOxi4ZBvPvIMVmhTCdfCuLxTLE9HxcytiwpybayTaUQw0lOb3kaedoHAno8d75O00j22srWWq");

//API

//App config
const app=express();

//middle wares
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:false,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors({origin:true}));
app.use(express.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
//     next();
//   });


// API routes 

app.get("/",(request,response)=>response.status(200).send("hello world"));

app.post("/payments/create",async(request,response)=>{
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount",total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "inr" //currency country
    });
    response.status(201).header("Access-Control-Allow-Origin", "*")
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Headers', 'Content-Type').send({
        clientSecret: paymentIntent.client_secret,
    })
});

//Listen command0
exports.api = functions.https.onRequest(app);