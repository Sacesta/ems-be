const express = require('express');
const cors = require('cors');

//Root routes
const auth = require('./routes/auth');
const admin = require('./routes/admin');
const employee = require('./routes/employee');
const session = require('./routes/session');
const log = require('./routes/log');


const app = express();


app.use(cors());
app.use(express.json())


// Routes
app.use('/',auth)
app.use('/admin/',admin)
app.use('/employee/',employee)
app.use('/session/',session)
app.use('/log/',log)


app.listen(process.env.PORT,()=>{
    console.log(`server started at Port : ${process.env.PORT}`);
})