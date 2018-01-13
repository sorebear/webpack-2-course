const express = require('express');
const path = require('path');

const app = express();
const localPort = 3050;

// Server Routes...

// Make sure all this additional code is above the Webpack Configuration


// Note that process.env.NODE_ENV will be set differently depending on the deployment target
if (process.env.NODE_ENV !== 'production') {
   const webpackMiddleware = require('webpack-dev-middleware');
   const webpack = require('webpack');
   const webpackConfig = require('./webpack.config.js');
   app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
   app.use(express.static('dist'));
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
   })
}

app.listen(process.env.PORT || localPort, () => console.log('Listening'));