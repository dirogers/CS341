const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    books: [
        {
        book: {type: Object, required: true},
        quantity: {type: Number, require: true}
        }
    ],
    user: {
        email: {
        type: String, 
        required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'    
        }
    }
});

module.exports = mongoose.model('Order', orderSchema);