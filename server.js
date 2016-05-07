// import some new stuff
import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from './src/modules/routes'
var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();
app.use(compression());
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    // match the routes to the url
    match({ routes: routes, location: req.url },
        (err, redirectLocation, renderProps) => {
            if (err) {
                res.status(500).send(error.message)
            }else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            }else if (renderProps) {
                res.status(200).send(renderPage(renderToString(<RouterContext {...renderProps} />)))
            } else {
                res.status(404).send('Not found')
            }
    });
});

function renderPage(appHtml) {
    return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <div id=root>${appHtml}</div>
    <script src=/static/bundle.js></script>
    <link href=https://fonts.googleapis.com/css?family=Open+Sans:300 rel=stylesheet type=text/css />
    <link href=https://fonts.googleapis.com/css?family=Abril+Fatface rel=stylesheet type=text/css />
   `
}

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
})