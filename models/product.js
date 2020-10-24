const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: Array,
        default: 'https://gamek.mediacdn.vn/2019/6/16/anh-1-1560665499838121255197.jpg'
    },
    description: String,
    content: String,
    colors: Array,
    sizes: Array,
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema)