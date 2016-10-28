angular.module('MrWest', [])
    .controller('kCheddah', kController);

kController.$inject = ['$http'];

function kController() {
    var kanye = this;

    kanye.greeting = "Imma let you finish....";

    $http.get('/api/kanye.counter').then(function(response) {
        kanye.counter = JSON.parse(response.data.response.body);
        console.log(kanye.counter);

        for (prop in kanye.counter) {
            arr.push({


            });
        }
    });
}
