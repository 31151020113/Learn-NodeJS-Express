const dotenv = require("dotenv");
const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRouter')

dotenv.config();
const app = express()
app.use(express.json())

app.use('/api/product', productRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port', port)
})

// connect Mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connect Mongodb success")
}).catch((error) => {
    console.log("Connect Mongodb fail", error)
})