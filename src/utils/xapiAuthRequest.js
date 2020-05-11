const xapi = require('../xapi')

xapi.setXnatUrl('http://localhost:80')

const user = {
    username: 'admin',
    password: 'admin'
}

async function getStuffDone() {
    await xapi.login(user)
    console.log('Logged in succesfully')

    const response = await xapi.getProjects()
    console.log(response.ResultSet)
    const { ID } = response.ResultSet.Result[0];

    const experiments = await xapi.getExperiments(ID);
    console.log(experiments)

    const subjects = await xapi.getSubjectByProject(ID);
    console.log(subjects)

    const scans = await xapi.getScans(ID, '1', 'XNAT_E00001')
    console.log(scans)

    xapi.logout()
}

getStuffDone()