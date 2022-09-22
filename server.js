const Hapi = require('hapi')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
})

server.route({
    path: '/api/welcome',
    method: 'GET',
    handler () {
        return {
            code: 200,
            success: true,
            data: {
                msg: 'welcome'
            }
        }
    }
})
server.route({
    path: '/api/du',
    method: 'POST',
    handler () {
        return {
            code: 200,
            success: true,
            data: {
                msg: '我是小度'
            }
        }
    }
})

const init = async () => {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}
init()
