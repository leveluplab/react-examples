const express = require("express");
const fs = require("fs");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackconfig = require("../webpack.config.js");
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackconfig());
    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackconfig().output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.json());
app.use(express.static("dist"));
app.get("*", (req, res) => {
    try {
        const html = fs.readFileSync('./dist/index.html', 'utf8');
        res.status(200).send(html);
    } catch (e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});
