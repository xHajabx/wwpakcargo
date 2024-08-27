const mongoose = require("mongoose")

const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
    sender_first_name: { type: String, required: true, maxLength: 100 },
    sender_last_name: { type: String, maxLength: 100 },
    sender_address: {type: String}, 
    sender_contact_num: {type: String },
    sender_email: {type: String},
    
    receiver_first_name: {type: String}, 
    receiver_last_name: {type: String }, 
    receiver_address: { type: String }, 
    receiver_contact: {type: String}, 
    receiver_contact_2: {type: String}, 

    parcel_weight: { type: String}, 
    total_parcel: { type: String }, 
    charges: { type: String }, 
    tracking: { type: String }, 
    insurance: { type: String }

})

module.exports = mongoose.model("Invoice", InvoiceSchema) 