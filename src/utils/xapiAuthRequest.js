const xapi = require('../xapi')

xapi.setXnatUrl('http://localhost:80')


export default async function getStuffDone(user) {
    await xapi.login(user)
    console.log('Logged in succesfully')

    await xapi.getUsers()

    xapi.logout()
}
