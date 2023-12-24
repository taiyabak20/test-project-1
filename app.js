const express = require('express')
const app = express()
const port = 3000;
const sequelize = require('./db')
const cors = require('cors')
const playersRoutes = require('./routes/routes')


app.use(cors())
app.use(express.json())
app.use('/players', playersRoutes)

sequelize
.sync()
//.sync({force: true})
.then(result => {
    //console.log(result)
    app.listen(port, ()=> {
        console.log('running the app on port '+ port)
    })
})
.catch(err => console.log(err))
