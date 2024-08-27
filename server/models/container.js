const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ContainerSchema = new Schema({
    number: {type: String, required: true },
    tracking: {type: String},
    origin: {type: String},
    destination: {type: String},
    date_arrived: {type: Date},
    parcels: [{ type: Schema.Types.ObjectId, ref: "Parcel"}],
    customers: [{ type: Schema.Types.ObjectId, ref: "Customer"}]

})


module.exports = mongoose.model("Container", ContainerSchema) 