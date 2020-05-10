const axios = require('axios');
var setCookie = require('set-cookie-parser');

const baseURL = 'http://localhost'

const user = {
    'username': 'admin',
    'password': 'admin'
};

const agentOptions = {
    rejectUnauthorized: false
};

axios.post(baseURL + '/data/JSESSION', {
        agentOptions,
        
    })
    .then(function(response){
       var cookies = setCookie.parse(response, {
           decodeValues: true
       })
       console.log(cookies[0]['name'])
       console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })

axios.post(baseURL + '/data/projects', {
        auth: user,
        agentOptions,
            
    })
    .then(function(response))

// axios.get(baseURL + '/xapi/users', {
//         agentOptions,
//         auth: user
//     })
//     .then(function (response) {
//         console.log(response.data)
//     })
//     .catch(function(error) {
//         console.log(error)
//         console.log('ERROR')
//     })



