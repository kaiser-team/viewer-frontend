const isReachable = require('is-reachable')

const xnatIsReachable = async () => {
    return await isReachable('http://localhost:80')
}

const dcm4cheeIsReachable = async () =>{
    return await isReachable('http://localhost:8080/dcm4chee/ui2')
}

export {
    xnatIsReachable,
    dcm4cheeIsReachable
};
