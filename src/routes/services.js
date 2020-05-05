const express = require('express');
const { accounts, writeJSON } = require('../data');

const router = express.Router();

app.get('/transfer', (req, res) => res.render('transfer'));
app.post('/transfer', (req, res) => {
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) + parseInt(req.body.amount, 10);
    writeJSON(accounts);
    res.render('transfer', { message: 'Transfer Completed' });
});

app.get('/payment', (req, res) => {
    res.render('payment', { account: accounts.credit })
});
app.post('/payment', (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount, 10);
    writeJSON(accounts);
    res.render('payment', { message: 'Payment Successful', account: accounts.credit });
});

module.exports = router;