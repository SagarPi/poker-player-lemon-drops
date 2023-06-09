/// <reference path='../typings/index.d.ts'/>
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {PlayerService} from './PlayerService';

const VERSION = "Default TypeScript folding player";

const app = express();
const player = new PlayerService();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', ({}, res) => res.send(200, 'OK'));

app.post('/', (req, res) => {
    console.log("index request body: ", JSON.stringify(req.body));
    const gameState = (typeof req.body.game_state === 'string' || req.body.game_state instanceof String ) ? JSON.parse(req.body.game_state) : req.body.game_state;
    if (req.body.action === 'bet_request') {
        try {
            player.betRequest(gameState, bet => res.status(200).send(bet.toString()));
        } catch (error) {
            
        } finally {
            res.status(200).send("5");
        }
    } else if (req.body.action === 'showdown') {
        player.showdown(JSON.parse(req.body.game_state));
        res.status(200).send('OK');
    } else if (req.body.action === 'version') {
        res.status(200).send(VERSION);
    } else {
        res.status(200).send('OK');
    }
});

const port = parseInt(process.env['PORT'] || 1337);
const host = "0.0.0.0";
app.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
