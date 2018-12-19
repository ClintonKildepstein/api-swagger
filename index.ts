import * as Express from 'express'
import * as path from 'path'

import { absolutePath } from 'swagger-ui-dist'

const app = Express()
const swaggerDir = absolutePath()

app.use('*', (req, res, next) => {
    if( /^\/(index\.html)?$/gi.test(req.baseUrl))
        return res.sendFile(path.resolve(__dirname + '/public/index.html'))
    
    next()
})
app.use(Express.static(swaggerDir))

app.listen(3000, () => {
    console.log(`Swagger-UI listening to port ${app.get('port')}`)
})