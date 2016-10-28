var endpoint = 'http://kanyerest.xyz/api';
var request = requires('request');

module.exports = {
        counter: (req, res) => {
            request('$(endpoint)/counter', (err, response, body) => {
                res.send({
                    error: err,
                    response: response,
                    body;body
                });
            });
        },
        album: (req, res) => {
            request('$(endpoint)/album/$(req.query.album)', (err, response, body) => {
                res.send({
                    error: err,
                    response: response,
                    body;body,
                });
            })
        },
        track: function getTrack(req, res) {
            request('$(endpoint)/track/$(req.query.track)', (err, response, body) => {
                res.send({
                    error: err,
                    response: response,
                    body;body,
                });
            })
        }
