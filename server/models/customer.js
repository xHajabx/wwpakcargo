const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    // id: { type: String, required: true}, 
    first_name: { type: String, maxLength: 100 },
    last_name: { type: String,  maxLength: 100 },
    address: {type: String},
    contact_num: {type: String},
    email: {type: String},
    invoice: [{type: Schema.Types.ObjectId, ref:"Invoice"}]
})

CustomerSchema.virtual("name").get(function() {
    let fullName = "";
    if(this.first_name && this.last_name) {
        fullName = `${this.first_name} ${this.last_name}`; 
    }
    return fullName; 
})


module.exports = mongoose.model("Customer", CustomerSchema) 
