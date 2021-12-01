const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const dbE = require('../src/db/crud.js');