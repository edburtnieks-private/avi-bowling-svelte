const path = require('path');
const express = require('express');
const app = require('./public/App.js');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', function(req, res) {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf8" />
        <meta name="viewport" content="width=device-width" />

        <title>AVI Bowling</title>

        <link rel='stylesheet' href='/sanitize.css'>
        <link rel='stylesheet' href='/global.css'>
        <link rel='stylesheet' href='/bundle.css'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
        <link rel="icon" type="image/png" href="/favicon.png">

        <script defer src="/bundle.js"></script>
      </head>

      <body>
        <div id="app">
          ${html}
        </div>
      </body>
    </html>
  `);

  res.end();
});

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
