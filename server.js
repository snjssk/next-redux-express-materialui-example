const express = require('express')
const compression = require('compression')
const next = require('next')
const root = process.cwd()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: root })
const handle = app.getRequestHandler()

console.log('----------EXPRESS--------')
console.log('dev:'+dev)

const serverProps = {

}

app.prepare().then(() => {

  const server = express()
  server.use(compression({ level: 4 }))


  server.get('/', (req, res) => {
    const actualPage = '/'
    app.render(req, res, actualPage, serverProps)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

}).catch((ex) => {
  console.error('Error----------------------------')
  console.error(ex.stack)
  process.exit(1)
})