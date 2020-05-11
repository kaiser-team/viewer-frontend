import config from '../config/servicesConfig';
const isReachable = require('is-reachable')

const xnatIsReachable = async () => {
    return await isReachable(config.xnatURL)
}

const dcm4cheeIsReachable = async () =>{
    return await isReachable(config.dcm4cheeURL)
}

export {
    xnatIsReachable,
    dcm4cheeIsReachable
};
