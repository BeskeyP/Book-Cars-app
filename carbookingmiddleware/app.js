const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const apiRouter = require('./src/routes/loginuser.js');
const adminRouter = require('./src/routes/adminroutes.js');
const customerRouter = require('./src/routes/customerroutes.js');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

app.use(bodyParser.json());
app.use(cors());
 
apiRouter.use(cookieParser());
 
app.use('/apiRouter',apiRouter);
app.use('/adminRouter', adminRouter);
app.use('/customerRouter',customerRouter);




// app.get('/', (req, res) => {
//     res.json({
//         route: '/',
//         authentication: false
//     });
// });

app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});


module.exports = app;