const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const database = require('./database');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const cartProductRouter = require('./routes/cartProducts');
const productRouter = require('./routes/product');

app.use('/users',usersRouter);
app.use('/auth',authRouter);
app.use('/cartProducts',cartProductRouter);
app.use('/product',productRouter);


app.get('/', (req, res) => {
    res.send('Api Running');
  });

app.listen(PORT,()=>{
    console.log(`app listen to port ${PORT}`);
})

