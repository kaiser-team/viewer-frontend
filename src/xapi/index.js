const xnat = require('xnat-rest')
const request = require('request')

const xapi = {}
Object.setPrototypeOf(xapi, xnat)


xapi.getSubjectByProject = function (projectID) {
    var self = this;

    return new Promise(function(resolve, reject) {
        // var params = {
        //     format: "json"
        // }

        var options = {
            url: self.getXnatUrl() + "/data/projects/" + projectID + "/subjects",
            method: 'GET',
            jar: self.jar,
            agentOptions: self.agentOptions
        }

        request(options, function(err,res,body){
            if(err){
                reject(err);
            }
            else{
                if(res.statusCode === 200){
                    resolve(JSON.parse(body).ResultSet.Result)
                }else{
                    reject(body)
                }
            }
        })
    })
}

module.exports = xapi