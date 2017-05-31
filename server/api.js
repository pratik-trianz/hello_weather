// exports routes
module.exports = function(app,bodyParser,http,request,nodeGoogleplaces,places){

  // Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// app.get('/getCst/:id', function (req, res, next) {
//
//         var id = req.params.id;
// });
  // get team
  app.get('/cities', function(req, res) {

    var city = req.query.cityname;
    console.log(req.params)
    var mainRes = res;
    const params = {
      input: city
    };
    // Callback
    places.autocomplete(params, (err, res) => {
      console.log(res.body);
      mainRes.json(res.body.predictions);
    });
  });

}
