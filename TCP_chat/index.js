const net = require('net')
const server = net.createServer()
const fs = require('fs')

const promise = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject(err)
            resolve(data.toString())
        })
    })
}
let clients = {}
const handleConnection = (conn) => {
    const currentClient = `CONNECTION FROM ${conn.remoteAddress} ON PORT ${conn.remotePort}`
    console.log(currentClient)

    clients[currentClient] = conn

    conn.on('data', async data => {
        Object.keys(clients).forEach(client => {
            if (client !== currentClient) {
                clients[client].write(`${client}: ${data}`)
            }
        })
        const reply = await promise('./text.txt')
        conn.write(reply)
    })

    conn.on('error', err => {
        console.log(err)
    })

    conn.on('close', () => {
        Object.keys(clients).forEach(client => {
            if (client !== currentClient) {
                clients[client].write(`${currentClient} HAS DISCONNECTED`)
            }
        })
        delete clients[currentClient]
    })
}

server.on('connection', handleConnection)

server.listen(9001, () => {
  console.log('SERVER RUNNING ON %j', server.address())
})