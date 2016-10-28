module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('I wanna be like Kanye');
  });


app.get('./api/kanye/counter', function(req, res))
app.get('./api/kanye/album', function(req, res))
app.get('./api/kanye/track', function(req, res))

};
