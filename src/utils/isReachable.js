const isReachable = require('is-reachable');

(async () => {
    console.log(await isReachable('http://www.google.com/'))
    console.log(await isReachable('http://localhost:80'))
    console.log(await isReachable('http://localhost:8080/dcm4chee/ui'))
})
();
