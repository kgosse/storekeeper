/*
import express from 'express';
import fs from 'fs';
*/
'use strict';

var express = require('express');
var fs = require('fs');

let app = express();
app.use(express.static(__dirname));

// Data endpoints
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/orders.json', (req, res) => {
    res.sendFile(__dirname + '/data/orders.json');
});

app.get('/orders', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/catalog', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = app.listen(9090, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Storekeeper app listening at http://%s:%s', host, port);
});

