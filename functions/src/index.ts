import * as functions from 'firebase-functions';
import {environment} from '../../src/environments/environment';
const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const app = express();
import * as cors from "cors";

//options for cors midddleware
const corsOptions: cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: '*',
  preflightContinue: false
};


// Automatically allow cross-origin requests
app.use(cors(corsOptions));

app.get('/currently_playing', (req, res) => {

    // Request new Spotify access token with refresh token.
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (new Buffer(environment.spotify.client_id + ':' + environment.spotify.client_secret).toString('base64')) },
      form: {
        grant_type: 'refresh_token',
        refresh_token: environment.spotify.refresh_token
      },
      json: true
    };
    request.post(authOptions, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          const access_token = body.access_token;
          const options = {
            url: 'https://api.spotify.com/v1/me/player/currently-playing?market=US',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json',
            },
            json: true
          };
          request.get(options, function (req_error, req_response, req_body) {
            res.send(body);
          });
        } else {
          res.send(JSON.stringify(response));
        }
    });
});

exports.api = functions.https.onRequest(app);



