const express = require('express'),
      http = require('http'),
      favicon = require('serve-favicon'),
      bodyParser = require('body-parser'),
      config = require('./config/config'),
      pageRoutes = require("./src/page-routes"),
      restRoutes = require("./src/rest-routes"),
      AboutUsService = require('./src/models/aboutUs/service'),
      log = require('./lib/log')(module),
      errorHandler = require('express-error-handler'),
      path = require('path');

const app = express();

let aboutUs = [];

AboutUsService.getAboutUsFromContentful('aboutUs', (aboutUs) => {
    this.aboutUs = aboutUs
});

app.set('port', config.port);

http.createServer(app).listen(app.get('port'), () => {
    log.info('Express server listening on port ' + app.get('port'));
});

app.set('views', __dirname + '/assets/templates');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/assets/public/'));

app.use(favicon(path.join(__dirname, '/assets/public/img', 'favicon.ico')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
        res.render("index", {
            aboutUs: this.aboutUs
        })
    });

app.post('/api/update', (req, res, next) => {
    AboutUsService.getAboutUsFromContentful('aboutUs', (aboutUs) => {
        this.aboutUs = aboutUs;

        res.redirect('/');
    });
});


app.use(pageRoutes);

app.use(restRoutes);

// app.use((err, req, res, next) => {
//     // NODE_ENV = 'production'
//     if (app.get('env') === 'development') {
//         app.use(errorHandler());
//     } else {
//         res.send(500);
//     }
// });
